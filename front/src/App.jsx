import { useState } from 'react'
import NavPC from './Components/NavPC/NavPC'
import './Routes/Routing'
import './App.css'
import Routing from './Routes/Routing'

function App() {

  return (
    <>
      <div className="containerApp">
        <NavPC />
        <Routing />
      </div>
    </>
  )
}

export default App
