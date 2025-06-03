import React from 'react'
const eventos = [
  { titulo: 'Charla sobre historia local', descripcion: 'Viernes 24 de mayo, 18:00 hs. Sala principal.' },
  { titulo: 'Taller de escritura creativa', descripcion: 'Sábado 25 de mayo, 16:00 hs. Aula 3.' },
  { titulo: 'Conferencia de cine argentino', descripcion: 'Domingo 26 de mayo, 17:00 hs. Auditorio A.' },
  { titulo: 'Encuentro literario regional', descripcion: 'Lunes 27 de mayo, 19:00 hs. Sala de lectura.' },
  { titulo: 'Festival de poesía contemporánea', descripcion: 'Martes 28 de mayo, 18:30 hs. Patio central.' },
  { titulo: 'Presentación de libro', descripcion: 'Miércoles 29 de mayo, 20:00 hs. Sala B.' },
];

const funciones = [
  { titulo: 'El secreto de sus ojos', tipo: 'Película', horario: 'Viernes 20:00 hs.' },
  { titulo: 'Esperando la carroza', tipo: 'Obra de teatro', horario: 'Sábado 21:00 hs.' },
];

export default function Eventos() {
  return (
    <div className="w-full my-12 max-w-7xl mx-auto px-4 space-y-8">

      {/* Sección Eventos */}
      <section className="w-full">
        <h1 className="text-5xl font-bold text-neutral-content mb-4 text-center">Eventos</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="bg-base-100 border-l-4 border-primary p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary">{evento.titulo}</h3>
              <p className="text-base-content mt-2">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Línea separadora */}
      <div className="border-t border-base-300 my-4" />

      {/* Cine y Teatro + Café */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Cine y Teatro (2/3 con fondo de gato) */}
        <div
          className="md:col-span-2 relative rounded-xl overflow-hidden shadow"
          style={{
            backgroundImage: "url('/images/gato-esfinge.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Capa oscura para mejor visibilidad del texto */}
          <div className="absolute inset-0 bg-neutral bg-opacity-60"></div>

          {/* Contenido sobre la imagen */}
          <div className="relative z-10 p-6">
            <h2 className="text-2xl font-bold text-neutral-content mb-4">Cine y teatro</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {funciones.map((funcion, index) => (
                <div key={index} className="bg-base-100/90 p-4 rounded shadow-md">
                  <h3 className="font-semibold text-primary">{funcion.titulo}</h3>
                  <p className="text-sm text-base-content">
                    {funcion.tipo} - {funcion.horario}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Café Literario (1/3) */}
        <div className="bg-base-100 p-6 rounded-xl shadow flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-secondary mb-2">Café Literario</h2>
          <p className="text-base-content">Descargá la carta del café literario con las opciones disponibles.</p>
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
  )
}
