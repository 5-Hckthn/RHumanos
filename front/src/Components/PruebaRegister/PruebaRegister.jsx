import React, { useState } from 'react'
import { postUsers } from '../../Server/Users/Users'

const FormularioRegister = () => {

    const [Name, setName] = useState()
    const [Mail, setMail] = useState()
    const [Password, setPassword] = useState()
    const [Rol, setRol] = useState()

    const vaciarInputs = async () => {
      setName('')
      setMail('')
      setPassword('')
      setRol('')
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      registrarUsuario();
    }

  const registrarUsuario = async (e) => {
    const newUser = {
      name: Name,
      mail: Mail,
      password: Password,
      rol: Rol
    }

    postUsers(newUser)
    console.log(newUser);
    
  }

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const form = e.target.form;
        const index = Array.from(form).indexOf(e.target);
        const nextInput = form.elements[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    };

  return (
    <div>
        <form>
          <input autoFocus onKeyDown={handleKeyDown} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input onKeyDown={handleKeyDown} type="text" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
          <input onKeyDown={handleKeyDown} type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input onKeyDown={handleKeyDown} type="text" placeholder="Rol" onChange={(e) => setRol(e.target.value)} />
          <button type="submit" onClick={(e) => handleSubmit(e)}>Registrar User</button>
        </form>
    </div>
  )
}

export default FormularioRegister