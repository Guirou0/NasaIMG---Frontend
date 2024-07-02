import { useState, useEffect, createContext } from 'react'
import './App.css'
import Navbar from '../componentes/navbar.jsx'
import Stars from '../componentes/stars.jsx'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
       <Stars />
       <img className='moonImg' src='src/assets/moon.png' alt='Lua'/>
       <Navbar />
       <Outlet />
    </>
  )
}

export default App
