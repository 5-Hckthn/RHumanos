import React, { useState } from 'react';
import './index.css';
import SwitchGlobalColor from '../../Components/SwitchGlobalColor/SwitchGlobalColor';
import Buttons from '../../Components/Buttons/Buttons';

import { useContextValue } from '../../Context/UseContext';

// Icons
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Icons

import NavPC from '../../Components/NavPC/NavPC';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const loggout = () => {
    localStorage.removeItem('userId')
    setUserId(null)
  }

  const { setUserId } = useContextValue()
  
  return (
    <>
      <div className="containerHome">
        <div className="sideBar">
          <div className="perfil" onClick={handleOpenModal}>
            <AccountCircleIcon style={{ color: 'white', fontSize: '60px' }} />
            <div>
              <div className="nombre">Nombre</div>
            </div>
          </div>
          <div className="nav"><NavPC /></div>
<<<<<<< HEAD
          <div onClick={() => loggout()} className="logOut"><LogoutIcon/></div>
=======
          <div className="logOut"><LogoutIcon /></div>
>>>>>>> 4d4d525207e1df016e71a4c440983437eea83c35
        </div>
        <div className="content">
          <div className="header">
            <div className="titulo">Rec. Humanos</div>
            <div className="notificaciones">Not.</div>
            <div className="globalColor"><SwitchGlobalColor /></div>
          </div>
          <div className="main">
            <div className="reportes">
              <div className="reporteSemanal"></div>
              <div className="reporteMensual"></div>
            </div>
            <div className="graficoMensual"></div>
            <div className="tableAsistencia"></div>
            <div className="donutLocalizacion"></div>
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
    </>
  );
};

export default Home;
