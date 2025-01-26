import React, { useState, useEffect } from 'react';
import { postUsers } from '../../Server/Users/Users';
import { fetchRoles, fetchPuestos } from '../../Server/Options/Options'; // Funciones para obtener datos
import './PruebaRegister.css';

const FormularioRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    rol: '',
    puesto: '',
    cedula: '',
    phone: '',
  });

  const [roles, setRoles] = useState([]); // Opciones para el dropdown de roles
  const [puestos, setPuestos] = useState([]); // Opciones para el dropdown de puestos

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const rolesData = await fetchRoles();
        const puestosData = await fetchPuestos();
        setRoles(rolesData);
        setPuestos(puestosData);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarUsuario();
  };

  const registrarUsuario = async () => {
    try {
      await postUsers(formData);
      console.log('Usuario registrado:', formData);
      vaciarInputs();
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const vaciarInputs = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      password: '',
      rol: '',
      puesto: '',
      cedula: '',
      phone: '',
    });
  };

  return (
    <div className="containerRegister">
      <h1 className="titleRegister">Registro de Usuario</h1>
      <form className="formRegister" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="inputRegister"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="inputRegister"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputRegister"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="inputRegister"
        />
        <select
          name="rol"
          value={formData.rol}
          onChange={handleInputChange}
          className="selectRegister"
        >
          <option value="" disabled>
            Select Role
          </option>
          {roles.map((role) => (
            <option key={role.role_ID} value={role.role_ID}>
              {role.role_name}
            </option>
          ))}
        </select>
        <select
          name="puesto"
          value={formData.puesto}
          onChange={handleInputChange}
          className="selectRegister"
        >
          <option value="" disabled>
            Select Puesto
          </option>
          {puestos.map((puesto) => (
            <option key={puesto.puesto_ID} value={puesto.puesto_ID}>
              {puesto.puesto_name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="cedula"
          placeholder="Cedula"
          value={formData.cedula}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="input"
        />
        <button type="submit" className="buttonRegister">
          Registrar User
        </button>
      </form>
    </div>
  );
};

export default FormularioRegister;
