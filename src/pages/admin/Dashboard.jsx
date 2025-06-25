import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-4 bg-base-100">
      <h1 className="text-3xl font-bold text-primary mb-8">Panel de Administración</h1>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        <button
          className="btn btn-primary btn-lg w-full"
          onClick={() => navigate("/admin/usuarios")}
        >
          Gestionar Usuarios
        </button>
        <button
          className="btn btn-secondary btn-lg w-full"
          onClick={() => navigate("/admin/eventos")}
        >
          Gestionar Eventos
        </button>
        <button
          className="btn btn-accent btn-lg w-full"
          onClick={() => navigate("/admin/funciones")}
        >
          Gestionar Funciones
        </button>
        <button
          className="btn btn-info btn-lg w-full"
          onClick={() => navigate("/admin/votaciones")}
        >
          Gestionar Votaciones
        </button>
      </div>
      <div>
      <button
        onClick={() => navigate(-1)}
        className="mt-8 link link-primary block mx-auto"
      >
        ← Volver
      </button>
      </div>    
    </div>
  );
}