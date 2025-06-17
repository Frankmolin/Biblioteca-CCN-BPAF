import { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        
        try {
          
          fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password }),
          })
          .then((res) => res.json())

          navigate('/');

        } catch(error) {
            setError(error.response?.data?.message || 'Lo sentimos; ha ocurrido un error en la conexión.');
            console.error('Error: ', error)
        }  
    };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo electrónico</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEMail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Ingresa tu contraseña"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn w-full btn-primary">Iniciar Sesión</button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/register" className="link link-primary">
              ¿Todavía no tenés una cuenta? Regístrate
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;