import React, { useState } from 'react';
import axios from 'axios';
import OwnerSearch from '../../owners/components/OwnerSearch';

function NewDogForm() {
  const [dog, setDog] = useState({
    name: '',
    species: 'Dog',
    breed: '',
    age: '',
    medicalHistory: [], // Cambiado a un array
    owner: ''
  });
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDog({ ...dog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const age = parseInt(dog.age, 10);
    if (isNaN(age)) {
      setError('La edad debe ser un número válido.');
      return;
    }

    if (!selectedOwner) {
      setError('Debe seleccionar un dueño.');
      return;
    }

    const petData = { ...dog, age, owner: selectedOwner._id };

    try {
      const response = await axios.post('https://proyecto-back-electiva-ll.onrender.com/api/pets', petData);
      setSuccess('Perro agregado exitosamente');
      setDog({ name: '', species: 'Dog', breed: '', age: '', medicalHistory: [], owner: '' });
      setSelectedOwner(null);
    } catch (error) {
      console.error('Error adding dog:', error.response ? error.response.data : error.message);
      setError('Error al agregar el perro. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Registrar Nuevo Perro</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={dog.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Especie</label>
          <select
            name="species"
            value={dog.species}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="Dog">Perro</option>
            <option value="Cat">Gato</option>
            <option value="Bird">Pájaro</option>
            <option value="Other">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Raza</label>
          <input
            type="text"
            name="breed"
            value={dog.breed}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Edad</label>
          <input
            type="number"
            name="age"
            value={dog.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Historial Médico</label>
          <textarea
            name="medicalHistory"
            value={dog.medicalHistory}
            onChange={(e) => setDog({ ...dog, medicalHistory: [e.target.value] })} // Asegúrate de manejar el array correctamente
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dueño</label>
          <OwnerSearch onSelectOwner={(owner) => setSelectedOwner(owner)} />
          {selectedOwner && (
            <div className="mt-2 p-2 border rounded bg-green-100">
              Dueño seleccionado: {selectedOwner.name} - {selectedOwner.numDocumento}
            </div>
          )}
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Registrar Perro
        </button>
      </form>
    </div>
  );
}

export default NewDogForm;
