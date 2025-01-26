import React, { useState } from "react";
import "./Login.css"; // Importa el archivo CSS para los estilos del formulario

// Componente principal de Login
const Login = () => {
  // Estados para almacenar los valores del formulario y los mensajes de error
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [errors, setErrors] = useState({}); // Estado para los mensajes de error

  // Función para validar los campos del formulario
  const validateForm = () => {
    const newErrors = {}; // Objeto para almacenar los errores encontrados

    // Validar el campo de correo electrónico
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido."; // Mensaje de error si el correo no es válido
    }

    // Validar el campo de contraseña
    if (!password.trim() || password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres."; // Mensaje de error si la contraseña es muy corta
    }

    setErrors(newErrors); // Actualizar el estado con los errores encontrados
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado de recargar la página

    if (validateForm()) {
      // Si no hay errores, imprime los valores en la consola
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="back-login">
      <h1>Iniciar Sesión</h1>
      {/* Formulario de inicio de sesión */}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          {/* Input para el correo electrónico */}
          <input
            type="email"
            id="email"
            value={email} // Enlaza el input con el estado `email`
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el valor del input
            placeholder="Correo Electrónico" // Texto de ayuda dentro del campo
            required // Indica que este campo es obligatorio
          />
          {/* Mensaje de error para el correo electrónico */}
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="input-box">
          {/* Input para la contraseña */}
          <input
            type="password"
            id="password"
            value={password} // Enlaza el input con el estado `password`
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con el valor del input
            placeholder="Contraseña" // Texto de ayuda dentro del campo
            required // Indica que este campo es obligatorio
          />
          {/* Mensaje de error para la contraseña */}
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div className="remenber-forgot">
          {/* Enlace para la opción "Olvidé mi contraseña" */}
          <a href="#">Olvidé mi contraseña</a>
        </div>
        {/* Botón para enviar el formulario */}
        <button className="buttonLogin" type="submit">
          Iniciar Sesión
        </button>
      </form>
      <div className="register-link">
        {/* Enlace para registrarse si no se tiene cuenta */}
        <p>
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login; // Exporta el componente para usarlo en otros archivos
