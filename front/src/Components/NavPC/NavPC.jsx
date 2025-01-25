
import { useNavigate } from 'react-router-dom'
import './index.css'

// Icons 
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// Icons



const NavPC = () => {
    const Navigation = useNavigate()


  return (
      <>
        <nav className='NavPC'>
          <div onClick={() => Navigation('/home')}><HomeIcon/></div>
          <div onClick={() => Navigation('/asistencia')}><AppRegistrationIcon/></div>
          <div onClick={() => Navigation('/justificacion')}>Just</div>
          <div onClick={() => Navigation('/crud')}>Crud</div>
        </nav>
      </>
  )
}

export default NavPC