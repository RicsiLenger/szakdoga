

import React from "react";
import Cars from "../ui/cars/cars";
import Header from "../ui/header/header";
const home = () => {
  return (
    
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#fff_100%)]"></div>
        <Header/>
        
      <div className="flex items-center justify-center h-[70vh]">
        <Cars />
      </div>
    </div>
  );
};

export default home;
