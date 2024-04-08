import React from "react";
import Cars from "../ui/cars/cars";
import Header from "../ui/header/header";
const page = () => {
  return (
    
      <div>
      <Header />
      <div className="flex items-center justify-center h-[70vh]">
        <Cars />
      </div>
    </div>
  );
};

export default page;
