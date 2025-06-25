import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackApiUrl from "../../utils/BackApiUrl";
import { useNavigate } from "react-router-dom";


export default function AdminFunciones() {
  const navigate = useNavigate();

  const [funciones, setFunciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null); // función en edición o null
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    imagen: null,
  });

  const token = localStorage.getItem("token");

  // Cargar funciones
  const fetchFunciones = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BackApiUrl}/funciones`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setFunciones(data.funciones || []);
      console.log(data.funciones);
    } catch {
      toast.error("Error al cargar funciones");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFunciones();


  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Crear o actualizar función
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", form.titulo);
    formData.append("descripcion", form.descripcion);
    formData.append("fecha", form.fecha);
    if (form.imagen) formData.append("imagen", form.imagen);

    try {
      let res;
      if (editing) {
        res = await fetch(`${BackApiUrl}/funciones/${editing.id}`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });
      } else {
        res = await fetch(`${BackApiUrl}/funciones`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      toast.success(data.message || (editing ? "Función actualizada" : "Función creada"));
      setForm({ titulo: "", descripcion: "", fecha: "", imagen: null });
      setEditing(null);
      fetchFunciones();
    } catch (err) {
      toast.error(err.message || "Error al guardar");
    }
  };

  // Editar función
  const handleEdit = (funcion) => {
    setEditing(funcion);
    setForm({
      titulo: funcion.titulo,
      descripcion: funcion.descripcion,
      fecha: funcion.fecha ? funcion.fecha.slice(0, 16) : "",
      imagen: null,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eliminar función
  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta función?")) return;
    try {
      const res = await fetch(`${BackApiUrl}/funciones/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      toast.success(data.message || "Función eliminada");
      fetchFunciones();
    } catch (err) {
      toast.error(err.message || "Error al eliminar");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      
      <h1 className="text-2xl font-bold text-primary mb-6">
        {editing ? "Editar Función" : "Crear Nueva Función"}
      </h1>
      <form onSubmit={handleSubmit} className="bg-base-100 p-4 rounded shadow mb-8 flex flex-col gap-4">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          className="input input-bordered"
          value={form.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="textarea textarea-bordered"
          value={form.descripcion}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="fecha"
          className="input input-bordered"
          value={form.fecha}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="imagen"
          accept="image/*"
          className="file-input file-input-bordered"
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary">
            {editing ? "Actualizar" : "Crear"}
          </button>
          {editing && (
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setEditing(null);
                setForm({ titulo: "", descripcion: "", fecha: "", imagen: null });
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h2 className="text-xl font-bold mb-4 text-secondary">Lista de funciones</h2>
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <div className="space-y-4">
          {funciones.map((funcion) => (
            <div key={funcion.id} className="bg-base-100 p-4 rounded shadow flex flex-col md:flex-row gap-4 items-center">
              <img
                src={funcion.imagen_url}
                alt="Funcion"
                className="w-32 h-32 object-cover rounded bg-base-200"
                crossorigin="anonymous"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{funcion.titulo}</h3>
                <p className="text-base-content">{funcion.descripcion}</p>
                <p className="text-sm text-gray-500">
                  {new Date(funcion.fecha).toLocaleString('es-AR', { timeZone: 'GMT', hour12: false, dateStyle: "full", timeStyle: "short"})}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="btn btn-sm btn-secondary" onClick={() => handleEdit(funcion)}>
                  Editar
                </button>
                <button className="btn btn-sm btn-error" onClick={() => handleDelete(funcion.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          {funciones.length === 0 && (
            <div className="text-center text-gray-500">No hay funciones.</div>
          )}
        </div>
      )}
      <div>
      <button
        onClick={() => navigate(-1)}
        className="mt-8 link link-primary block mx-auto"
      >
        ← Volver
      </button>
      </div>  
    </div>
  );
}