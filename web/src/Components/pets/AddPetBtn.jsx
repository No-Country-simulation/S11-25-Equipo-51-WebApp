import React from "react";
import { FaPlus } from "react-icons/fa";

const AddPetBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-dashed border-teal-500 rounded-2xl bg-teal-50 flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:bg-teal-100 transition-colors p-4"
    >
      <div className="bg-white p-3 rounded-full shadow-sm mb-2">
        <FaPlus className="text-teal-500 text-2xl" />
      </div>
      <span className="text-teal-700 font-medium">Agregar mascota</span>
    </button>
  );
};

export default AddPetBtn;
