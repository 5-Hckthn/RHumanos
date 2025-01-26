import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataUsersGET } from "../../Server/Crud/Crud";

import "./Login.css";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin();
    if (success) {
      navigate("/home");
    } else {
      setErrorMessage("Correo o contraseña incorrectos. Por favor, intente de nuevo.");
    }
  };

  const handleLogin = async () => {
    const data = await dataUsersGET();
    let encontrado = false;

    
    if (correo === data.email && password === data.password) {
        navigate('/home')
      
      localStorage.setItem("sesion", "true"); // Guardar sesión
      encontrado = true;
    }
  }
  

  return (
    <div className="back-login">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            id="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="remenber-forgot">
          <a href="#">Olvidé mi contraseña</a>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="buttonLogin" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};


export default Login;

