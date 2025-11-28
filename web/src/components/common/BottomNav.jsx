import React from 'react';
import { Home, Heart, Activity, Bell, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Inicio' },
    { icon: Heart, label: 'Mascotas' },
    { icon: Activity, label: 'Salud', active: true },
    { icon: Bell, label: 'Alertas' },
    { icon: User, label: 'Perfil' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button 
              key={label}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                active 
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'scale-110' : ''}`} />
              <span className={`text-xs ${active ? 'font-medium' : ''}`}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;