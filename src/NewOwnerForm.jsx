import React, { useState } from 'react';
import axios from 'axios';

function NewOwnerForm() {
  const [owner, setOwner] = useState({
    name: '',
    numDocumento: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwner({ ...owner, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://proyecto-back-electiva-ll.onrender.com/api/owners', owner);
      alert('Dueño agregado exitosamente');
      setOwner({ name: '', numDocumento: '', address: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error adding owner:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Dueño</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={owner.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Número de Documento</label>
          <input
            type="text"
            name="numDocumento"
            value={owner.numDocumento}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dirección</label>
          <input
            type="text"
            name="address"
            value={owner.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={owner.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={owner.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Agregar Dueño
        </button>
      </form>
    </div>
  );
}

export default NewOwnerForm;
