import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target).entries());

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    // Lógica de registro
    toast.success("Registro exitoso");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo Electrónico</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmar Contraseña</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn w-full btn-primary">Registrarse</button>
            </div>
          </form>
          <div className="mt-4 text-center ">
            <a href="/login" className="link link-primary">
              ¿Ya tienes cuenta? Inicia sesión
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;