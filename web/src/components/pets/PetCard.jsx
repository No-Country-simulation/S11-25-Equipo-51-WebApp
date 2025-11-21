import React from "react";

const PetCard = ({ pet, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-sm p-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      
      <img
        src={pet.photo}
        alt={pet.nombre}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-bold">{pet.nombre}</h2>
      <p className="text-gray-600">Tipo: {pet.tipo}</p>
      <p className="text-gray-600">Raza: {pet.raza}</p>
      <p className="text-gray-600">Edad: {pet.edad} años</p>
      <p className="text-gray-600">Peso: {pet.peso || "No especificado"} kg</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(pet)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(pet.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PetCard;
