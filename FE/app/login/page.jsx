"use client";

import React, { Fragment, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Modal from "../ui/modal/modal";
import Register from "../ui/register/register";

export default function page() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleRegisterClick = () => {
    setShowRegisterModal(true)
  }

  return (
    <Fragment>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-800 rounded-3xl p-8 bg-opacity-60 w-96">
        <div className="max-w-2xl w-full">
          <form className="rounded-lg shadow-md max-w-md">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Login
            </h1>
            <div className="mb-4 relative bg-none">
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    username: e.target.value,
                  }))
                }
                required
                className="w-full h-10 px-4 border-2 rounded-md focus:outline-none border-white-300 text-black"
              />
              <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    password: e.target.value,
                  }))
                }
                required
                className="w-full h-10 px-4 border-2 border-white-300 rounded-md focus:outline-none text-slate-700"
              />
              <RiLockPasswordFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-md focus:outline-none hover:from-blue-800 hover:to-blue-500 transition duration-300"
            >
              Bejelentkezés
            </button>

          </form>
          <div className="flex space-x-1 justify-center text-sm mt-3">
          <span>If you aren't a member yet,</span>
          <button  
          onClick={handleRegisterClick}
          className="border-b hover:text-blue-500">register here</button>
          </div>
        </div>
      </div>
    </div>
    <Modal isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
      <Register/>
    </Modal>
    </Fragment>
  );
}
