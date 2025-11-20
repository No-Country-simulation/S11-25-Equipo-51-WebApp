import React from 'react';
import { FaHeart, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="w-full p-4">
            <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-[#00BA7D] to-[#00BFA5] p-8 shadow-xl">
                <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
                    <FaHeart className="h-5 w-5" />
                </button>

                <div className="mb-10">
                    <p className="mb-1 font-poppins text-base text-white">Hola, Usuario 👋</p>
                    <h1 className="font-poppins text-4xl font-bold text-white">Dashboard</h1>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#33BC9C] p-6 shadow-lg">
                        <div className="mb-4 text-white">
                            <FaHeart className="h-6 w-6" />
                        </div>
                        <div className="mb-1 font-poppins text-3xl font-bold text-white">2/2</div>
                        <div className="font-poppins text-sm text-white/80">Vacunas al día</div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#33BC9C] p-6 shadow-lg">
                        <div className="mb-4 text-white">
                            <FaCalendarAlt className="h-6 w-6" />
                        </div>
                        <div className="mb-1 font-poppins text-3xl font-bold text-white">3</div>
                        <div className="font-poppins text-sm text-white/80">Próximas citas</div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#33BC9C] p-6 shadow-lg">
                        <div className="mb-4 text-white">
                            <FaExclamationTriangle className="h-6 w-6" />
                        </div>
                        <div className="mb-1 font-poppins text-3xl font-bold text-white">1</div>
                        <div className="font-poppins text-sm text-white/80">Alertas activas</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;