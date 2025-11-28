import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const QuickActions = () => {
    return (
        <>
            <div className='p-4'>
                <p className="text-lg font-semibold text-gray-800 mb-3">Acciones rápidas</p>
                <div className='flex gap-4'>
                    <button className='cursor-pointer flex flex-col items-center border border-gray-200 bg-white p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 active:scale-95 w-32'>
                        <AiOutlineRise className='text-green-500 text-3xl mb-2' />
                        <p className="text-sm font-medium text-gray-700">Ver salud</p>
                    </button>
                    <button className='cursor-pointer flex flex-col items-center border border-gray-200 bg-white p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 active:scale-95 w-32'>
                        <CiHeart className='text-purple-700 text-3xl mb-2' />
                        <p className="text-sm font-medium text-gray-700">Ver nutrición</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default QuickActions