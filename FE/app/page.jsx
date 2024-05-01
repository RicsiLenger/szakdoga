"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



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

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [loggedIn]);
  

  return (
    <div>
    </div>
  );
}

export default App;
