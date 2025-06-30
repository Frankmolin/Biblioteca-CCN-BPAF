import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav className="navbar shadow flex flex-col items-center px-2 bg-base-100 z-2  top-0">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo" className="w-32 h-28 rounded-md" />
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              CCN
            </span>
            <span className="font-sans font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              BP
              <span className="ml-0.5 rounded font-outline-1 text-white dark:font-black">AF
              </span>
            </span>

            <span className="text-xs sm:text-[15px] leading-5 mt-1">
              Centro Cultural Necochea<br />Biblioteca Popular Andrés Ferreyra
            </span>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <ThemeChanger />
          {!token ? (
            <div className="text-xs sm:text-sm text-secondary">
              <Link to="/login" className="hover:underline">Iniciar sesión</Link>
              <span className="mx-1">|</span>
              <Link to="/register" className="hover:underline">Registrarse</Link>
            </div>
          ) : (
            <div className="text-xs sm:text-sm text-secondary flex items-center gap-2">
              {usuario?.rol === "admin" && (
                <Link to="/dashboard" className="hover:underline">Administrar</Link>
              )}
              <span className="mx-1">|</span>
              <button onClick={handleLogout} className="hover:underline bg-transparent border-none cursor-pointer text-secondary">
              Cerrar sesión
              </button>
            </div>
          )}
          <a
            href="https://link.mercadopago.com.ar/donacionesbiblioteca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-accent text-accent-content rounded-full px-4 sm:px-6 py-2 font-bold text-xs sm:text-base border-none"
          >
            DONAR
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center text-primary-content bg-primary p-4">
        <ul className="menu navbar-center justify-center flex flex-col items-center sm:menu-horizontal sm:flex-row flex-wrap rounded-lg px-2 sm:px-4 py-0 font-semibold gap-1 sm:gap-2 text-xs sm:text-base w-full max-w-2xl">
          <li>
            <Link to="/acerca" className="text-primary-content">INSTITUCIÓN</Link>
          </li>
          <li>
            <Link to="/catalogo" className="text-primary-content">CATÁLOGO</Link>
          </li>
          <li>
            <Link to="/eventos" className="text-primary-content">EVENTOS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;