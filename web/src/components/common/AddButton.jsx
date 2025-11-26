import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Modal from './Modal';

const AddButton = ({ activeTab }) => {
  const [showModal, setShowModal] = useState(false);

  const labels = {
    vaccines: 'vacuna',
    checkups: 'chequeo',
    treatments: 'tratamiento'
  };

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-6 font-medium"
      >
        <Plus className="w-5 h-5" />
        Agregar {labels[activeTab]}
      </button>

      {showModal && (
        <Modal 
          activeTab={activeTab} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default AddButton;