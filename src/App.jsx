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

import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import Votaciones from './pages/admin/Votaciones';
import Funciones from './pages/admin/Funciones';
import Usuarios from './pages/admin/Usuarios';
import EventosAdmin from './pages/admin/Eventos';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <MainLayout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/eventos" element={<Eventos />} />

        <Route path="/autoridades" element={<Autoridades />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/historia" element={<Historia />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/usuarios" element={
          <ProtectedRoute>
            <Usuarios />
          </ProtectedRoute>
        } />
        <Route path="/admin/eventos" element={
          <ProtectedRoute>
            <EventosAdmin />
          </ProtectedRoute>
        } />
        <Route path="/admin/funciones" element={
          <ProtectedRoute>
            <Funciones />
          </ProtectedRoute>
        } />
        <Route path="/admin/votaciones" element={
          <ProtectedRoute>
            <Votaciones />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
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