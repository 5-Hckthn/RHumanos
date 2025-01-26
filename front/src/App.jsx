import { useState } from 'react'
import './App.css'

import Routing from './Routes/Routing'
import SwitchGlobalColor from './Components/SwitchGlobalColor/SwitchGlobalColor';
import Buttons from './Components/Buttons/Buttons';
import ModalNotifications from './Components/ModalNotifications/ModalNotifications';
import NavPC from './Components/NavPC/NavPC';

import { useContextValue } from './Context/UseContext';



// Icons
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


// Icons




function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setUser } = useContextValue()

  // Abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const CloseModal = () => {
    setIsModalOpen(false);
  };  


  const loggout = () => {
    localStorage.removeItem('userId')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <div className="containerApp">
      <div className="containerHome">
        <div className="sideBar">
          <div className="perfil" onClick={handleOpenModal}>
            <AccountCircleIcon style={{ color: 'white', fontSize: '60px' }} />
            <div>
              <div className="nombre">Nombre</div>
            </div>
          </div>
          <div className="nav"><NavPC /></div>
          <div onClick={() => loggout()} className="logOut"><LogoutIcon/></div>
        </div>
        <div className="content">
          <div className="header">
            <div className="titulo">´´</div>
            <div className='Notificacions'><ModalNotifications /></div>
            <div className="globalColor"><SwitchGlobalColor /></div>
          </div>
          <div className="main">


            <Routing />
            {/* <div className="reportes">
              <div className="reporteSemanal"></div>
              <div className="reporteMensual"></div>
            </div>
            <div className="graficoMensual"></div>
            <div className="tableAsistencia"></div>
            <div className="donutLocalizacion"></div> */}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modalOverlay" onClick={CloseModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={CloseModal}>✖</button>
            <Buttons />
          </div>
        </div>
      )}
        
      </div>
    </>
  )
}

export default App
