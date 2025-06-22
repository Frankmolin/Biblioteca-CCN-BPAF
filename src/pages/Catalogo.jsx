import React, { useState } from 'react';

const opciones = [
  { value: '', label: 'Catálogo de biblioteca' },
  { value: 'ti', label: 'Título' },
  { value: 'au', label: 'Autor' },
  { value: 'su', label: 'Materia' },
  { value: 'nb', label: 'ISBN' },
  { value: 'se', label: 'Series' },
  { value: 'callnum', label: 'Signatura topográfica' },
];

const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";
const GENERIC_COVER = "/img/generic-cover.png"; // Asegúrate de tener esta imagen en public/img/

export default function Catalogo() {
  const [campo, setCampo] = useState('');
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [paginacion, setPaginacion] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e, url = null) => {
    e && e.preventDefault();
    setLoading(true);
    setResultados([]);
    setPaginacion([]);
    try {
      let fetchUrl;
      if (url) {
        fetchUrl = API_URL + url;
      } else {
        const params = new URLSearchParams({
          q: query,
          idx: campo,
        });
        fetchUrl = `${API_URL}/libros/buscar?${params.toString()}`;
      }
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Error al buscar libros");
      const data = await response.json();
      setResultados(data.resultados || []);
      setPaginacion(data.paginacion || []);
    } catch (err) {
      setResultados([]);
      setPaginacion([]);
      alert("Error al buscar. Intenta nuevamente.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 items-center mb-6">
        <label htmlFor="masthead_search" className="font-semibold">Buscar</label>
        <select
          name="idx"
          id="masthead_search"
          value={campo}
          onChange={e => setCampo(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {opciones.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <input
          name="q"
          type="text"
          title="Escriba el término de búsqueda"
          className="border rounded px-2 py-1"
          id="translControl1"
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
        />
        <button type="submit" id="searchsubmit" className="btn btn-primary px-4 py-1" disabled={loading}>
          {loading ? "Buscando..." : "Ir"}
        </button>
      </form>

      {/* Resultados */}
      {resultados.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resultados.map((libro, i) => (
            <div key={i} className="border rounded-lg p-4 shadow bg-base-100 flex gap-4">
              <div className="w-24 flex-shrink-0">
                <img
                  src={libro.portada || GENERIC_COVER}
                  alt="Tapa del libro"
                  className="w-24 h-32 object-cover rounded bg-base-200"
                  onError={e => { e.target.src = GENERIC_COVER; }}
                />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg mb-1">
                  {libro.enlace ? (
                    <a href={libro.enlace} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {libro.titulo}
                    </a>
                  ) : libro.titulo}
                </h2>
                <p className="text-sm mb-1"><span className="font-semibold">Autor:</span> {libro.autor}</p>
                <p className="text-sm mb-1"><span className="font-semibold">Publicación:</span> {libro.publicacion}</p>
                <p className="text-sm mb-1"><span className="font-semibold">Fecha:</span> {libro.fecha}</p>
                <p className="text-sm"><span className="font-semibold">Disponibilidad:</span> {libro.disponibilidad}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      {paginacion.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {paginacion.map((p, idx) => (
            <button
              key={idx}
              className={`btn btn-xs ${p.activa ? "btn-primary" : "btn-outline btn-primary"}`}
              disabled={p.activa}
              onClick={e => handleSubmit(e, p.enlace)}
              type="button"
            >
              {p.pagina}
            </button>
          ))}
        </div>
      )}

      {/* Mensaje si no hay resultados */}
      {resultados.length === 0 && !loading && (
        <div className="text-center text-gray-500 mt-8">No hay resultados para mostrar.</div>
      )}
    </div>
  );
}
