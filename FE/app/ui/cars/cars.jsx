"use client";

import React, { Fragment, useState, useEffect } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { FaPlus, FaDeleteLeft } from "react-icons/fa6";
import Modal from "../modal/modal";
import AddCar from "./AddCar";
import SingleCar from "./singleCar";
import axios from "axios";

const Cars = () => {
  const [showCarModal, setShowCarModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [userCars, setUserCars] = useState([]);
  const [tooltipCarId, setTooltipCarId] = useState(null);
  const [selectedCarId, setSelectedCarId] = useState(null)


  useEffect(() => {
    const fetchUserCars = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cars", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUserCars(response.data);
        console.log(response.data)


      } catch (error) {
        console.log("Error fetching user cars:", error);
      }
    };

    fetchUserCars();
  }, []);

  const handleMouseEnter = (carId) => {
    setTooltipCarId(carId);
  };

  const handleMouseLeave = () => {
    setTooltipCarId(null)
  };

  const handleCarClick = (car) => {
    setSelectedCarId(car)
    setShowCarModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleDelClick = () => {
    setShowDel((prevState) => !prevState);
  };

  const handlexClick = (e) => {
    e.stopPropagation();
    setShowDel(false);
  };


  return (
    <Fragment>
      <div className="border-2 p-2.5 m-[15px] rounded-[20px] min-w-[45vw] min-h-[35vh] bg-opacity-30 shadow-md border-slate-500">
        <div className="flex items-center justify-center">
          <p className="text-xl">Cars</p>
          <div className="flex items-center ml-auto">
            <button
              className="rounded-full p-2 hover:bg-slate-500"
              onClick={handleDelClick}
            >
              <FaDeleteLeft />
            </button>
          </div>
        </div>
        <div className="min-w-[40vw] min-h-[30vh] overflow-auto">
          <table className="w-full h-full">
            <tbody className="flex flex-wrap p-2">
            {userCars.map((car) => (
                <tr className="flex items-center">
                  
                  <td
                    key={car.id}
                    className="border-2 text-5xl p-2 m-1 rounded-[10px] shadow-md border-slate-500 hover:bg-slate-500 flex-shrink-0"
                    onMouseEnter={() => handleMouseEnter(car.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCarClick(car)}
                  >
                    <div className="relative flex">
                      <IoCarSportOutline 
                      />
                      {showDel && (
                      <div 
                      onClick={handlexClick}
                      className="absolute top-0 right-0 -mt-4 -mr-4 text-base h-5 w-5 p-[5px] m-[5px] rounded-full flex justify-center bg-red-600 cursor-pointer">
                        <p className="absolute -top-[3px] left-[5px]">x</p>
                      </div>
                    )}
                    </div>
                    
                    {tooltipCarId === car.id && (
                        <div className="bg-gray-800 text-white text-sm px-2 py-1 absolute mt-2 rounded">
                          {car.Name}
                        </div>
                  )}
                  </td>
                  </tr>
                  ))}
                  <tr className="flex items-center">
                  <td className="border-2 text-5xl p-2 m-1 rounded-[10px] shadow-md border-slate-500 hover:bg-slate-500 flex-shrink-0">
                    <button className="flex" onClick={handleAddClick}>
                      <FaPlus />
                    </button>
                  </td>
                  
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal isVisible={showCarModal} onClose={() => setShowCarModal(false)}>
        {selectedCarId && 
        <SingleCar car={selectedCarId}/>
      }
      </Modal>
      <Modal isVisible={showAddModal} onClose={() => setShowAddModal(false)}>
        <AddCar />
      </Modal>
    </Fragment>
  );
};

export default Cars;
