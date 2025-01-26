import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="back-login">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="buttonLogin" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;