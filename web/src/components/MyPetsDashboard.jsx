import React, { useState } from 'react';
import PetList from './pets//PetList';
import AddPetBtn from './pets//AddPetBtn';
import Modal from './pets//Modal';
import PetForm from './pets//PetForm';

const MyPetsDashboard = () => {
  const pets = [
    {
      id: 1,
      name: 'Luna',
      breed: 'Golden Retriever',
      age: '3 años',
      image: '/dog-example.jpg',
    },
    {
      id: 2,
      name: 'Milo',
      breed: 'Gato',
      age: '2 años',
      image: '/cat-example.jpg',
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const openCreateModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full p-4">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Mis Mascotas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PetList pets={pets} />
        <AddPetBtn onClick={openCreateModal} />
      </div>

      <Modal open={modalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Agregar Mascota</h2>

        <PetForm onSave={closeModal} onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default MyPetsDashboard;
