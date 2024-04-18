import React from "react";

const modal = ({ isVisible, children, onClose}) => {
  if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    id="wrapper"
    onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button className="place-self-end p-1 pl-2 pr-2  text-gray-100 hover:bg-slate-500 rounded-full"
        onClick={() => onClose()}
        >X</button>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default modal;
