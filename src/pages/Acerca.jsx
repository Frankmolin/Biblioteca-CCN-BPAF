import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Acerca() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-primary text-center mb-4 sm:mb-6">
        Acerca del Centro Cultural Necochea — Biblioteca Popular "Andrés Ferreyra"
      </h1>

      <p className="text-base sm:text-lg text-center mb-6 sm:mb-10 text-base-content">
        Nuestra institución, fundada en 1907, promueve la cultura, educación y
        solidaridad en el distrito de Necochea. Aquí encontrarás más información
        sobre nuestra historia, equipo y actividades.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full cursor-pointer bg-base-100 border-l-4 border-primary py-4 sm:py-6 px-4 sm:px-6 rounded-xl shadow hover:shadow-md text-base sm:text-lg font-semibold text-neutral-content hover:bg-primary hover:text-primary-content transition"
          onClick={() => navigate("/autoridades")}
        >
          Autoridades / Jerarquía
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full cursor-pointer bg-base-100 border-l-4 border-secondary py-4 sm:py-6 px-4 sm:px-6 rounded-xl shadow hover:shadow-md text-base sm:text-lg font-semibold text-neutral-content hover:bg-secondary hover:text-secondary-content transition"
          onClick={() => navigate("/galeria")}
        >
          Galería de Fotos
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full cursor-pointer bg-base-100 border-l-4 border-accent py-4 sm:py-6 px-4 sm:px-6 rounded-xl shadow hover:shadow-md text-base sm:text-lg font-semibold text-neutral-content hover:bg-accent hover:text-accent-content transition"
          onClick={() => navigate("/historia")}
        >
          Historia
        </motion.button>
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <button
          onClick={() => navigate("/")}
          className="link link-primary text-base sm:text-lg font-medium"
        >
          ← Volver al inicio
        </button>
      </div>
    </motion.div>
  );
}