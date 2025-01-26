import React, { useEffect, useState } from 'react'
import { ContextProvider, useContextValue } from '../../Context/UseContext'
import { getUserById } from '../../Server/Crud/Crud';
import './index.css'

const ModalUser = () => {
    const { userId, setUserId } = useContextValue()
    const [userById, setuserById] = useState([])

    useEffect(() => {
        if (userId) {
            obtainInfoById()
        } else {    
        }
    }, [userId])

    const cerrarModal = () => {
        setUserId(null)
    }


    const obtainInfoById = async () => {
      const data = await getUserById(userId)
      console.log(userId, data);
      setuserById(data)
    }

    return (
        <div className='containerModalUser'>
            <div>Nombre</div>
            <div onClick={() => closeModal()}>X</div>
        </div>
    )
}

export default ModalUser;
  return (
    <>
        <div className="containerModalUser">
            <div className="modalUser">
                <div>{userById.name}</div>
                <div className='containerXtoCloseModal' onClick={() => cerrarModal()}><div className='X'>X</div></div>
                
            </div>
        </div>
    </>
  )
}

export default ModalUser
