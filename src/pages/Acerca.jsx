import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Acerca() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        Acerca del Centro Cultural Necochea — Biblioteca Popular "Andrés Ferreyra"
      </h1>

      <p className="text-lg text-center text-gray-100 mb-10">
        Nuestra institución, fundada en 1907, promueve la cultura, educación y solidaridad en el distrito de Necochea. Aquí encontrarás más información sobre nuestra historia, equipo y actividades.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-gray-300 py-6 px-6 rounded-xl shadow hover:shadow-md text-lg font-semibold text-gray-800"
          onClick={() => navigate("/autoridades")}
        >
          Autoridades / Jerarquía
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-gray-300 py-6 px-6 rounded-xl shadow hover:shadow-md text-lg font-semibold text-gray-800"
          onClick={() => navigate("/galeria")}
        >
          Galería de Fotos
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-gray-300 py-6 px-6 rounded-xl shadow hover:shadow-md text-lg font-semibold text-gray-800"
          onClick={() => navigate("/historia")}
        >
          Historia
        </motion.button>

     
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/")}
          className="text-[#6b4c3b] underline hover:text-[#563b2d] text-lg font-medium"
        >
          ← Volver al inicio
        </button>
      </div>
    </motion.div>
  );
}
