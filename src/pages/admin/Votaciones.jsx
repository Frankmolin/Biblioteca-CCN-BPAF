<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Votaciones() {
  const [votaciones, setVotaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    opciones: "",
    fecha_fin: "",
  });

  const apiUrl = import.meta.env.VITE_BACK_API_URL;
  const token = localStorage.getItem("token");

  // Obtener todas las votaciones
  const fetchVotaciones = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/votaciones`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      setVotaciones(data.votaciones || []);
    } catch {
      toast.error("Error al obtener votaciones");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVotaciones();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Crear o actualizar votación
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      opciones: form.opciones.split(",").map((op) => op.trim()).filter(Boolean),
    };

    try {
      let res;
      if (editId) {
        res = await fetch(`${apiUrl}/votaciones/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(`${apiUrl}/votaciones`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(payload),
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      toast.success(data.message || (editId ? "Votación actualizada" : "Votación creada"));
      setForm({ titulo: "", descripcion: "", opciones: "", fecha_fin: "" });
      setEditId(null);
      fetchVotaciones();
    } catch (error) {
      toast.error(error.message || "Error al guardar votación");
    }
  };

  // Editar votación
  const handleEdit = (votacion) => {
    setForm({
      titulo: votacion.titulo,
      descripcion: votacion.descripcion,
      opciones: Array.isArray(votacion.opciones) ? votacion.opciones.join(", ") : "",
      fecha_fin: votacion.fecha_fin ? votacion.fecha_fin.slice(0, 10) : "",
    });
    setEditId(votacion.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eliminar votación
  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta votación?")) return;
    try {
      const res = await fetch(`${apiUrl}/votaciones/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      toast.success(data.message || "Votación eliminada");
      fetchVotaciones();
    } catch (error) {
      toast.error(error.message || "Error al eliminar votación");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ToastContainer position="top-center" />
      <h2 className="text-2xl font-bold text-info mb-4">
        {editId ? "Editar Votación" : "Crear Nueva Votación"}
      </h2>
      <form onSubmit={handleSubmit} className="bg-base-100 p-4 rounded shadow mb-8 flex flex-col gap-4">
        <input
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <input
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <input
          name="opciones"
          placeholder="Opciones (separadas por coma)"
          value={form.opciones}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <input
          name="fecha_fin"
          type="date"
          placeholder="Fecha de cierre"
          value={form.fecha_fin}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <div className="flex gap-2">
          <button className="btn btn-primary" type="submit">
            {editId ? "Actualizar" : "Crear"}
          </button>
          {editId && (
            <button
              className="btn btn-secondary ml-2"
              type="button"
              onClick={() => {
                setForm({ titulo: "", descripcion: "", opciones: "", fecha_fin: "" });
                setEditId(null);
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h2 className="text-xl font-bold mb-4 text-secondary">Lista de votaciones</h2>
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Opciones</th>
              <th>Fecha fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {votaciones.map((v) => (
              <tr key={v.id}>
                <td>{v.titulo}</td>
                <td>{v.descripcion}</td>
                <td>{Array.isArray(v.opciones) ? v.opciones.join(", ") : ""}</td>
                <td>{v.fecha_fin ? v.fecha_fin.slice(0, 10) : ""}</td>
                <td>
                  <button className="btn btn-xs btn-info mr-2" onClick={() => handleEdit(v)}>
                    Editar
                  </button>
                  <button className="btn btn-xs btn-error" onClick={() => handleDelete(v.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {votaciones.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500">
                  No hay votaciones.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
=======
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Votaciones() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-info mb-4">Administrar Votaciones</h2>
      {/* Aquí va la tabla y formulario CRUD de votaciones */}

      <div>
      <button
        onClick={() => navigate(-1)}
        className="mt-8 link link-primary block mx-auto"
      >
        ← Volver
      </button>
      </div>  
>>>>>>> 502c99e9524bcc0201012496d0428e7472c32d08
    </div>
  );
}
