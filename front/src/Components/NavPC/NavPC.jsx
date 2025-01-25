import { useContextValue } from '../../Context/UseContext'
import { useNavigate } from 'react-router-dom'
import './index.css'

// Iconos
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
// Iconos

const NavPC = () => {
    const Navigation = useNavigate()
    const { setColorStateGlobal, colorStateGlobal } = useContextValue()
    const handleColorState = () => setColorStateGlobal(!colorStateGlobal)
    document.body.style.backgroundColor = colorStateGlobal ? '#08082d' : '#fff'
    document.body.style.color = colorStateGlobal ? '#fff' : '#333'

  return (
      <nav className='NavPC'>
          <div onClick={() => Navigation('/home')}>Home</div>
          <div onClick={() => Navigation('/crud')}>Crud</div>
          <div onClick={() => Navigation('/register')}>Register</div>
          <div onClick={() => handleColorState()}>{colorStateGlobal ? <ModeNightIcon/> : <LightModeIcon />}</div>
      </nav>
  )
}

export default NavPC