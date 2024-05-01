import React, { useState } from "react";
import axios from "axios";

const UpdateCar = ({ car }) => {
  const currentYear = new Date().getFullYear();
  const [UpdateCar, SetUpdateCar] = useState(car);

  const handleSubmit = async () => {

    try {
      const response = await axios.put(`http://localhost:3001/cars/${car.id}`, UpdateCar, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);
      alert("Car updated successfully!");
    } catch (error) {
      console.error("Error updating car:", error);
      alert("Failed to update car");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name} - New value: ${value}`);
    SetUpdateCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className="w-[500px] rounded-xl md:max-w-2xl md:mx-auto border-2 border-slate-500 font-bold bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#fff_100%)]">
      <h2 className="flex justify-center mt-4 mb-8 text-xl">Update Car</h2>
      <div className="grid grid-cols-2 gap-4 m-2 ml-4 mr-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="Name"
            value={UpdateCar.Name}
            onChange={handleChange}
            placeholder="Enter Car Name"
            required
            className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
          ></input>
        </div>
        <select
          required
          type="text"
          name="Type"
          value={UpdateCar.Type}
          onChange={handleChange}
          className={`border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md`}
        >
          <option value={""}>Select Car Type</option>
          <option value={"Sedan"}>Sedan</option>
          <option value={"Hatchback"}>Hatchback</option>
          <option value={"SUV"}>SUV</option>
          <option value={"Wagon"}>Wagon</option>
          <option value={"Coupé"}>Coupé/Convertible</option>
          <option value={"Pickup"}>Pickup</option>
        </select>
        <input
          type="number"
          name="YoM"
          min="1970"
          max={currentYear}
          value={UpdateCar.YoM}
          onChange={handleChange}
          placeholder="Year of Manufacture"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="EngineCap"
          value={UpdateCar.EngineCap}
          onChange={handleChange}
          placeholder="Enter Engine Capacity"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="Perf"
          value={UpdateCar.Perf}
          onChange={handleChange}
          placeholder="Enter Perfomance in kW"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="text"
          name="Fuel"
          value={UpdateCar.Fuel}
          onChange={handleChange}
          placeholder="Enter the Fuel Type"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="Mileage"
          value={UpdateCar.Mileage}
          onChange={handleChange}
          placeholder="Enter the Mileage in KM"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <select
          type="text"
          name="Trans"
          value={UpdateCar.Trans}
          onChange={handleChange}
          placeholder="Enter the Fuel Type"
          required
          className={`border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md`}
        >
          <option value="">Select Transmission Type</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
        <input
          type="number"
          name="WheelSize"
            value={UpdateCar.WheelSize}
            onChange={handleChange}
          placeholder="Enter Wheel Size"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="text"
          name="Color"
            value={UpdateCar.Color}
            onChange={handleChange}
          placeholder="Enter Car Color"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
      </div>
      <div className="mr-4 ml-4 h-16 flex justify-center">
        <textarea
          name="Extras"
            value={UpdateCar.Extras}
            onChange={handleChange}
          placeholder="Enter theExtras of the Car"
          required
          className="w-full resize-none mt-2 mb-3 border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></textarea>
      </div>
      <div className="ml-4 mr-4 h-16 flex justify-center">
        <textarea
          name="Description"
            value={UpdateCar.Description}
            onChange={handleChange}
          placeholder="Describe the Car"
          required
          className="w-full resize-none mt-2 mb-3 border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/2 py-2 mb-2 bg-gradient-to-r from-slate-800 to-gray-400 text-white rounded-md focus:bg-slate-300 focus:outline-none hover:from-gray-400 hover:to-slate-800 transition duration-300 shadow-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateCar;
