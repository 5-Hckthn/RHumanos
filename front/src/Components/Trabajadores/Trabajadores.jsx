import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación hacia el perfil
import "../Trabajadores/Trabajadores.css"; // Archivo CSS para estilos personalizados

const Trabajadores = () => {
  // Estado para almacenar la lista de trabajadores
  const [trabajadores, setTrabajadores] = useState([]);
  
  // Hook de navegación para redirigir al perfil del trabajador
  const navigate = useNavigate();

  // Función para obtener la lista de trabajadores desde la base de datos
  const fetchTrabajadores = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/"); //URL de API
      const data = await response.json();
      setTrabajadores(data); // Almacena los datos obtenidos en el estado
      console.log(data);
      
    } catch (error) {
      console.error("Error al obtener trabajadores:", error);
    }
  };

  // Hook useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchTrabajadores();
  }, []);

  // Función para determinar el color del círculo basado en el estado del usuario
  const getStatusColor = (status) => {
    switch (status) {
      case "Logout":
        return "bg-red-500"; // Color rojo
      case "Break":
      case "Lunch":
      case "No disponible":
        return "bg-yellow-500"; // Color amarillo
      case "Login":
        return "bg-green-500"; // Color verde
      default:
        return "bg-gray-500"; // Color gris por defecto (estado desconocido)
    }
  };

  // Función para manejar el click en una fila y redirigir al perfil del trabajador
  const handleRowClick = (id) => {
    navigate(`/perfil/${id}`); // Navega a la ruta del perfil del trabajador
  };

  return (
    <div className="table-container">
      {/* Tabla para mostrar la información de los trabajadores */}
      <table className="trabajadores-table">
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map((trabajador) => (
            <tr 
              key={trabajador.id} 
              className="clickable-row" 
              onClick={() => handleRowClick(trabajador)} // Redirige al perfil al hacer clic
            >
              <td>{trabajador.cedula}</td>
              <td>{trabajador.first_name} {trabajador.last_name}</td>
              <td>{trabajador.puesto}</td>
              <td>
                {/* Círculo que indica el estado del trabajador */}
                <span className={`status-indicator ${getStatusColor(trabajador.status)}`}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trabajadores;
