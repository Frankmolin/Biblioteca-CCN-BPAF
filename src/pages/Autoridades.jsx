import { useNavigate } from "react-router-dom";

export default function Autoridades() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Autoridades / Jerarquía
      </h1>
      <p className="text-gray-100 text-lg text-center">
        Como organización, la institución es liderada por el presidente de comisión, rol que en la actualidad desempeña María Cristina Azcueta. También cuenta con un vicepresidente, vocal, tesorero y revisores de cuentas; todos puestos completamente Ad Honorem. <br /><br />
        En lo que respecta a la biblioteca en particular, la gestión de la misma está a cargo de solamente tres empleados: un director y dos bibliotecarios. No obstante, también cumplen parte de su jornada laboral en la biblioteca algunos empleados municipales. 
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 text-[#6b4c3b] underline hover:text-[#563b2d] block mx-auto"
      >
        ← Volver
      </button>
    </div>
  );
}

