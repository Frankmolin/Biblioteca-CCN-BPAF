import React from 'react';
import Autoridades from './pages/Autoridades';
import Galeria from './pages/Galeria';
import Historia from './pages/Historia';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

import MainLayout from './layouts/MainLayout';

import Acerca from './pages/Acerca';

import Catalogo from './pages/Catalogo';

import Eventos from './pages/Eventos';
import Foro from './pages/Foro';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <MainLayout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/foro" element={<Foro />} />

        <Route path="/autoridades" element={<Autoridades />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/historia" element={<Historia />} />
      

      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;