import React, { useState } from 'react';
import axios from 'axios';
import OwnerSearch from './OwnerSearch';

function NewDogForm() {
  const [dog, setDog] = useState({
    name: '',
    species: 'Dog',
    breed: '',
    age: '',
    medicalHistory: '',
    owner: ''
  });
  const [selectedOwner, setSelectedOwner] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDog({ ...dog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/dogs', { ...dog, owner: selectedOwner._id });
      alert('Perro agregado exitosamente');
      setDog({ name: '', species: 'Dog', breed: '', age: '', medicalHistory: '', owner: '' });
      setSelectedOwner(null);
    } catch (error) {
      console.error('Error adding dog:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Registrar Nuevo Perro</h2>
      <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="medicalHistory"
            value={dog.medicalHistory}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dueño</label>
          <OwnerSearch onSelectOwner={(owner) => setSelectedOwner(owner)} />
          {selectedOwner && (
            <div className="mt-2 p-2 border rounded">
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
