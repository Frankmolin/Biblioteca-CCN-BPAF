import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const imagenes = [
  "./images/foto1.jpg",
  "./images/foto2.jpg",
  "./images/foto3.jpg",
  "./images/foto4.jpg",
  "./images/foto5.jpg",
  "./images/foto6.jpg",
  "./images/foto7.jpg",
  "./images/foto8.jpg",
  "./images/foto9.jpg",
  "./images/foto10.jpg",
  "./images/foto11.jpg",
];

export default function Galeria() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => {
    setModalImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

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
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`foto-${index}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 link link-primary block mx-auto"
      >
        ← Volver
      </button>

      {/* Nuevo Modal con AnimatePresence y framer-motion */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-base-100 rounded-lg shadow-lg max-w-3xl w-full p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 btn btn-sm btn-circle btn-error"
                onClick={closeModal}
                aria-label="Cerrar"
              >
                ✕
              </button>
              <img
                src={modalImg}
                alt="Foto ampliada"
                className="w-full max-h-[70vh] object-contain rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
