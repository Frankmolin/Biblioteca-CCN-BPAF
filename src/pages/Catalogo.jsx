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

export default function Catalogo() {
  const [campo, setCampo] = useState('');
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultados([]);
    try {
      const params = new URLSearchParams({
        idx: campo,
        q: query,
        do: 'Buscar',
      });
      // Cambia esta URL si usas un backend proxy propio para evitar CORS
      const response = await fetch(`http://0197.bepe.ar/cgi-bin/koha/opac-search.pl?${params.toString()}`);
      const htmlText = await response.text();

      // Parsear HTML usando DOMParser (solo funciona si no hay CORS)
      const parser = new window.DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const filas = doc.querySelectorAll('tbody tr');
      const libros = [];

      filas.forEach(fila => {
        const titulo = fila.querySelector('a.title')?.textContent?.trim() || '';
        const enlace = fila.querySelector('a.title')?.href || '';
        const autor = fila.querySelector('a.author')?.textContent?.trim() || '';
        const publicacion = fila.querySelector('.results_summary.publisher')?.textContent?.replace(/Publicación:/, '').trim() || '';
        const fecha = fila.querySelector('.results_summary.date')?.textContent?.replace(/Fecha:/, '').trim() || '';
        const disponibilidad = fila.querySelector('.results_summary .label + span')?.textContent?.trim() || '';

        libros.push({
          titulo,
          enlace,
          autor,
          publicacion,
          fecha,
          disponibilidad
        });
      });

      setResultados(libros);
    } catch (err) {
      setResultados([]);
      alert("Error al buscar. Si ves un error de CORS, consulta con el administrador.");
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
            <div key={i} className="border rounded-lg p-4 shadow bg-white">
              <h2 className="font-bold text-lg mb-2">
                {libro.enlace ? (
                  <a href={libro.enlace} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                    {libro.titulo}
                  </a>
                ) : libro.titulo}
              </h2>
              <p className="text-sm mb-1"><span className="font-semibold">Autor:</span> {libro.autor}</p>
              <p className="text-sm mb-1"><span className="font-semibold">Publicación:</span> {libro.publicacion}</p>
              <p className="text-sm mb-1"><span className="font-semibold">Fecha:</span> {libro.fecha}</p>
              <p className="text-sm"><span className="font-semibold">Disponibilidad:</span> {libro.disponibilidad}</p>
            </div>
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
