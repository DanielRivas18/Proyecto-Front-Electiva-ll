import React from 'react';

function Home() {

    const services = [
        {
            title: "Consultas Veterinarias",
            description: "Ofrecemos consultas completas para asegurar el bienestar de tus mascotas. Diagnóstico, tratamiento y seguimiento personalizado.",
            image: "consultasVeterinarias.jpeg"
        },
        {
            title: "Vacunación y Desparasitación",
            description: "Asegúrate de que tu mascota esté protegida contra enfermedades con nuestras vacunas y tratamientos de desparasitación.",
            image: "vacunacion.jpg"
        },
        {
            title: "Cirugías y Procedimientos Médicos",
            description: "Realizamos cirugías y procedimientos médicos con el mayor cuidado y tecnología avanzada para la salud de tus mascotas.",
            image: "cirugia.jpg"
        },
        {
            title: "Estética y Peluquería para Mascotas",
            description: "Servicios de estética para mantener a tu mascota limpia y hermosa, incluyendo corte de pelo y baño especializado.",
            image: "estetica.jpg"
        },
        {
            title: "Hospitalización y Cuidados Intensivos",
            description: "Ofrecemos hospitalización y cuidados intensivos para mascotas que requieren atención especial y monitoreo continuo.",
            image: "hospitalizacion.jpg"
        },
        {
            title: "Venta de Alimentos y Productos para Mascotas",
            description: "Encuentra alimentos de calidad y productos para el cuidado de tu mascota en nuestra tienda. Asesoramiento personalizado disponible.",
            image: "venta-productos.jpg"
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">


            <main className="p-8">
                <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    <img
                        src="1.webp"
                        alt="Veterinaria Salud Animal"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-8 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Bienvenido a Veterinaria Salud Animal
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            En Veterinaria Salud Animal, nos dedicamos al cuidado y bienestar de tus mascotas.
                            Ofrecemos una amplia gama de servicios para asegurar la salud y felicidad de tus compañeros de vida.
                        </p>
                    </div>
                </section>

                <section className="bg-blue-100 py-12">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Nuestros Servicios
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-4 mb-6">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-32 object-cover mb-4 rounded-t-lg"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-blue-100 py-12">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Testimonios de Nuestros Clientes
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-4 mb-6">
                                <p className="text-gray-600 mb-4">
                                    "El servicio de la veterinaria fue excelente. Mi perro se recuperó rápidamente y el personal fue muy atento."
                                </p>
                                <p className="font-semibold">Ana Martínez</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-4 mb-6">
                                <p className="text-gray-600 mb-4">
                                    "Siempre confío en ellos para el cuidado de mis gatos. Son profesionales y cariñosos con los animales."
                                </p>
                                <p className="font-semibold">Carlos Gómez</p>
                            </div>
                        </div>
                    </div>
                </section>

               
            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p>&copy; 2024 Veterinaria Salud Animal. Todos los derechos reservados.  </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;