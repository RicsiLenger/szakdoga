const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db/connection");


const app = express();
const port = 3001;
const dbProm = db.promise()
app.use(cors());
app.use(express.json());


//Register Endpoint
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPw = await bcrypt.hash(password, 10);
  console.log(hashedPw);

  const q = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";

  db.query(q, [username, email, hashedPw], (err, result) => {
    if (err) {
      console.log("Error in registration: " + err);
    } else {
      res.json({ message: "Registration succes!" });
    }
  });
});


//Login Endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are Required" });
  }

  const q = "SELECT * FROM user WHERE username = ? ";
  db.query(q, [username], async (err, result) => {
    if (err || result.length === 0) {
      console.log("Error with the username:" + err);
      res.status(404).json({ message: "Couldn't find the username" });
    } else {
      const match = await bcrypt.compare(password, result[0].password);
      if (match) {
        const token = jwt.sign({ userId: result[0].id }, 'secret_key', {
          expiresIn: "1h",
        });
        res.json({ message: "Login Succesful", token });
      } else {
        res.status(401).json({ message: "Invalid Password" });
      }
    }
  });
});


//Authenticate middleware
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("Unextracted Token: " + token)

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const extractedToken = token.split(" ")[1];
  console.log("Actual Token:" + extractedToken);

  try {
    const decoded = jwt.verify(extractedToken, 'secret_key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token Verification Error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};


//Profile EndPoint
app.get('/profile', authenticate, (req, res) => {
    const userId = req.userId
    const q = "SELECT * FROM user WHERE id = ?"

    db.query(q, [userId], (err, result)=>{
        if(err || result.length===0){
            res.status(500).json({message: "Error fetching details"})
        }else{
            res.json({
              username: result[0].username, 
              email: result[0].email
            })
        }
    })
})


//Cars Endpoint
app.get('/cars', authenticate, async (req, res) => {
  const userId = req.userId;

  const q = `SELECT c.* FROM car c JOIN connect cn ON c.id = cn.car_id WHERE cn.user_id = ?`;

  db.query(q, [userId], (err, result) => {
      if (err) {
          res.status(500).json({ message: 'Error fetching cars' });
      } else {
          res.json(
            result);
      }
  });
});

// app.get('/cars/:carId', authenticate, (req, res) => {
//   const userId = req.userId;
//   const carId = req.carId;

//   const q = `SELECT * FROM car c JOIN connect cn ON c.id = cn.car_id WHERE cn.user_id = ? AND c.id = ?`

//   db.query(q, [userId, carId], (err, result) => {
//     if (err) {
//       res.status(500).json({ message: 'Error fetching car details' });
//     } else {
//       if (result.length === 0) {
//         res.status(404).json({ message: 'Car not found or not associated with user' });
//       } else {
//         const carDetails = result[0];
//         res.json(carDetails);
//       }
//     }
//   });
// })



app.post('/cars/add', authenticate, async (req, res) => {
  const userId = req.userId;
  const {name, type, yom, enginecap, fuel, perf, color, wheelsize, extras, description} = req.body

  const carInsertQ = `INSERT INTO car (Name, Type, YoM, EngineCap, Fuel, Perf, Color, WheelSize, Extras, Description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const connectInsertQ = `INSERT INTO connect (user_id, car_id) VALUES (?, ?)`;

  try {
    
    const carResult = await dbProm.query(carInsertQ, [name, type, yom, enginecap, fuel, perf, color, wheelsize, extras, description]);
    carId = carResult[0].insertId

    if (!carId) {
      throw new Error('Failed to get car ID after insertion');
    }

    await dbProm.query(connectInsertQ, [userId, carId])

    res.json({ message: 'Car added succesfully'})
  } catch (error) {
    console.error('Error adding car: '+error)
    res.status(500).json({ message: 'Failed to add car '})
  }

})

app.listen(port, () => {
  console.log("Server is running..");
});
