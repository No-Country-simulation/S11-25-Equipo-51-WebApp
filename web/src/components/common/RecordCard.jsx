import React from 'react';
import { Calendar, Syringe, FileText, Pill } from 'lucide-react';

const RecordCard = ({ data, type }) => {
  const iconConfig = {
    vaccine: { icon: Syringe, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    checkup: { icon: FileText, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
    treatment: { icon: Pill, bgColor: 'bg-pink-100', iconColor: 'text-pink-600' }
  };

  const { icon: Icon, bgColor, iconColor } = iconConfig[type];

  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium mb-1">
            {data.name || data.type}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{data.pet}</p>
          
          {type === 'vaccine' && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Aplicada: {data.applied}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Próxima: {data.next}</span>
              </div>
            </>
          )}

          {type === 'checkup' && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Realizado: {data.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Próximo: {data.next}</span>
              </div>
              {data.notes && <p className="text-xs text-gray-600 mb-2 italic">{data.notes}</p>}
            </>
          )}

          {type === 'treatment' && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Inicio: {data.startDate}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>Fin: {data.endDate}</span>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium mr-2 ${
                data.status === 'Completado' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {data.status}
              </span>
            </>
          )}
          
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
            {data.vet}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
