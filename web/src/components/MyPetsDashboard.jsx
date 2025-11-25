import React from 'react';
import { FaPlus } from 'react-icons/fa';

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

    return (
        <div className="w-full p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Mis Mascotas</h2>
                <a href="#" className="text-teal-500 text-sm font-medium hover:underline">
                    Ver todas
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pets.map((pet) => (
                    <div key={pet.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-center flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                            <p className="text-sm text-gray-500">
                                {pet.breed} • {pet.age}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="border-2 border-dashed border-teal-500 rounded-2xl bg-teal-50 flex flex-col items-center justify-center h-full min-h-[200px] cursor-pointer hover:bg-teal-100 transition-colors p-4">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                        <FaPlus className="text-teal-500 text-2xl" />
                    </div>
                    <span className="text-teal-700 font-medium">Agregar mascota</span>
                </div>
            </div>
        </div>
    );
};

export default MyPetsDashboard;
