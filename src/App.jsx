import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './home';
import Services from './services';
import DataTable from './dataTable';
import NewOwnerForm from './NewOwnerForm';
import NewDogForm from './NewDogForm';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="flex items-center">
        <img src="logo.jpeg" alt="Logo de la veterinaria" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold">Veterinaria Salud Animal</h1>
      </div>
      <nav className="flex-grow text-right">
        <ul className="list-none m-0 p-0 flex justify-end">
          <li className="ml-5">
            <Link to="/" className="text-white no-underline text-lg">Inicio</Link>
          </li>
          <li className="ml-5">
            <Link to="/services" className="text-white no-underline text-lg">Servicios</Link>
          </li>
          <li className="ml-5">
            <Link to="/about" className="text-white no-underline text-lg">Nosotros</Link>
          </li>
          <li className="ml-5">
            <Link to="/contact" className="text-white no-underline text-lg">Contacto</Link>
          </li>
         {/*  <li className="ml-5">
            <Link to="/visits" className="text-white no-underline text-lg">Historial de Visitas</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return <div>Nosotros</div>;
}

function Contact() {
  return <div>Contacto</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visits" element={<DataTable />} />
        <Route path="/new-owner" element={<NewOwnerForm />} />
        <Route path="/new-dog" element={<NewDogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
