import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BidModal from '../components/BidModal/BidModal'
import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'

import HomePage from '../pages/HomePage/HomePage'
import ProductDetailPage from '../pages/ProductDetail/ProductDetailPage'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

function Routers() {
    return (
     <Routes>
        <Route path="/" element={<ProductDetailPage/>} />
        
     </Routes>
    )
  }
  
  export default Routers