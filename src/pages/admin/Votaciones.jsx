import React from "react";
import { useNavigate } from "react-router-dom";

export default function Votaciones() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-info mb-4">Administrar Votaciones</h2>
      {/* Aquí va la tabla y formulario CRUD de votaciones */}

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