import React from "react";
import Image from "next/image";
import sedan from "@/public/sedan.png";
import pickup from "@/public/pickup.png";
import hatchback from "@/public/hatchback.png";
import suv from "@/public/suv.png";
import wagon from "@/public/wagon.png";
import coupe from "@/public/coupe.png";

const carTypeImages = {
  Sedan: sedan,
  Pickup: pickup,
  Hatchback: hatchback,
  SUV: suv,
  Wagon: wagon,
  Coupé: coupe,
};

const singleCar = ({ car }) => {
  const { Type } = car;
  const carImage = carTypeImages[Type];

  return (
    <div className=" w-full rounded-xl md:max-w-2xl md:mx-auto border-2 border-slate-400 font-bold bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#fff_100%)]">
      <h2 className="flex justify-center mt-4 mb-8 text-xl"> CAR DATA</h2>
      <div>
      
      <Image className="invert relative" src={carImage} alt={Type} width={600}/>
      <div className="absolute h-32 w-32 top-[300px] left-[80px]" title={`Wheel Size: ${car.WheelSize}`}></div>
      <div className="absolute h-32 w-32 top-[300px] right-[80px]" title={`Wheel Size: ${car.WheelSize}`}></div>
      <div className="absolute h-24 w-96 top-[200px] right-[80px]" title={`Color of the Car: ${car.Color}`}></div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-2 ml-4 mr-4">
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Car Name:</label>
          <span className="ml-10"> {car.Name} </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Car Type:</label>
          <span className="ml-10"> {car.Type} </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Year of Manufacture:</label>
          <span className="ml-10"> {car.YoM} </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Engine Capacity:</label>
          <span className="ml-10"> {car.EngineCap} cc</span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Perfomance:</label>
          <span className="ml-10">
            {" "}
            {car.Perf} kW ({Math.round(car.Perf * 1.34102209)} hp){" "}
          </span>
        </div>

        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Fuel:</label>
          <span className="ml-10">{car.Fuel}</span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Mileage:</label>
          <span className="ml-10"> {car.Mileage} KM </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Transmission:</label>
          <span className="ml-10"> {car.Trans} </span>
        </div>
        {/* <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Wheel Size:</label>
          <span className="ml-10">{car.WheelSize}" </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Color:</label>
          <span className="ml-10">{car.Color}</span>
        </div> */}
      </div>
      <div className="flex flex-col items-center ml-4 mr-4">
        <div className="flex flex-col pl-4 shadow-xl w-full ml-2 mr-2 mt-3 mb-5 border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Extras:</label>
          <span className="ml-10"> {car.Extras} </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl w-full mb-5 border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Description:</label>
          <span className="ml-10">{car.Description} </span>
        </div>
      </div>
    </div>
  );
};

export default singleCar;
