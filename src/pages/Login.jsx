import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackApiUrl from "../utils/BackApiUrl";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch(`${BackApiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        
        throw new Error("Credenciales incorrectas");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      toast.success(data.message || "¡Login exitoso!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
      toast.error(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-200 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 my-4 p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          Iniciar sesión
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-base-content mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            required
            autoComplete="email"
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
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="btn bg-primary text-primary-content w-full"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
        
        <div className="mt-4 text-center">
          <span className="text-base-content">¿No tienes cuenta? </span>
          <Link to="/register" className="link link-primary">
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;