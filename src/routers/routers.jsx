import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from '../components/Card/Card'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

function Routers() {
    return (
     <Routes>
        <Route path="/" element={<Card/>} />
        
     </Routes>
    )
  }
  
  export default Routers