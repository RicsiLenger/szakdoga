"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import axios from "axios";

const header = () => {
  const [userData, setUserData] = useState('');

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetchProfileName = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileName();
  }, []);


  return (
    <header className="p-4 m-5 flex justify-between">
      <div className="flex flex-col pt-1 h-12 w-28 items-center  font-bold text-end">
        <span>Hello, </span>
        <span className="font-strong">{userData.username}</span>
      </div>
      
      <Link href={"/"}>
        <div className=" flex text-2xl pl-2 mt-2 p-1 hover:bg-slate-500 rounded-full">
          <MdLogout onClick={handleLogout} size={30} />
        </div>
      </Link>
      
    </header>
  );
};

export default header;
