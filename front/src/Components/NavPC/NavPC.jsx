
import { useNavigate } from 'react-router-dom'
import './index.css'

// Icons 
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// Icons



const NavPC = () => {
    const Navigation = useNavigate()


  return (
      <>
        <nav className='NavPC'>
          <div onClick={() => Navigation('/home')}><HomeIcon    style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/asistencia')}><AppRegistrationIcon   style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/justificacion')}><DriveFileRenameOutlineIcon style={{fontSize: 40}}/></div>
          <div onClick={() => Navigation('/crud')}>Crud</div>
        </nav>
      </>
  )
}

export default NavPC