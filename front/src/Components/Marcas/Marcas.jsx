// import React, { useEffect, useState } from "react";

// const Marcas = () => {
//   const [jornadas, setJornadas] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Cambia la URL a la de tu API
//     fetch("http://127.0.0.1:8000/jornadas/")
//       .then((response) => response.json())
//       .then((data) => {
//         setJornadas(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Cargando datos...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Horarios de Jornadas</h1>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">Jornada ID</th>
//             <th className="border border-gray-300 px-4 py-2">Estado</th>
//             <th className="border border-gray-300 px-4 py-2">Fecha</th>
//             <th className="border border-gray-300 px-4 py-2">Hora Inicio</th>
//             <th className="border border-gray-300 px-4 py-2">Hora Salida</th>
//             <th className="border border-gray-300 px-4 py-2">Justificación ID</th>
//             <th className="border border-gray-300 px-4 py-2">Usuario ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jornadas.map((jornada) => (
//             <tr key={jornada.jornada_ID}>
//               <td className="border border-gray-300 px-4 py-2">{jornada.jornada_ID}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.estado}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.fecha}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.hora_inicio}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.hora_salida}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.justificacion_id || "N/A"}</td>
//               <td className="border border-gray-300 px-4 py-2">{jornada.usuario_id}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Marcas;
import React, { useEffect, useState } from "react";
import "./Marcas.css";

const Marcas = () => {
  const [jornadas, setJornadas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/jornadas/")
      .then((response) => response.json())
      .then((data) => {
        setJornadas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="container">
      <h1>Horarios de Jornadas</h1>
      <table>
        <thead>
          <tr>
            <th>Jornada ID</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Hora Inicio</th>
            <th>Hora Salida</th>
            <th>Justificación ID</th>
            <th>Cedula</th>
          </tr>
        </thead>
        <tbody>
          {jornadas.map((jornada) => (
            <tr key={jornada.jornada_ID}>
              <td>{jornada.jornada_ID}</td>
              <td>{jornada.estado}</td>
              <td>{jornada.fecha}</td>
              <td>{jornada.hora_inicio}</td>
              <td>{jornada.hora_salida}</td>
              <td>{jornada.justificacion_id || "N/A"}</td>
              <td>{jornada.cedula}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marcas;
