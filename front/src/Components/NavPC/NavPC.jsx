import { useNavigate } from 'react-router-dom'
import './index.css'


// Icons 
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
// Icons

// Context
import { useContextValue } from '../../Context/UseContext';
// Context



const NavPC = () => {
    const Navigation = useNavigate()

    const meter1LG = () => {
        localStorage.setItem('userId', 1)
    }

    const { userId } = useContextValue()


  return (
      <>
        <nav className='NavPC'>
          <div onClick={() => Navigation('/home')}><HomeIcon style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/asistencia')}><AppRegistrationIcon style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/justificacion')}><DriveFileRenameOutlineIcon style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/crud')}><FolderSharedIcon style={{fontSize: 40}}/></div>
          <div onClick={() => meter1LG()}>meterPrueba</div>
        </nav>
      </>
  )
}

export default NavPC