import React, { useState } from 'react'

const register = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
      });
    
      const { username, name, email, password } = formData;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ebben a függvényben írd meg a regisztrációs logikát, például adatküldést a szerverre
        console.log('Form submitted:', formData);
        // További regisztrációs lépések...
      };
    
      return (
        <div className="container mx-auto mt-10 flex justify-center">
          <h2 className="text-3xl font-bold mb-5">Register</h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-sm mt-1"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      );
    };
export default register