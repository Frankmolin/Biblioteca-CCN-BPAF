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
    <div className="w-full max-w-7xl mx-auto px-4 space-y-8">

      {/* Sección Eventos */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Eventos</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="bg-[#fdf5e6] border border-gray-200 p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{evento.titulo}</h3>
              <p className="text-gray-700 mt-2">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Línea separadora */}
      <div className="border-t border-black my-4" />

      {/* Cine y Teatro + Café */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Cine y Teatro (2/3) */}
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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Contenido sobre la imagen */}
          <div className="relative z-10 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Cine y teatro</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {funciones.map((funcion, index) => (
                <div key={index} className="bg-white/80 p-4 rounded shadow-md">
                  <h3 className="font-semibold text-gray-800">{funcion.titulo}</h3>
                  <p className="text-sm text-gray-600">
                    {funcion.tipo} - {funcion.horario}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Café Literario (1/3) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Café Literario</h2>
          <p className="text-gray-600">Descargá la carta del café literario con las opciones disponibles.</p>
          <a
            href="/pdfs/carta-cafe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#6b4c3b] text-white px-4 py-2 rounded hover:bg-[#563b2d]"
          >
            Ver carta en PDF
          </a>
        </div>
      </section>
    </div>
  )
}
