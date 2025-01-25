import { useContextValue } from '../../Context/UseContext'
import React from 'react'
import './index.css'

// Iconos
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
// Iconos

const SwitchGlobalColor = () => {
    const handleColorState = () => setColorStateGlobal(!colorStateGlobal)
    
    const { setColorStateGlobal, colorStateGlobal } = useContextValue()
    //////////////////////////////////
    
    document.body.style.backgroundColor = colorStateGlobal ? '#fff' : '#000000ea'
    document.body.style.color = colorStateGlobal ? '#333' : '#fff'
  return (
    <>
    <div className="containerSwitch">
      <div onClick={() => handleColorState()}>{colorStateGlobal ? <ModeNightIcon/> : <LightModeIcon />}</div>
    </div>
    
    </>
  )
}

export default SwitchGlobalColor