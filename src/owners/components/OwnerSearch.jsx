import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OwnerSearch({ onSelectOwner }) {
  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState(null);

  useEffect(() => {
    // Obtener la lista de dueños desde el backend
    const fetchOwners = async () => {
      try {
        const response = await axios.get('https://proyecto-back-electiva-ll.onrender.com/api/owners');
        setOwners(response.data);
      } catch (error) {
        console.error('Error fetching owners:', error);
      }
    };
    fetchOwners();
  }, []);

  const handleSelect = (owner) => {
    setSelectedOwner(owner);
    onSelectOwner(owner);
  };

  return (
    <div className="relative">
      <select
        className="w-full px-4 py-2 border rounded"
        value={selectedOwner ? selectedOwner._id : ''}
        onChange={(e) => {
          const owner = owners.find(o => o._id === e.target.value);
          handleSelect(owner);
        }}
      >
        <option value="">Selecciona un dueño</option>
        {owners.map((owner) => (
          <option key={owner._id} value={owner._id}>
            {owner.name} - {owner.numDocumento}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OwnerSearch;
