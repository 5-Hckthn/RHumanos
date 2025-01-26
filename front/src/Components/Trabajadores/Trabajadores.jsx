import React, { useEffect, useState } from "react";
import { getUsersCrud, getAllPuestos } from "../../Server/Crud/Crud.jsx";
import "../Trabajadores/Trabajadores.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Trabajadores = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [puestos, setPuestos] = useState({});

  // Consider adding error handling to improve the user experience if the API call fails.
  const fetchTrabajadores = async () => {
    const response = await getUsersCrud();
    setTrabajadores(response);
  };

  // Optimize by memoizing the reduce function to improve performance if response contains many entries.
  const fetchPuestos = async () => {
    const response = await getAllPuestos();
    const puestosMap = response.reduce((acc, puesto) => {
      acc[puesto.puesto_ID] = puesto.puesto_name;
      return acc;
    }, {});
    setPuestos(puestosMap);
  };

  // Ensure API calls are properly cleaned up if the component unmounts during fetching.
  useEffect(() => {
    fetchTrabajadores();
    fetchPuestos();
  }, []);

  return (
    <div className="table-container-trabajadores">
      {trabajadores.map((trabajador) => (
        <div key={trabajador.id} className="row-trabajador-trabajadores">
          <div className="avatar-container-trabajadores">
            {/* Consider using a placeholder image from a URL instead of a relative path for better reliability. */}
            <AccountCircleIcon style={{ color: 'black', fontSize: '60px' }} />
          </div>
          <div className="info-container-trabajadores">
            {/* Use a fallback for missing names to avoid rendering incomplete information. */}
            <div className="name-trabajador-trabajadores">
              {trabajador.first_name || "Nombre desconocido"} {trabajador.last_name || ""}
            </div>
            <div className="position-trabajador-trabajadores">
              {trabajador.cedula || "Cargando puesto..."} | {puestos[trabajador.puesto] || "Cargando puesto..."}
            </div>
            
          </div>
          🟢
        </div>
      ))}
    </div>
  );
};

export default Trabajadores;
