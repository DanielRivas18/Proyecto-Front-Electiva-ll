import React from 'react';

function Home() {
    return (
        <div className="p-8">
            <div className="flex flex-col items-center text-center">
                <img src="veterinary.jpg" alt="Veterinaria Salud Animal" className="w-3/4 h-auto rounded-lg shadow-lg mb-8" />
                <h2 className="text-3xl font-bold mb-4">Bienvenido a Veterinaria Salud Animal</h2>
                <p className="text-lg mb-4">
                    En Veterinaria Salud Animal, nos dedicamos al cuidado y bienestar de tus mascotas. Ofrecemos una amplia gama de servicios para asegurar la salud y felicidad de tus compañeros de vida.
                </p>
                <h3 className="text-2xl font-bold mb-4">Nuestros Servicios</h3>
                <ul className="list-disc list-inside text-left">
                    <li>Consultas veterinarias</li>
                    <li>Vacunación y desparasitación</li>
                    <li>Cirugías y procedimientos médicos</li>
                    <li>Estética y peluquería para mascotas</li>
                    <li>Hospitalización y cuidados intensivos</li>
                    <li>Venta de alimentos y productos para mascotas</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
