import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  return (
    <>
      {pets.map((pet) => (
        <PetCard 
          key={pet.id} 
          pet={pet}
        />
      ))}
    </>
  );
};

export default PetList;
