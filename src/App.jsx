import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

import MainLayout from './layouts/MainLayout';

import Acerca from './pages/Acerca';
import Sectores from './pages/Sectores';
import Catalogo from './pages/Catalogo';
import Cine from './pages/Cine';
import Teatro from './pages/Teatro';
import CafeLiterario from './pages/CafeLiterario';
import Eventos from './pages/Eventos';
import Foro from './pages/Foro';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <MainLayout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/sectores" element={<Sectores />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/cine" element={<Cine />} />
        <Route path="/teatro" element={<Teatro />} />
        <Route path="/cafe-literario" element={<CafeLiterario />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/foro" element={<Foro />} />
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