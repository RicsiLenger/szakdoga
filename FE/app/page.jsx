"use client";
import React, { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Login from "@/app/login/page";
import Home from "@/app/home/page";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking token:", error);
        setLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, []);

  const handlelogOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn && router.push("/login")}
      {loggedIn && (
        
           router.push("/home")
      )}
    </div>
  );
}

export default App;
