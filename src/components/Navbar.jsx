import React from 'react';
import { Link } from "react-router-dom";
import ThemeChanger from './ThemeChanger';

const Navbar = () => (
  <nav className="navbar  shadow flex flex-col items-center px-4 py-2">
   <ThemeChanger />
    <div className="w-full flex items-center justify-between mb-2">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo biblio.jpg" alt="Logo" className="w-20 h-20" />
        <div className="flex flex-col">
          <span className="font-bold text-2xl leading-none">CCN<br />BPAF</span>
          <span className="text-xs leading-none">Centro Cultural de Necochea<br />Biblioteca Popular Andrés Ferreyra</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <Link to="/login" className=" hover:underline">Iniciar sesión</Link>
          <span className="mx-1 ">|</span>
          <Link to="/register" className=" hover:underline">Registrarse</Link>
        </div>
        <button className="btn btn-black rounded-full px-6 py-2  font-bold">DONAR</button>
      </div>
    </div>
    {/* Main navbar */}
    <div className="w-full flex justify-center">
      <ul className="menu menu-horizontal rounded-lg px-4 py-0  font-semibold gap-2">
        <li>
          <Link to="/acerca">ACERCA DE</Link>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>BIBLIOTECA POPULAR</summary>
            <ul className="p-2 rounded-b-lg">
              <li><Link to="/sectores">Sectores</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>CENTRO CULTURAL</summary>
            <ul className="p-2 rounded-b-lg">
              <li><Link to="/cine">Cine</Link></li>
              <li><Link to="/teatro">Teatro</Link></li>
              <li><Link to="/cafe-literario">Café literario</Link></li>
              <li><Link to="/eventos">Eventos</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/foro">FORO</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;