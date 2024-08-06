import React from 'react';

const OwnerDetailsModal = ({ details, onClose }) => {
  if (!details) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-6 border border-gray-300 rounded shadow-md">
        <h3 className="text-xl font-bold mb-2">Detalles del Dueño</h3>
        <p><strong>Nombre:</strong> {details.name}</p>
        <p><strong>Documento:</strong> {details.numDocumento}</p>
        <p><strong>Dirección:</strong> {details.address}</p>
        <p><strong>Teléfono:</strong> {details.phone}</p>
        <p><strong>Email:</strong> {details.email}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default OwnerDetailsModal;
