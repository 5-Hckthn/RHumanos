import React, { useEffect, useState } from 'react'
import { useContextValue } from '../../Context/UseContext'
import { getUserById } from '../../Server/Crud/Crud'

// user, setUser

const ModalUser = () => {
    const [OpenModal, setOpenModal] = useState(false)
    const [userData, setuserData] = useState([])
    const { user, setUser } = useContextValue()


    const obtenerDatos = async () => {
        const data = await getUserById(user)
        setuserData(data)
    }

    useEffect(() => {
        if (user) {
            obtenerDatos()
            OpenModal(true)
        }
    }, [user])

    const closeModal = () => {
        setOpenModal(false)
    }



  return (
    <div className='containerModalUser'>
        <div>Nombre</div>
        <div onClick={() => closeModal()}>X</div>
    </div>

    )}
export default ModalUser

  )
}

export default ModalUser