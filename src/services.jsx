import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const serviceSections = [
  
    {
      sectionTitle: "Registro de Mascotas y Clientes",
      services: [
        {
          title: "Registrar Nuevo Perro",
          description: "Registra la información de un nuevo perro para llevar un seguimiento de su salud y visitas.",
          link: "/new-dog",
          bgColor: "bg-green-600",
          hoverColor: "hover:bg-green-700",
        },
        {
          title: "Agregar Nuevo Dueño",
          description: "Registra la información de un nuevo dueño para poder llevar un control adecuado de sus mascotas.",
          link: "/new-owner",
          bgColor: "bg-green-600",
          hoverColor: "hover:bg-green-700",
        },
        {
          title: "Ver Datos de Dueños",
          description: "Consulta la información detallada de todos los dueños registrados en nuestro sistema.",
          link: "/owner-details", 
          bgColor: "bg-yellow-500",
          hoverColor: "hover:bg-yellow-600",
        },

      ],
    },
      {
      sectionTitle: "Gestión de servicios ofrecidos ",
      services: [
        {
          title: "Ver Historial de Visitas",
          description: "Consulta el historial completo de visitas de tus mascotas para llevar un seguimiento detallado de su salud.",
          link: "/visits",
          bgColor: "bg-yellow-500",
          hoverColor: "hover:bg-yellow-600",
        },
        ,
        {
          title: "Registrar Consulta",
          description: "Registra una nueva consulta para llevar un control detallado de los diagnósticos y tratamientos.",
          link: "/register-consultation",
          bgColor: "bg-yellow-500",
          hoverColor: "hover:bg-yellow-600",
          image: "registro.png",
        },
        {
          title: "Ver Datos de Mascotas",
          description: "Consulta la información detallada de todas las mascotas registradas en nuestro sistema.",
          link: "/pet-details",
          bgColor: "bg-yellow-500",
          hoverColor: "hover:bg-yellow-600",
        },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
      {serviceSections.map((section, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{section.sectionTitle}</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {section.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                )}
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link}>
                  <button className={`w-full py-2 px-4 rounded text-white ${service.bgColor} ${service.hoverColor}`}>
                    {service.title}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default Services;
