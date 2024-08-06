import React from 'react';

const ConsultationDetailsModal = ({ details, onClose }) => {
  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-3/4 max-w-2xl">
        <h3 className="text-xl font-bold mb-2">Detalles de la Consulta</h3>
        <p><strong>Servicios:</strong></p>
        <ul className="list-disc pl-5 mb-4">
          {details.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <p><strong>Notas:</strong></p>
        <p>{details.notes}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ConsultationDetailsModal;
