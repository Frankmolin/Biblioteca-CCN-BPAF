
 import { useNavigate } from "react-router-dom";

export default function Historia() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold  mb-4 text-center">
        Nuestra Historia
      </h1>
      <p className=" text-lg text-center">
        En un principio, la «Biblioteca Popular Andrés Ferreyra» se trató de una iniciativa promovida por la filial necochense de la Asociación de Educadores Bonaerenses ante la ausencia de un espacio donde la población pudiera acceder a información y material de estudio de manera gratuita. Al tratarse de una biblioteca popular, la colección original de esta institución fue el resultado de donaciones realizadas por vecinos, y los espacios donde funcionaba la biblioteca eran alquilados; las reuniones también tenían lugar en viviendas particulares. Cabe mencionar que el edificio actual es, no obstante, propiedad de la biblioteca.
        No fue sino hasta la década de 1960 que la biblioteca obtuvo personería jurídica al establecerse como una sola unidad con el «Centro Cultural Necochea» mediante un convenio estatutario. Por este motivo, la institución en sí se encuentra ligada al municipio (sin ser dependiente del mismo).
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 link link-primary block mx-auto"
      >
        ← Volver
      </button>
    </div>
  );
}
