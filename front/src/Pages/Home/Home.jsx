import React from 'react'
import './index.css'
import SwitchGlobalColor from '../../Components/SwitchGlobalColor/SwitchGlobalColor'
import Notificaciones from '../../Components/Notificaciones/Notificaciones';

// Icons
import LogoutIcon from '@mui/icons-material/Logout';
// Icons

import NavPC from '../../Components/NavPC/NavPC'
const Home = () => {

  return (
    <>
      <div className="containerHome">
        <div className="sideBar">
          <div className="perfil"></div>
          <div className="nav"><NavPC /></div>
          <div className="logOut"><LogoutIcon/></div>
        </div>
        <div className="content">
          <div className="header">
            <div className="titulo">Rec. Humanos</div>
            <div className="notificaciones"><Notificaciones/></div>
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
    </> 
  )
}

export default Home