import React, { useEffect, useState } from 'react';
import Loading from './Loading'; // Importa el componente Loading

function OwnerDetails() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga de datos

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchOwners = async () => {
      try {
        const response = await fetch('https://proyecto-back-electiva-ll.onrender.com/api/owners');
        const data = await response.json();
        setOwners(data);
      } catch (error) {
        console.error('Error fetching owners:', error);
      } finally {
        setLoading(false); // Datos cargados o error, oculta el loader
      }
    };

    fetchOwners();
  }, []);

  // Mostrar el componente Loading mientras se cargan los datos
  if (loading) {
    return <Loading message="" />;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-green-600">Datos de los Dueños</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-4 border">Nombre</th>
              <th className="p-4 border">Número de Documento</th>
              <th className="p-4 border">Dirección</th>
              <th className="p-4 border">Teléfono</th>
              <th className="p-4 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {owners.map(owner => (
              <tr key={owner._id} className="hover:bg-gray-100">
                <td className="p-4 border">{owner.name}</td>
                <td className="p-4 border">{owner.numDocumento}</td>
                <td className="p-4 border">{owner.address}</td>
                <td className="p-4 border">{owner.phone}</td>
                <td className="p-4 border">{owner.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OwnerDetails;
