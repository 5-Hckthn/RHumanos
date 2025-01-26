import React, { useState, useEffect } from 'react';
import { getUsersCrud } from '../../Server/Crud/Crud';
import './Perfil.css'; // Import CSS file for styling

function Perfil() {
  const [users, setUsers] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const data = await getUsersCrud(1);
      setUsers(data);
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Perfil</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <div className="user-detail">
              <span className="label">ID:</span> {user.users_id}
            </div>
            <div className="user-detail">
              <span className="label">Nombre:</span> {user.first_name}
            </div>
            <div className="user-detail">
              <span className="label">Apellido:</span> {user.last_name}
            </div>
            <div className="user-detail">
              <span className="label">Email:</span> {user.email}
            </div>
            <div className="user-detail">
              <span className="label">Rol:</span> {user.roles}
            </div>
            <div className="user-detail">
              <span className="label">Puesto:</span> {user.puesto}
            </div>
            <div className="user-detail">
              <span className="label">Cédula:</span> {user.cedula}
            </div>
            <div className="user-detail">
              <span className="label">Teléfono:</span> {user.phone_number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perfil;
