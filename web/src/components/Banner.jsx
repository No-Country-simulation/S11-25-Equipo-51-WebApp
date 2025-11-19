import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import heroDog from '../assets/hero-dog.jpg';

const Banner = () => {
    return (
        <section className="relative bg-[#E3F0F1] py-12 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">


                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left sm:items-center sm:text-center  z-10">
                        <h1 className="font-poppins text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-700 leading-tight mb-6">
                            La salud de tu mascota, <br className="hidden lg:block" />
                            <span className="text-[#00BFA5]">todo en un</span> solo lugar
                        </h1>

                        <p className="font-poppins text-slate-600 text-lg mb-8 max-w-lg leading-relaxed">
                            Lleva el control de vacunas, citas, medicamentos y el historial completo de salud de tu mascota con nuestra plataforma intuitiva.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
                            <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BFA5] to-cyan-500 text-white font-poppins font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                Comenzar Gratis
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="flex items-center justify-center bg-white border border-gray-200 text-slate-600 font-poppins font-medium px-8 py-3.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                                Ver Demostración
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 mt-6 justify-center sm:justify-start">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-poppins text-slate-600 text-sm">Sin tarjeta de crédito</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-poppins text-slate-600 text-sm">Gratis para siempre</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">


                        <div className="relative rounded-[2rem]  overflow-hidden shadow-2xl">
                            <img
                                src={heroDog}
                                alt="Happy dog smiling"
                                className="w-full max-w-md lg:max-w-lg object-cover h-auto"
                            />
                        </div>


                        <div className="absolute lg:w-[40%] bottom-2 left-2 lg:-right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 ">
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-100 p-2 rounded-full">
                                    <FaCheckCircle className="text-emerald-500 text-xl" />
                                </div>
                                <div>
                                    <p className="font-poppins font-bold text-slate-700 text-sm">Vacunación Completa</p>
                                    <p className="font-poppins text-xs text-slate-500">Max • Ahora mismo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-teal-50/50 to-transparent rounded-bl-full opacity-60"></div>
        </section>
    );
};

export default Banner;