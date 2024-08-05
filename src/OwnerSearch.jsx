import React, { useState } from 'react';
import axios from 'axios';

function OwnerSearch({ onSelectOwner }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/owners/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching owners:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por nombre o documento"
        className="w-full px-4 py-2 border rounded"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white py-2 px-4 rounded mt-2">
        Buscar
      </button>
      <ul className="list-none mt-4">
        {results.map((owner) => (
          <li
            key={owner._id}
            onClick={() => onSelectOwner(owner)}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            {owner.name} - {owner.numDocumento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerSearch;
