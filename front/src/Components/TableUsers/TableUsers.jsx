import React, { useEffect, useState } from 'react'
import { getUsersCrud } from '../../Server/Crud/Crud'
import ModalUser from '../ModalUser/ModalUser';

import { ContextProvider, useContextValue } from '../../Context/UseContext';
import './index.css'

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
// Icons

const TableUsers = () => {
  const [usersData, setUsersData] = useState([])
  const { userId, setUserId } = useContextValue()
  const [OpenModal, setOpenModal] = useState(false)


  ////////////////////////////////////////////////////



  const getIdUser = async (id) => {
    setUserId(id)
    console.log(id);
  }

  useEffect(() => {
    if (userId) {
      setOpenModal(true)
    } else {
      setOpenModal(false)
    }
  }, [userId])

  const obtenerUsuarios = async () => {
    const data = await getUsersCrud()
        
    setUsersData(data)
  }


  useEffect(() => {
    obtenerUsuarios()
    // l
  }, [])
    
  return (
    <>
      <div className="containerUsers">
        <div className="usersHeader">
          {/*  */}
        </div>

        <div className="containerTableUsers">
          {usersData.map((user, index) => (
            <div className='rowUser' key={index}>
              <div className="rowUserId">{user.users_id}</div>
              <div className="rowUserName">{user.name}</div>
              <div className="rowUserMail">{user.mail}</div>
              <div className="rowUserPassword">{user.password}</div>
              <div className="rowUserRol">{user.rol}</div>
              <div className="settingsUser" onClick={() => getIdUser(user.users_id)}><MoreVertIcon className='MoreVertIcon'/></div>
            </div>
          ))}
        </div>
      </div>


      {OpenModal ? 
        <ModalUser/> : 
        
        console.log('ahora está en false') 
      }
    </>
  )
}

export default TableUsers