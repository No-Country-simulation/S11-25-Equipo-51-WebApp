import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Vacuna antirrábica',
            pet: 'Luna',
            type: 'Vacuna',
            date: '15 de noviembre',
            category: 'vaccine',
            urgent: true,
        },
        {
            id: 2,
            title: 'Chequeo anual',
            pet: 'Milo',
            type: 'Cita',
            date: '20 de noviembre',
            category: 'appointment',
            urgent: false,
        },
        {
            id: 3,
            title: 'Desparasitación',
            pet: 'Rocky',
            type: 'Medicamento',
            date: '22 de noviembre',
            category: 'medication',
            urgent: false,
        },
    ];

    const getCategoryStyles = (category) => {
        switch (category) {
            case 'vaccine':
                return 'bg-amber-100 text-amber-500';
            case 'appointment':
            case 'medication':
                return 'bg-blue-100 text-blue-500';
            default:
                return 'bg-gray-100 text-gray-500';
        }
    };

    return (
        <div className="w-full p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl  text-gray-800">Próximos Eventos</h2>
                <a href="#" className="text-[#00998E] hover:underline text-sm font-medium">
                    Ver todos
                </a>
            </div>

            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="relative bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02]"
                    >
                        <div
                            className={`p-3 rounded-xl flex items-center justify-center ${getCategoryStyles(
                                event.category
                            )}`}
                        >
                            <FaCalendarAlt size={20} />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{event.title}</h3>
                            <p className="text-sm text-gray-500">
                                {event.pet} • {event.type}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{event.date}</p>
                        </div>

                        {event.urgent && (
                            <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                Urgente
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;