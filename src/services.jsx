import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
      <p className="mb-4">
        En nuestra veterinaria ofrecemos una amplia gama de servicios para cuidar la salud y bienestar de tus mascotas. Entre nuestros servicios están:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Consultas veterinarias</li>
        <li>Vacunación y desparasitación</li>
        <li>Cirugías y procedimientos médicos</li>
        <li>Estética y peluquería para mascotas</li>
        <li>Hospitalización y cuidados intensivos</li>
        <li>Venta de alimentos y productos para mascotas</li>
      </ul>
      <div className="flex space-x-4">
        <Link to="/visits">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Ver Historial de Visitas
          </button>
        </Link>
        <Link to="/new-owner">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Agregar Nuevo Dueño
          </button>
        </Link>
        <Link to="/new-dog">
          <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
            Registrar Nuevo Perro
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
