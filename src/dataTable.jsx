import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EyeIcon } from '@heroicons/react/24/outline';
import ConsultationDetailsModal from './ConsultationDetailsModal';
import OwnerDetailsModal from './OwnerDetailsModal';
import Loading from './Loading'; // Importa el componente Loading

const DataTable = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga de datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://proyecto-back-electiva-ll.onrender.com/api/medical-records');
        setData(response.data);
        setLoading(false); // Datos cargados, ocultar el loader
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Ocultar el loader incluso si hay un error
      }
    };

    fetchData();
  }, []);

  const handleViewOwner = async (ownerId) => {
    if (ownerId) {
      try {
        const response = await axios.get(`https://proyecto-back-electiva-ll.onrender.com/api/owners/${ownerId}`);
        setSelectedOwner(response.data);
      } catch (error) {
        console.error('Error fetching owner details:', error);
      }
    }
  };

  const handleViewConsultationDetails = (consultation) => {
    setSelectedConsultation(consultation);
  };

  const handleCloseConsultationDetails = () => {
    setSelectedConsultation(null);
  };

  const handleCloseOwnerDetails = () => {
    setSelectedOwner(null);
  };

  // Mostrar el componente Loading mientras se cargan los datos
  if (loading) {
    return <Loading message="" />;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Visitas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b text-left">Fecha de Visita</th>
              <th className="py-2 px-4 border-b text-left">Mascota</th>
              <th className="py-2 px-4 border-b text-left">Especie</th>
              <th className="py-2 px-4 border-b text-left">Raza</th>
              <th className="py-2 px-4 border-b text-left">Edad</th>
              <th className="py-2 px-4 border-b text-left">Detalles Consultas</th>
              <th className="py-2 px-4 border-b text-left">Detalles Dueño</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((visit) => (
              <tr key={visit._id}>
                <td className="py-2 px-4 border-b">{new Date(visit.visitDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{visit.pet.name}</td>
                <td className="py-2 px-4 border-b">{visit.pet.species}</td>
                <td className="py-2 px-4 border-b">{visit.pet.breed}</td>
                <td className="py-2 px-4 border-b">{visit.pet.age}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleViewConsultationDetails(visit)}
                    className="text-blue-500"
                  >
                    Ver Detalles
                  </button>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleViewOwner(visit.pet.owner)}
                    className="text-blue-500"
                  >
                    <EyeIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedConsultation && (
        <ConsultationDetailsModal
          details={selectedConsultation}
          onClose={handleCloseConsultationDetails}
        />
      )}

      {selectedOwner && (
        <OwnerDetailsModal
          details={selectedOwner}
          onClose={handleCloseOwnerDetails}
        />
      )}
    </div>
  );
};

export default DataTable;
