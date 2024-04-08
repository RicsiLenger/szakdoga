"use client";

import React, { Fragment, useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Modal from "../modal/modal";
const Cars = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [showCarModal, setShowCarModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleMouseEnter = (text) => {
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleCarClick = () => {
    setShowCarModal(true);
  };
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  return (
    <Fragment>
      <div className="border-2 p-2.5 m-[15px] rounded-[20px] min-w-[45vw] min-h-[35vh] bg-opacity-30 shadow-md border-slate-500">
        <div className="text-center text-xl">Cars</div>
        <div>
          <table className="min-w-[40vw] flex">
            <tbody className="">
              <tr className="p-2 flex items-center">
                <td className="border-2 text-5xl p-2 m-1 rounded-[10px] shadow-md border-slate-500 hover:bg-slate-500">
                  <button
                    onMouseEnter={() => handleMouseEnter("AUDI A3 8L")}
                    onMouseLeave={handleMouseLeave}
                    className="flex"
                    onClick={handleCarClick}
                  >
                    <IoCarSportOutline />
                  </button>
                  {showTooltip && (
                    <div className="bg-gray-800 text-white text-sm px-2 py-1 absolute mt-2 rounded">
                      {tooltipText}
                    </div>
                  )}
                </td>
                <td className="border-2 text-5xl p-2 m-1 rounded-[10px] shadow-md border-slate-500 hover:bg-slate-500">
                  <button className="flex" onClick={handleAddClick}>
                    <FaPlus />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isVisible={showCarModal}
        onClose={() => setShowCarModal(false)}
      ></Modal>
      <Modal
        isVisible={showAddModal}
        onClose={() => setShowAddModal(false)}
      ></Modal>
    </Fragment>
  );
};

export default Cars;
