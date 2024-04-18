const mysql = require("mysql2");



const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_forschool",
  connectionLimit: 5,
});


db.getConnection((err, con) => {
  if (err) {
    console.log(`Could't conncet to the database`);
  } else {
    console.log(`Connected succesfully`);
  }
});

module.exports = db;
