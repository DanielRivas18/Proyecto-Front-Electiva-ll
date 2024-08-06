import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Loading from './components/Loading';

const Home = lazy(() => import('./views/home'));
const Services = lazy(() => import('./views/services'));
const DataTable = lazy(() => import('./medical-records/components/dataTable'));
const NewOwnerForm = lazy(() => import('./owners/views/NewOwnerForm'));
const NewDogForm = lazy(() => import('./pets/views/NewDogForm'));
const RegisterConsultation = lazy(() => import('./medical-records/views/RegisterConsultation'));
const PetDetails = lazy(() => import('./pets/components/PetDetails'));
const About = lazy(() => import('./views/About'));
const OwnerDetails = lazy(() => import('./owners/components/OwnerDetails'));

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo de la veterinaria" className="h-12 mr-4" />
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
          {/* <li className="ml-5">
            <Link to="/visits" className="text-white no-underline text-lg">Historial de Visitas</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

function Contact() {
  return <div>Contacto</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visits" element={<DataTable />} />
          <Route path="/new-owner" element={<NewOwnerForm />} />
          <Route path="/new-dog" element={<NewDogForm />} />
          <Route path="/register-consultation" element={<RegisterConsultation />} />
          <Route path="/pet-details" element={<PetDetails />} />
          <Route path="/owner-details" element={<OwnerDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
