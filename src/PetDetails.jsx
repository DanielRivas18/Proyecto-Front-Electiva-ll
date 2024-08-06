import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading'; // Importa el componente Loading

function PetDetails() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga de datos

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://proyecto-back-electiva-ll.onrender.com/api/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pet data:', error);
      } finally {
        setLoading(false); // Datos cargados o error, oculta el loader
      }
    };

    fetchPets();
  }, []);

  // Mostrar el componente Loading mientras se cargan los datos
  if (loading) {
    return <Loading message="" />;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Datos de las Mascotas</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <div key={pet._id} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">{pet.name}</h4>
            <p className="text-gray-600"><strong>Especie:</strong> {pet.species}</p>
            <p className="text-gray-600"><strong>Raza:</strong> {pet.breed}</p>
            <p className="text-gray-600"><strong>Edad:</strong> {pet.age}</p>
            <p className="text-gray-600"><strong>Dueño:</strong> {pet.owner.name}</p>
            <p className="text-gray-600"><strong>Teléfono del Dueño:</strong> {pet.owner.phone}</p>
            <p className="text-gray-600"><strong>Email del Dueño:</strong> {pet.owner.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetDetails;
