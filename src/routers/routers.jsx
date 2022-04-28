import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccountBidCard from '../components/AccountBidCard/AccountBidCard'
import BidModal from '../components/BidModal/BidModal'
import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import AccountPage from '../pages/AccountPage/AccountPage'

import HomePage from '../pages/HomePage/HomePage'
import ProductDetailPage from '../pages/ProductDetail/ProductDetailPage'
import ProductUpload from '../pages/ProductUploadPage/ProductUpload'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

function Routers() {
    return (
     <Routes>
        <Route path="/" element={<ProductUpload/>} />
        
     </Routes>
    )
  }
  
  export default Routers