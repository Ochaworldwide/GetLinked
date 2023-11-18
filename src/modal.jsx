import React from "react";
import { congrats } from "./image";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#150E28] bg-opacity-95 w-full">
      <div className="relative  p-6 rounded-lg w-[50%] mx-auto border border-[#D434FE] mobile:w-[95%]">
        <img src={congrats} alt="" srcset="" className="mx-auto object-contain mb-5" />
        {children}

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-600"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
