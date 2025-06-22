import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-5xl font-bold text-error mb-4">404</h1>
      <p className="text-lg text-base-content mb-6">Página no encontrada</p>
      <Link to="/" className="btn bg-primary text-primary-content">
        Volver al inicio
      </Link>
    </div>
  );
}