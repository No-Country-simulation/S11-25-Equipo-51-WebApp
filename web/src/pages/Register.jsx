

import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaHeart, FaEnvelope, FaLock,  FaUser  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputForm from '../Components/InputForm';

const Register = () => {
     const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviar:', form);
      };
    
  return (
    <div className='className="min-h-screen bg-gradient-to-br p-4 from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">'>
      <div className="text-card-foreground flex flex-col gap-6 rounded-xl w-full max-w-md bg-white/90 backdrop-blur shadow-2xl border-0 p-8">
        <div className="text-center mb-3">
          <div className='w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg'>
            <FaHeart size={35} color='white' />
          </div>

          <h1 className='text-2xl mb-2 text-gray-900'>Crear cuenta</h1>
          <p className='text-gray-600'>Comienza a cuidar a tus mascotas</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-4">
           <InputForm
            id="name"
            label="Nombre y Apellido"
            labelIcon={<FaUser />}
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder=""
          />
          
          <InputForm
            id="email"
            label="Correo electrónico"
            labelIcon={<FaEnvelope />}
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tú@correo.com"
          />
          <InputForm
            id="password"
            label="Contraseña"
            labelIcon={<FaLock />}
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="•••••••"
          />
           <InputForm
            id="confirmPassword"
            label="Repetir Contraseña"
            labelIcon={<FaLock />}
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="•••••••"
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 has-[>svg]:px-3 w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-6 shadow-lg shadow-emerald-200">
           Crear cuenta
          </button>
        </form>
        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="flex items-center w-full max-w-xs gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full border border-gray-300"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          
          <button
            type="button"
            className="
      w-full flex items-center justify-center gap-2 max-w-xs py-3 px-4 rounded-xl  border-gray-200 border-2
      bg-white text-sm font-medium text-foreground 
      hover:border-emerald-300 transition hover:bg-emerald-50
    "
          >
              <FcGoogle />  Registrarse con Google
          </button>
          <p className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer">
            ¿No tienes cuenta?{" "}
            <Link to="/login" className="text-emerald-600 hover:text-emerald-700 cursor-pointer ">
             
            </Link>
          </p>
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer  mt-3"
          >
            ← Volver al inicio
          </a>
        </div>


      </div>
    </div>
  )
}

export default Register
