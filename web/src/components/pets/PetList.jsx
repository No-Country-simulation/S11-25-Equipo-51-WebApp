import React, { useState } from "react";
import PetCard from "./PetCard";
import PetForm from "./PetForm";
import Modal from "./Modal";  // IMPORTANTE

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPet, setEditingPet] = useState(null);

  const openCreateModal = () => {
    setEditingPet(null);
    setModalOpen(true);
  };

  const openEditModal = (pet) => {
    setEditingPet(pet);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = (petData) => {
    if (editingPet) {
      setPets(pets.map((p) => (p.id === petData.id ? petData : p)));
    } else {
      setPets([...pets, { ...petData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setPets(pets.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      {/* BOTÓN */}
      <div className="flex justify-center mb-6">
        <button
          onClick={openCreateModal}
          className="bg-[#00BFA5] text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-[#009f88]"
        >
          ➕ Agregar Mascota
        </button>
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* MODAL USANDO TU COMPONENTE */}
      <Modal open={modalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">
          {editingPet ? "Editar Mascota" : "Agregar Mascota"}
        </h2>

        <PetForm
          pet={editingPet}
          onSave={handleSave}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
};

export default PetList;
