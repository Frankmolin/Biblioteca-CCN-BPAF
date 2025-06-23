import React, { useEffect, useState } from "react";
import BackApiUrl from "../../utils/BackApiUrl";
import "../../index.css"; // Asegúrate de importar los estilos
import { useNavigate } from "react-router-dom";

export default function Usuarios() {
  const navigate = useNavigate();
  
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editRol, setEditRol] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Obtener usuarios
  const fetchUsuarios = async () => {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BackApiUrl}/usuarios`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error al obtener usuarios");
      const data = await res.json();
      setUsuarios(data.usuarios);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Actualizar rol
  const handleEditRol = (id, rolActual) => {
    setEditId(id);
    setEditRol(rolActual);
    setMensaje("");
  };

  const handleSaveRol = async (id) => {
    setMensaje("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BackApiUrl}/usuarios/${id}/rol`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ rol: editRol }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Error al actualizar rol");
      }
      setEditId(null);
      fetchUsuarios();
      setMensaje("Rol actualizado correctamente");
    } catch (err) {
      setMensaje(err.message);
    }
  };

  // Eliminar usuario
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    setMensaje("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BackApiUrl}/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Error al eliminar usuario");
      }
      fetchUsuarios();
      setMensaje("Usuario eliminado correctamente");
    } catch (err) {
      setMensaje(err.message);
    }
  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-primary mb-6 font-outline-1">
          Administrar Usuarios
        </h2>
        {mensaje && (
          <div className="mb-4 p-2 rounded bg-success text-success-content">
            {mensaje}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2 rounded bg-error text-error-content">
            {error}
          </div>
        )}
        {loading ? (
          <div className="text-center text-lg text-primary">
            Cargando usuarios...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra rounded-lg border border-base-300">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th className="text-primary">Nombre</th>
                  <th className="text-primary">Email</th>
                  <th className="text-primary">Rol</th>
                  <th className="text-primary">Creado</th>
                  <th className="text-primary">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="hover:bg-base-300 transition">
                    <td>{u.nombre}</td>
                    <td>{u.email}</td>
                    <td>
                      {editId === u.id ? (
                        <select
                          value={editRol}
                          onChange={(e) => setEditRol(e.target.value)}
                          className="select select-bordered select-sm"
                        >
                          <option value="admin">admin</option>
                          <option value="usuario">usuario</option>
                        </select>
                      ) : (
                        <span
                          className={
                            u.rol === "admin"
                              ? "text-primary font-semibold"
                              : "text-secondary"
                          }
                        >
                          {u.rol}
                        </span>
                      )}
                    </td>
                    <td>{new Date(u.created_at).toLocaleString()}</td>
                    <td className="space-x-2">
                      {editId === u.id ? (
                        <>
                          <button
                            onClick={() => handleSaveRol(u.id)}
                            className="btn btn-success btn-sm"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="btn btn-ghost btn-sm"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditRol(u.id, u.rol)}
                            className="btn btn-primary btn-sm"
                          >
                            Editar Rol
                          </button>
                          <button
                            onClick={() => handleDelete(u.id)}
                            className="btn btn-error btn-sm"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                {usuarios.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center p-4">
                      No hay usuarios registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
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