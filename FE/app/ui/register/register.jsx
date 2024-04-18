import React, { useState } from "react";
import axios from "axios";

const register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    

    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      );
      alert("Registration went well: " + formData.username)
      console.log("Registration succesful");
    } catch (error) {
      console.log("Registration failed" + error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 rounded-[20px] bg-slate-800 shadow-md max-w-md w-[42vw] font-bold">
        <h2 className="text-3xl mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-sm mt-1 text-gray-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-sm mt-1 text-gray-900"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-sm mt-1 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-md focus:outline-none hover:from-blue-800 hover:to-blue-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default register;
