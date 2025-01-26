import React, { useEffect, useState } from 'react'
import { useContextValue } from '../../Context/UseContext'
import { getUserById } from '../../Server/Crud/Crud';
import './index.css'

const ModalUser = () => {

    const { user, setUser } = useContextValue()
    const [userById, setuserById] = useState([])
    const [openModal,setOpenModal] = useState(false)

    useEffect(() => {
        if (user) {
            obtainInfoById()
            setOpenModal(true)
        }
    }, [user])

    const cerrarModal = () => {
        setUser(null)
        setOpenModal(false)
    }

    const obtainInfoById = async () => {
      const data = await getUserById(user)
      console.log(user, data);
      setuserById(data)
    }

  return (
    <>
        <div className="containerModalUser">
            <div className="modalUser">
                <div>{userById.email}</div>
                <div className='containerXtoCloseModal' onClick={() => cerrarModal()}><div className='X'>X</div></div>
            </div>
        </div>
    </>
  )
}

export default ModalUser