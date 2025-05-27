import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const imagenes = [
  "public/images/foto1.jpg",
  "public/images/foto2.jpg",
  "public/images/foto3.jpg",
  "public/images/foto4.jpg",
  "public/images/foto5.jpg",
  "public/images/foto6.jpg",
  "public/images/foto7.jpg",
  "public/images/foto8.jpg",
  "public/images/foto9.jpg",
  "public/images/foto10.jpg",
  "public/images/foto11.jpg",
];

export default function Galeria() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Galería de Fotos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imagenes.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img src={src} alt={`foto-${index}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 text-[#6b4c3b] underline hover:text-[#563b2d] block mx-auto"
      >
        ← Volver
      </button>
    </motion.div>
  );
}
