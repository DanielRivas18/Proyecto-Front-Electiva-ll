import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/medical-records');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Visitas</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Fecha de Visita</th>
            <th className="py-2 px-4 border-b">Servicios</th>
            <th className="py-2 px-4 border-b">Notas</th>
            <th className="py-2 px-4 border-b">Mascota</th>
            <th className="py-2 px-4 border-b">Especie</th>
            <th className="py-2 px-4 border-b">Raza</th>
            <th className="py-2 px-4 border-b">Edad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((visit) => (
            <tr key={visit._id}>
              <td className="py-2 px-4 border-b">{new Date(visit.visitDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{visit.services.join(', ')}</td>
              <td className="py-2 px-4 border-b">{visit.notes}</td>
              <td className="py-2 px-4 border-b">{visit.pet.name}</td>
              <td className="py-2 px-4 border-b">{visit.pet.species}</td>
              <td className="py-2 px-4 border-b">{visit.pet.breed}</td>
              <td className="py-2 px-4 border-b">{visit.pet.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
