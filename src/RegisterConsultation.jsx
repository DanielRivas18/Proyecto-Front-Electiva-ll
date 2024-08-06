import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function RegisterConsultation() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      visitDate: new Date().toISOString().split('T')[0], // Fecha actual
      services: [] // Inicializar como un array vacío
    }
  });

  const [pets, setPets] = useState([]);
  const [services, setServices] = useState([
    'Consultas veterinarias',
    'Vacunación y desparasitación',
    'Cirugías y procedimientos médicos',
    'Estética y peluquería para mascotas',
    'Hospitalización y cuidados intensivos',
    'Venta de alimentos y productos para mascotas',
    'Pruebas diagnósticas (análisis de sangre, radiografías, etc.)',
    'Control de peso y asesoramiento nutricional',
    'Tratamientos dentales',
    'Emergencias veterinarias',
    'Servicios de peluquería y baño',
    'Microchip y registro de mascotas',
    'Consejería sobre comportamiento animal',
    'Asesoramiento sobre prevención de enfermedades'
  ]);
  

  useEffect(() => {
    // Fetch list of pets
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://proyecto-back-electiva-ll.onrender.com/api/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  // Handle checkbox change
  const handleServiceChange = (event) => {
    const selectedService = event.target.value;
    const currentServices = watch('services') || [];
    
    if (event.target.checked) {
      setValue('services', [...currentServices, selectedService]);
    } else {
      setValue('services', currentServices.filter(service => service !== selectedService));
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('https://proyecto-back-electiva-ll.onrender.com/api/medical-records', data);
      alert('Consulta registrada exitosamente.');
    } catch (error) {
      console.error('Error al registrar la consulta:', error);
      alert('Error al registrar la consulta.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Registrar Consulta</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Servicios</label>
          <div className="space-y-2">
            {services.map(service => (
              <div key={service} className="flex items-center">
                <input
                  type="checkbox"
                  value={service}
                  onChange={handleServiceChange}
                  id={`service-${service}`}
                  {...register('services')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`service-${service}`} className="ml-2 text-sm font-medium text-gray-700">
                  {service}
                </label>
              </div>
            ))}
          </div>
          {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notas</label>
          <textarea
            id="notes"
            {...register('notes')}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="pet" className="block text-sm font-medium text-gray-700">Mascota</label>
          <select
            id="pet"
            {...register('pet', { required: 'Selecciona una mascota.' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecciona una mascota</option>
            {pets.map(pet => (
              <option key={pet._id} value={pet._id}>{pet.name} - {pet.breed}</option>
            ))}
          </select>
          {errors.pet && <p className="text-red-500 text-sm">{errors.pet.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Registrar Consulta
        </button>
      </form>
    </div>
  );
}

export default RegisterConsultation;
