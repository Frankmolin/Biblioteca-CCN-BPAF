import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackApiUrl from "../utils/BackApiUrl";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch(`${BackApiUrl}/auth/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al registrarse");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      toast.success(data.message || "¡Login exitoso!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      toast.error(err.message || "Error al registrarse");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 my-4 p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          Registrarse
        </h2>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-base-content mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="input input-bordered w-full"
            required
            autoComplete="name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-base-content mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-base-content mb-1">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            required
            autoComplete="new-password"
            min={6}
            
          />
        </div>
        <button
          type="submit"
          className="btn bg-primary text-primary-content w-full"
        >
          Registrarse
        </button>
        <div className="mt-4 text-center">
          <span className="text-base-content">¿Ya tenés una cuenta? </span>
          <Link to="/login" className="link link-primary">
            Iniciar sesión
          </Link>
        </div>
      </form>
      
    </div>
  );
};

export default Register;