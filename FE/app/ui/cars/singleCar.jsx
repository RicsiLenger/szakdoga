
import React, { useEffect, useState } from "react";
import axios from "axios";

const singleCar = ({car}) => {

  return (
    <div className="bg-cl1 w-full rounded-xl md:max-w-2xl md:mx-auto border-2 border-slate-500 font-bold">
      <h2 className="flex justify-center mt-4 mb-8 text-xl"> CAR DATA</h2>
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
          <span className="ml-10"> {car.Perf} kW ({Math.round(car.Perf * 1.34102209)} hp) </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Fuel:</label>
          <span className="ml-10">{car.Fuel}</span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Wheel Size:</label>
          <span className="ml-10">{car.WheelSize}" </span>
        </div>
        <div className="flex flex-col pl-4 shadow-xl border-b-2 border-r-2 border-gray-400 rounded overflow-hidden hover:border-cl2 transition-all duration-300">
          <label>Color:</label>
          <span className="ml-10">{car.Color}</span>
        </div>
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
