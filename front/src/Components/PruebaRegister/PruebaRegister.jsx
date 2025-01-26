import React, { useState, useEffect } from 'react';
import { postUsers } from '../../Server/Users/Users';
import { fetchRoles, fetchPuestos } from '../../Server/Options/Options';
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

  const [roles, setRoles] = useState([]);
  const [puestos, setPuestos] = useState([]);
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    const { name, lastName, email, password, cedula, phone, rol, puesto } = formData;

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    if (!password.trim()) newErrors.password = 'Password is required.';
    if (!rol) newErrors.rol = 'Role is required.';
    if (!puesto) newErrors.puesto = 'Puesto is required.';
    if (!cedula.match(/^\d{8,10}$/)) newErrors.cedula = 'Cedula must be 8-10 digits.';
    if (!phone.match(/^\d{8}$/)) newErrors.phone = 'Phone must be exactly 8 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      registrarUsuario();
    }
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
    setErrors({});
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
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
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
        {errors.rol && <p style={{ color: 'red' }}>{errors.rol}</p>}
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
        {errors.puesto && <p style={{ color: 'red' }}>{errors.puesto}</p>}
        <input
          type="text"
          name="cedula"
          placeholder="Cedula"
          value={formData.cedula}
          onChange={handleInputChange}
          className="input"
        />
        {errors.cedula && <p style={{ color: 'red' }}>{errors.cedula}</p>}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="input"
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        <button type="submit">Registrar User</button>
      </form>
    </div>
  );
};

export default FormularioRegister;
