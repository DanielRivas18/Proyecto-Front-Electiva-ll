import React from 'react';

function About() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-12">
        
        {/* Sección de Introducción */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <img src="logo.png" alt="Nosotros" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Sobre Nosotros</h2>
            <p className="text-lg leading-relaxed">
              Somos un equipo humano idóneo, que contribuye al cuidado de la vida y la salud de las mascotas mediante un servicio integral diferenciado, con énfasis en el cuidado crítico, buscando el bienestar de todo el grupo familiar.
            </p>
          </div>
        </section>

        {/* Sección de Visión */}
        <section>
          <h3 className="text-2xl font-bold mb-8 text-center text-green-600">¿Qué soñamos en Punto Vet Clínica Veterinaria?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <img src="vision1.jpg" alt="Visión 1" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-green-600">Referencia en Medellín</h4>
              <p>Ser una clínica de referencia en el área metropolitana de Medellín.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <img src="vision2.jpg" alt="Visión 2" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-green-600">Mejores Empleadores</h4>
              <p>Estar entre los mejores empleadores del sector veterinario del país.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <img src="vision3.jpg" alt="Visión 3" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-green-600">Infraestructura Adecuada</h4>
              <p>Tener la infraestructura adecuada para la prestación de los servicios que ofrecemos, que sea amigable con los pacientes, usuarios, colaboradores y el medio ambiente.</p>
            </div>
          </div>
        </section>

        {/* Sección de Valores */}
        <section>
          <h3 className="text-2xl font-bold mb-8 text-center text-green-600">¿Qué caracteriza a Punto Vet Clínica Veterinaria?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Servicio</h4>
              <p>Satisfacemos y damos soluciones a quienes nos eligen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Respeto</h4>
              <p>Reconocemos al otro como un ser único y valioso.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Empatía</h4>
              <p>Conectamos y comprendemos con las emociones y actitudes de las personas para ofrecerles lo que necesiten.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Claridad</h4>
              <p>Coherencia entre lo que pensamos, lo que decimos y lo que hacemos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Innovación</h4>
              <p>Renovación y actualización constante en procesos y tecnología buscando aportar un mayor valor al usuario y nuestros pacientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <h4 className="text-xl font-semibold text-green-600">Amor</h4>
              <p>Es la fuerza que nos impulsa para hacer las cosas bien.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
