import React, { useState, useEffect } from 'react';
import { postUsers } from '../../Server/Users/Users';
import { fetchRoles, fetchPuestos } from '../../Server/Options/Options';
import './PruebaRegister.css';

const FormularioRegister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roles: '',
    puesto: '',
    cedula: '',
    phone_number: '',
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
    const { first_name, last_name, email, password, cedula, phone_number, roles, puesto } = formData;

    if (!first_name.trim()) newErrors.first_name = 'First name is required.';
    if (!last_name.trim()) newErrors.last_name = 'Last name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    if (!password.trim()) newErrors.password = 'Password is required.';
    if (!roles) newErrors.roles = 'Role is required.';
    if (!puesto) newErrors.puesto = 'Puesto is required.';
    if (!cedula.match(/^\d{8,10}$/)) newErrors.cedula = 'Cedula must be 8-10 digits.';
    if (!phone_number.match(/^\d{8}$/)) newErrors.phone_number = 'Phone must be exactly 8 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      registrarUsuario();
    }
  };

  const registrarUsuario = async () => {
    try {
      const dataToPost = {
        ...formData,
        roles: parseInt(formData.roles, 10),
        puesto: parseInt(formData.puesto, 10),
      };

      await postUsers(dataToPost);
      console.log('Usuario registrado:', dataToPost);
      vaciarInputs();
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const vaciarInputs = () => {
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      roles: '',
      puesto: '',
      cedula: '',
      phone_number: '',
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
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name}</p>}

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name}</p>}

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
          name="roles"
          value={formData.roles}
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
        {errors.roles && <p style={{ color: 'red' }}>{errors.roles}</p>}

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
          className="inputRegister"
        />
        {errors.cedula && <p style={{ color: 'red' }}>{errors.cedula}</p>}

        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleInputChange}
          className="inputRegister"
        />
        {errors.phone_number && <p style={{ color: 'red' }}>{errors.phone_number}</p>}

        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
};

export default FormularioRegister;
