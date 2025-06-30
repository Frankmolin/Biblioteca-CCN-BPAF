import React, { useEffect, useState } from "react";
import { CoffeeIcon, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackApiUrl from "../utils/BackApiUrl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Paleta de colores de tu theme
const PALETA = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "info",
  "success",
  "warning",
  "error",
];

// Devuelve un color de la paleta en base al id del evento (siempre igual para el mismo evento)
function colorEvento(id) {
  if (!id) return PALETA[0];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % PALETA.length;
  return PALETA[idx];
}

// COMPONENTES MODULARES

function EventoCard({ evento, color, recordarme }) {
  return (
    <div
      className={`bg-base-100 border-l-4 border-${color} p-4 rounded shadow hover:shadow-md transition space-y-2 flex flex-col`}
    >
      <img
        src={
          evento.imagen_url
            ? evento.imagen_url.startsWith("http")
              ? evento.imagen_url
              : `${BackApiUrl}${evento.imagen_url.startsWith("/") ? "" : "/"}${evento.imagen_url}`
            : "/generic-cover.png"
        }
        alt="Evento"
        className="w-full h-48 object-cover rounded mb-2 bg-base-200"
        crossOrigin="anonymous"
        onError={(e) => {
          e.target.src = "/generic-cover.png";
        }}
      />
      <h3 className={`text-xl font-semibold text-${color}`}>{evento.titulo}</h3>
      <p className="text-base-content">{evento.descripcion}</p>
      <p className="text-sm text-gray-500">
        {evento.fecha && new Date(evento.fecha).toLocaleString('es-AR', { timeZone: 'GMT', hour12: false, dateStyle: "full", timeStyle: "short"})}
      </p>
      <button
        onClick={() => recordarme(evento.titulo, new Date(evento.fecha))}
        className={`mt-2 px-3 py-1 bg-${color} text-white text-sm rounded hover:bg-${color}/90 transition self-start`}
      >
        Recordarme
      </button>
    </div>
  );
}

function ResultadosVotacion({ resultados }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="mt-2"
    >
      <h4 className="font-semibold text-info">Resultados:</h4>
      <ul className="text-sm">
        {Object.entries(resultados.resultados || {}).map(([op, count]) => (
          <li key={op}>
            {op}: <span className="font-bold">{count}</span> voto(s)
          </li>
        ))}
      </ul>
      <div className="mt-1 text-xs text-gray-500">
        Total de votos: {resultados.total_votos}
      </div>
    </motion.div>
  );
}

function VotacionCard({
  votacion,
  usuario,
  votando,
  handleVotar,
  navigate,
  fetchResultados,
  showResultadosId,
  resultados,
}) {
  return (
    <motion.div
      key={votacion.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base-100 border-l-4 border-info p-4 rounded shadow space-y-2 flex flex-col"
    >
      <h3 className="text-xl font-semibold text-info">{votacion.titulo}</h3>
      <p className="text-base-content">{votacion.descripcion}</p>
      <p className="text-sm text-gray-500">
        {votacion.fecha_fin && (
          <>Cierra: {new Date(votacion.fecha_fin).toLocaleDateString("es-AR")}</>
        )}
      </p>
      {/* Opciones de votación */}
      {usuario && usuario.rol !== "admin" ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {Array.isArray(votacion.opciones) &&
            votacion.opciones.map((opcion, idx2) => (
              <button
                key={idx2}
                type="button"
                className="btn btn-xs btn-info"
                disabled={votando?.[votacion.id]}
                onClick={() => handleVotar(votacion.id, opcion)}
              >
                {opcion}
              </button>
            ))}
        </div>
      ) : (
        <div className="text-xs text-gray-400 mt-2">
          {usuario?.rol === "admin"
            ? "Los administradores no pueden votar."
            : (
              <span>
                Debes <button className="link link-info" onClick={() => navigate("/login")}>iniciar sesión</button> para votar.
              </span>
            )
          }
        </div>
      )}
      {/* Botón de resultados */}
      <button
        className="link link-info mt-2 self-start flex items-center gap-1"
        onClick={() => fetchResultados(votacion.id)}
      >
        <BarChart3 size={16} /> Ver resultados
      </button>
      {/* Mostrar resultados si corresponde */}
      <AnimatePresence>
        {showResultadosId === votacion.id && resultados[votacion.id] && (
          <ResultadosVotacion resultados={resultados[votacion.id]} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FuncionCard({ funcion, recordarme }) {
  return (
    <div className="bg-base-100/90 p-6 rounded shadow-md space-y-2">
      <h3 className="font-semibold text-primary">{funcion.titulo}</h3>
      <p className="text-base-content">{funcion.descripcion}</p>
      <p className="text-sm text-gray-500">
        {funcion.fecha && new Date(funcion.fecha).toLocaleString('es-AR', { timeZone: 'GMT', hour12: false, dateStyle: "full", timeStyle: "short"})}
      </p>
      <button
        onClick={() => recordarme(funcion.titulo, funcion.fecha)}
        className="mt-1 px-3 py-1 bg-primary text-white text-sm rounded hover:bg-primary/90 transition"
      >
        Recordarme
      </button>
    </div>
  );
}

function CafeLiterario() {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <CoffeeIcon className="text-secondary" />
        <h2 className="text-2xl font-bold text-secondary">Café Literario</h2>
      </div>
      <p>
        <img src="./IMGFlor.png" alt="Flor decorativa" />
      </p>
      <div className="mt-2 text-base-content">
        <h3>Descargá la carta del café literario con las opciones disponibles: </h3>
      </div>
      <a
        href="https://drive.google.com/file/d/1gALmq57RcMztB50NFgXqgtP9wdApsX7z/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-accent text-accent-content px-4 py-2 rounded hover:bg-accent-content hover:text-accent transition"
      >
        Ver carta en PDF
      </a>
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [busquedaEventos, setBusquedaEventos] = useState("");
  const [funciones, setFunciones] = useState([]);
  const [busquedaFunciones, setBusquedaFunciones] = useState("");
  const [votaciones, setVotaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState({});
  const [showResultadosId, setShowResultadosId] = useState(null);
  const [votando, setVotando] = useState({});
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
  const navigate = useNavigate();

  // Eventos
  useEffect(() => {
    const fetchEventos = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BackApiUrl}/eventos`);
        const data = await res.json();
        setEventos(data.eventos || []);
      } catch {
        setEventos([]);
      }
      setLoading(false);
    };
    fetchEventos();
  }, []);

  // Funciones
  useEffect(() => {
    const fetchFunciones = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BackApiUrl}/funciones`);
        const data = await res.json();
        setFunciones(data.funciones || []);
      } catch {
        setFunciones([]);
      }
      setLoading(false);
    };
    fetchFunciones();
  }, []);

  // Votaciones (solo lista básica)
  useEffect(() => {
    const fetchVotaciones = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BackApiUrl}/votaciones`);
        const data = await res.json();
        setVotaciones(data.votaciones || []);
      } catch {
        setVotaciones([]);
      }
      setLoading(false);
    };
    fetchVotaciones();
  }, []);

  // Obtener votación + resultados por ID (nuevo endpoint)
  const fetchResultados = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${BackApiUrl}/votaciones/${id}`);
      const data = await res.json();
      if (!data.votacion) throw new Error("No se encontró la votación");
      setResultados((prev) => ({
        ...prev,
        [id]: {
          ...data,
        },
      }));
      setShowResultadosId(id);
    } catch (error) {
      toast.error(error.message || "No se pudieron obtener los resultados.");
    }
    setLoading(false);
  };

  // Votar
  const handleVotar = async (votacionId, opcion) => {
    if (!token || !usuario) {
      toast.error("Debes iniciar sesión para votar.");
      navigate("/login");
      return;
    }
    if (usuario.rol === "admin") {
      toast.error("Los administradores no pueden votar.");
      return;
    }
    setVotando((prev) => ({ ...prev, [votacionId]: true }));
    try {
      const res = await fetch(`${BackApiUrl}/votaciones/${votacionId}/votar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ opcion }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al votar");
      toast.success(data.message || "¡Voto registrado!");
      fetchResultados(votacionId);
    } catch (err) {
      toast.error(err.message || "Error al votar");
    }
    setVotando((prev) => ({ ...prev, [votacionId]: false }));
  };

  const recordarme = (titulo, fecha) => {
    const ahora = new Date();
    if (fecha < ahora) {
      alert(`El evento "${titulo}" ya pasó.`);
    } else {
      alert(`Se ha activado un recordatorio para: "${titulo}" el día ${fecha.toLocaleString()}.`);
    }
  };

  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busquedaEventos.toLowerCase())
  );

  const funcionesFiltradas = funciones.filter((funcion) =>
    funcion.titulo.toLowerCase().includes(busquedaFunciones.toLowerCase())
  );

  return (
    <div className="w-full my-12 max-w-7xl mx-auto px-4 space-y-8">
      
      {/* Sección Eventos */}
      <section className="w-full">
        <h1 className="text-5xl font-bold text-neutral-content mb-4 text-center">Eventos</h1>

        {/* Buscador de eventos */}
        <input
          type="text"
          placeholder="Buscar evento..."
          value={busquedaEventos}
          onChange={(e) => setBusquedaEventos(e.target.value)}
          className="w-full mb-6 p-2 rounded bg-base-100 text-base-content shadow-sm focus:outline-none"
        />

        {loading ? (
          <div className="text-center text-base-content">Cargando eventos...</div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosFiltrados.length > 0 ? (
              eventosFiltrados.map((evento, index) => (
                <EventoCard
                  key={evento.id || index}
                  evento={evento}
                  color={colorEvento(evento.id)}
                  recordarme={recordarme}
                />
              ))
            ) : (
              <p className="text-base-content col-span-full">No se encontraron eventos con ese nombre.</p>
            )}
          </div>
        )}
      </section>

      {/* Sección Votaciones */}
      <section className="w-full mt-12">
        <h2 className="text-4xl font-bold text-info mb-4 text-center">Votaciones</h2>
        {loading ? (
          <div className="text-center text-base-content">Cargando votaciones...</div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {votaciones.length > 0 ? (
              votaciones.map((votacion, idx) => (
                <VotacionCard
                  key={votacion.id}
                  votacion={votacion}
                  usuario={usuario}
                  votando={votando}
                  handleVotar={handleVotar}
                  navigate={navigate}
                  fetchResultados={fetchResultados}
                  showResultadosId={showResultadosId}
                  resultados={resultados}
                />
              ))
            ) : (
              <p className="text-base-content col-span-full">No hay votaciones activas.</p>
            )}
          </div>
        )}
      </section>

      <div className="border-t border-base-300 my-4" />

      {/* Cine y Teatro + Café */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Cine y Teatro */}
        <div
          className="md:col-span-2 relative rounded-xl overflow-hidden shadow"
          style={{
            backgroundImage: "url('/images/gato-esfinge.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-neutral bg-opacity-60" />
          <div className="relative z-10 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-neutral-content">Cine y teatro</h2>

            {/* Buscador de funciones */}
            <input
              type="text"
              placeholder="Buscar película u obra..."
              value={busquedaFunciones}
              onChange={(e) => setBusquedaFunciones(e.target.value)}
              className="w-full p-3 rounded bg-base-100 text-base-content shadow-sm focus:outline-none"
            />

            {/* Funciones filtradas */}
            <div className="grid sm:grid-cols-1 gap-6 mt-8">
              {funcionesFiltradas.length > 0 ? (
                funcionesFiltradas.map((funcion, index) => (
                  <FuncionCard
                    key={index}
                    funcion={funcion}
                    recordarme={recordarme}
                  />
                ))
              ) : (
                <p className="text-base-content">No se encontraron funciones con este nombre.</p>
              )}
            </div>
          </div>
        </div>

        {/* Café Literario */}
        <CafeLiterario />
      </section>
    </div>
  );
}
