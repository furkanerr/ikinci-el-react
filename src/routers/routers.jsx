import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'

function Routers() {
    return (
     <Routes>
        <Route path="/" element={<SignIn/>} />
        
     </Routes>
    )
  }
  
  export default Routers