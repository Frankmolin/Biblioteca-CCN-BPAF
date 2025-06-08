import React, { useState } from "react";
import { CoffeeIcon } from "lucide-react";

const eventos = [
  {
    titulo: "Charla sobre historia local",
    descripcion: "Viernes 24 de mayo, 18:00 hs. Sala principal.",
    fecha: new Date("2024-05-24T18:00:00"),
  },
  {
    titulo: "Taller de escritura creativa",
    descripcion: "Sábado 25 de mayo, 16:00 hs. Aula 3.",
    fecha: new Date("2024-05-25T16:00:00"),
  },
  {
    titulo: "Conferencia de cine argentino",
    descripcion: "Domingo 26 de mayo, 17:00 hs. Auditorio A.",
    fecha: new Date("2024-05-26T17:00:00"),
  },
  {
    titulo: "Encuentro literario regional",
    descripcion: "Lunes 27 de mayo, 19:00 hs. Sala de lectura.",
    fecha: new Date("2024-05-27T19:00:00"),
  },
  {
    titulo: "Festival de poesía contemporánea",
    descripcion: "Martes 28 de mayo, 18:30 hs. Patio central.",
    fecha: new Date("2024-05-28T18:30:00"),
  },
  {
    titulo: "Presentación de libro",
    descripcion: "Miércoles 29 de mayo, 20:00 hs. Sala B.",
    fecha: new Date("2024-05-29T20:00:00"),
  },
];

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

export default function Eventos() {
  const [busquedaFunciones, setBusquedaFunciones] = useState("");
  const [busquedaEventos, setBusquedaEventos] = useState("");

  const recordarme = (titulo, fecha) => {
    const ahora = new Date();
    if (fecha < ahora) {
      alert(`El evento "${titulo}" ya pasó.`);
    } else {
      alert(`Se ha activado un recordatorio para: "${titulo}" el día ${fecha.toLocaleString()}.`);
    }
  };

  const funcionesFiltradas = funciones.filter((funcion) =>
    funcion.titulo.toLowerCase().includes(busquedaFunciones.toLowerCase())
  );

  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busquedaEventos.toLowerCase())
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((evento, index) => (
              <div
                key={index}
                className="bg-base-100 border-l-4 border-primary p-4 rounded shadow hover:shadow-md transition space-y-2"
              >
                <h3 className="text-xl font-semibold text-primary">{evento.titulo}</h3>
                <p className="text-base-content">{evento.descripcion}</p>
                <button
                  onClick={() => recordarme(evento.titulo, evento.fecha)}
                  className="mt-2 px-3 py-1 bg-primary text-white text-sm rounded hover:bg-primary/90 transition"
                >
                  Recordarme
                </button>
              </div>
            ))
          ) : (
            <p className="text-base-content col-span-full">No se encontraron eventos con ese nombre.</p>
          )}
        </div>
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
