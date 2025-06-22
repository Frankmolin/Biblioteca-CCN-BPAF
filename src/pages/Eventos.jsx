import React, { useEffect, useState } from "react";
import { CoffeeIcon } from "lucide-react";
import BackApiUrl from "../utils/BackApiUrl";

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

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [busquedaEventos, setBusquedaEventos] = useState("");
  const [loading, setLoading] = useState(false);

  const funciones = [
    {
      titulo: "El secreto de sus ojos",
      tipo: "Película",
      horario: "Viernes 20:00 hs.",
      fecha: new Date("2024-05-24T20:00:00"),
    },
    {
      titulo: "Esperando la carroza",
      tipo: "Obra de teatro",
      horario: "Sábado 21:00 hs.",
      fecha: new Date("2024-05-25T21:00:00"),
    },
  ];
  const [busquedaFunciones, setBusquedaFunciones] = useState("");

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
              eventosFiltrados.map((evento, index) => {
                const color = colorEvento(evento.id);
                return (
                  <div
                    key={evento.id || index}
                    className={`bg-base-100 border-l-4 border-${color} p-4 rounded shadow hover:shadow-md transition space-y-2 flex flex-col`}
                  >
                    <img
                      src={
                        evento.imagen_url
                          ? evento.imagen_url.startsWith("http")
                            ? evento.imagen_url
                            : `${BackApiUrl}${evento.imagen_url.startsWith("/") ? "" : "/"}${evento.imagen_url}`
                          : "/img/generic-cover.png"
                      }
                      alt="Evento"
                      className="w-full h-48 object-cover rounded mb-2 bg-base-200"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        e.target.src = "/img/generic-cover.png";
                      }}
                    />
                    <h3 className={`text-xl font-semibold text-${color}`}>{evento.titulo}</h3>
                    <p className="text-base-content">{evento.descripcion}</p>
                    <p className="text-sm text-gray-500">
                      {evento.fecha && new Date(evento.fecha).toLocaleString()}
                    </p>
                    <button
                      onClick={() => recordarme(evento.titulo, new Date(evento.fecha))}
                      className={`mt-2 px-3 py-1 bg-${color} text-white text-sm rounded hover:bg-${color}/90 transition self-start`}
                    >
                      Recordarme
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="text-base-content col-span-full">No se encontraron eventos con ese nombre.</p>
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
              className="w-full p-2 rounded bg-base-100 text-base-content shadow-sm focus:outline-none"
            />

            {/* Funciones filtradas */}
            <div className="grid sm:grid-cols-1 gap-4">
              {funcionesFiltradas.length > 0 ? (
                funcionesFiltradas.map((funcion, index) => (
                  <div key={index} className="bg-base-100/90 p-4 rounded shadow-md space-y-2">
                    <h3 className="font-semibold text-primary">{funcion.titulo}</h3>
                    <p className="text-sm text-base-content">
                      {funcion.tipo} - {funcion.horario}
                    </p>
                    <button
                      onClick={() => recordarme(funcion.titulo, funcion.fecha)}
                      className="mt-1 px-3 py-1 bg-primary text-white text-sm rounded hover:bg-primary/90 transition"
                    >
                      Recordarme
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-base-content">No se encontraron funciones con ese nombre.</p>
              )}
            </div>
          </div>
        </div>

        {/* Café Literario */}
        <div className="bg-base-100 p-6 rounded-xl shadow flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <CoffeeIcon className="text-secondary" />
            <h2 className="text-2xl font-bold text-secondary">Café Literario</h2>
          </div>
          <p className="text-base-content">
            Descargá la carta del café literario con las opciones disponibles.
          </p>
          <a
            href="/pdfs/carta-cafe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-accent text-accent-content px-4 py-2 rounded hover:bg-accent-content hover:text-accent transition"
          >
            Ver carta en PDF
          </a>
        </div>
      </section>
    </div>
  );
}
