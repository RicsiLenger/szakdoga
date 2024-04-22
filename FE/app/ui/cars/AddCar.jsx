
import React, { useState } from "react";
import axios from "axios";
const AddCar = () => {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    yom: "",
    enginecap: "",
    perf: "",
    mileage: "",
    trans: "",
    fuel: "",
    wheelsize: "",
    color: "",
    extras: "",
    description: ""
  })
  const [selectedCarType, setSelectedCarType] = useState("");
  const [selectedCarMil, setSelectedCarMil] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/cars/add", formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(response.data)
        alert(`${formData.name} added succesfully`)
    } catch (error) {
      console.error("Error adding car:" + error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleTypeChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    setSelectedCarType(e.target.value);
  }
  const handleMilChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    setSelectedCarMil(e.target.value)
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="w-[500px] rounded-xl md:max-w-2xl md:mx-auto border-2 border-slate-500 font-bold bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#fff_100%)]">
      <h2 className="flex justify-center mt-4 mb-8 text-xl">Add New Car</h2>
      <div className="grid grid-cols-2 gap-4 m-2 ml-4 mr-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Car Name"
            required
            className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
          ></input>
        </div>
        <select
          required
          type="text"
          name="type"
          value={formData.type}
          onChange={handleTypeChange}
          className={`border border-solid p-1 border-slate-500 rounded-[8px] ${
            selectedCarType ? "text-black" : "text-gray-400"
          } focus:bg-slate-300 focus:outline-none shadow-md`}
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
          name="yom"
          min="1970"
          max={currentYear}
          value={formData.yom}
          onChange={handleChange}
          placeholder="Year of Manufacture"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="enginecap"
          value={formData.enginecap}
          onChange={handleChange}
          placeholder="Enter Engine Capacity"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="perf"
          value={formData.perf}
          onChange={handleChange}
          placeholder="Enter Perfomance in kW"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="text"
          name="fuel"
          value={formData.fuel}
          onChange={handleChange}
          placeholder="Enter the Fuel Type"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          placeholder="Enter the Mileage in KM"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <select
          type="text"
          name="trans"
          value={formData.trans}
          onChange={handleMilChange}
          placeholder="Enter the Fuel Type"
          required
          className={`border border-solid p-1 border-slate-500 rounded-[8px] ${
          selectedCarMil ? "text-black" : "text-gray-400"  
          } focus:bg-slate-300 focus:outline-none shadow-md`}
        >
          <option value="">Select Transmission Type</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        
        </select>
        <input
          type="number"
          name="wheelsize"
          value={formData.wheelsize}
          onChange={handleChange}
          placeholder="Enter Wheel Size"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Enter Car Color"
          required
          className="border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></input>
      </div>
      <div className="mr-4 ml-4 h-16 flex justify-center">
        <textarea
          name="extras"
          value={formData.extras}
          onChange={handleChange}
          placeholder="Enter theExtras of the Car"
          required
          className="w-full resize-none mt-2 mb-3 border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></textarea>
      </div>
      <div className="ml-4 mr-4 h-16 flex justify-center">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the Car"
          required
          className="w-full resize-none mt-2 mb-3 border border-solid p-1 border-slate-500 rounded-[8px] text-black focus:bg-slate-300 focus:outline-none shadow-md"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button 
        type="submit"
        className="w-1/2 py-2 mb-2 bg-gradient-to-r from-slate-800 to-gray-400 text-white rounded-md focus:bg-slate-300 focus:outline-none hover:from-gray-400 hover:to-slate-800 transition duration-300 shadow-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCar;
