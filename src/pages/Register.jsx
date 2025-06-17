import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [user, setUser] = useState([]);
  const [form, setForm] = useState({ email: '', username: '', password: '', confirmPassword: ''});
  
  const sendUser = (e) => {
    
    e.preventDefault();

    if(!form.username || !form.password || !form.email ) {

      toast.error("Todos los campos son obligatorios");
      return } else {

        if(form.password !== form.confirmPassword) {

          toast.error("Las contraseñas no coinciden");
          return } else {

            const newUser = {
              email: form.email,
              username: form.username,
              password: form.password,
            };
          
            fetch('http://localhost:3001/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newUser),
            })
            .then((res) => res.json())
            .then((data) => {
              setUser({...user, data})
              setForm({ email: '', username: '', password: '', confirmPassword: ''})
            })
            .catch((error) => console.error("Error al registrar usuario: ", error));
          }
        }
      }
      
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
      }
    
    return (
    
    <div className="flex justify-center items-center h-screen ">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Registrarse</h2>
          <form onSubmit={sendUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo electrónico</span>
                </label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre de usuario</span>
                </label>
                <input
                type="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Ingresa tu nombre de usuario"
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
                value={form.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmar contraseña</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirma tu contraseña"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn w-full btn-primary">Registrarse</button>
            </div>
          </form>
          <div className="mt-4 text-center ">
            <Link to="/login" className="link link-primary">
              ¿Ya tenés una cuenta? Inicia sesión
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;