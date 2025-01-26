import React, { useState } from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import './index.css'

const ModalNotifications = () => {
    const [OpenModal, setOpenModal] = useState(false)
    const [OpenModalIndividual, setOpenModalIndividual] = useState(false)

    const abrirModalNotification = () => {
        setOpenModal(true)
    }

    const cerrarModalNotification = () => {
        setOpenModal(false)
    }




  return (
    <>
        <div onClick={() => abrirModalNotification()} className="notificaciones"><NotificationsActiveIcon/></div>
        {OpenModal ? 
            <div className="containerModalUser">
                <div className="modalUser">
                    <div onClick={() => cerrarModalNotification()} className="x">X</div>
                </div>
            </div>
            : null
        }
    </>
  )
}

export default ModalNotifications