import { useState } from 'react';
import { FaHome, FaHeart, FaHeartbeat, FaBell, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { PiDogFill } from 'react-icons/pi';

const SideBar = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: <FaHome /> },
        { name: 'Mis mascotas', icon: <PiDogFill /> },
        { name: 'Salud', icon: <FaHeartbeat /> },
        { name: 'Recordatorios', icon: <FaBell /> },
        { name: 'Configuración', icon: <FaUser /> },
    ];

    const Logo = () => (
        <div className="flex items-center gap-3">
            <div className='bg-gradient-to-r from-[#00BFA5] to-[#00C8FF] w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shadow-[#00BFA5]/30'>
                <FaHeart className='text-white text-lg' />
            </div>
            <h1 className='text-[#0A99A5] text-xl font-poppins font-bold'>Pet Health</h1>
        </div>
    );

    return (
        <>
            {/* logo en movil (visible cuando el menu esta cerrado) */}
            <div className={`md:hidden fixed top-4 left-4 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Logo />
            </div>

            {/* Boton de menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md text-teal-600 transition-colors"
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <FaBars
                        size={24}
                        className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                    />
                    <FaTimes
                        size={24}
                        className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`}
                    />
                </div>
            </button>

            {/* Overlay para movil */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Contenedor del menu */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-40
                w-64 bg-white border-r border-gray-100 flex flex-col p-4 shadow-sm
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {/* Logo dentro del menu */}
                <div className="mb-8 px-2 border-b-2 pb-6 border-gray-100">
                    <Logo />
                </div>

                {/* Navegacion */}
                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveItem(item.name);
                                setIsOpen(false); // Cierra el menu en movil cuando se hace click
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeItem === item.name
                                ? 'bg-cyan-50 text-teal-500 font-medium shadow-sm'
                                : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
                                }`}
                        >
                            <span className={`text-lg ${activeItem === item.name ? 'text-teal-500' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                {item.icon}
                            </span>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>

                {/* Seccion de cierre de sesion */}
                <div className="mt-4 pt-4 border-t-2 border-gray-100">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors duration-200">
                        <FaSignOutAlt className="text-lg" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBar;