/** Dependencies */
import React from 'react'
import { Route, Routes } from 'react-router-dom'

/** Components  */
const AccountPage = React.lazy(()=>import('../pages/AccountPage/AccountPage'))
const HomePage = React.lazy(() => import( '../pages/HomePage/HomePage') )
const ProductDetailPage = React.lazy(() => import ('../pages/ProductDetail/ProductDetailPage')) 
const ProductUpload = React.lazy( ()=> import ('../pages/ProductUploadPage/ProductUpload')) 
const SignIn = React.lazy(()=> import('../pages/SignIn/SignIn')) 
const SignUp = React.lazy(()=> import('../pages/SignUp/SignUp')) 
const ProtectedRoute = React.lazy(()=> import('./protectedRoutes')) 

function Routers() {
    return (
<React.Suspense fallback={<div>Loading...</div>}>
     <Routes>
         
        <Route path="/" element={<HomePage/>} />
        

        <Route path="/account" element={
            <ProtectedRoute>
        <AccountPage/>
            </ProtectedRoute>
        } />
         <Route path="/signin" element={<SignIn/>} />
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/productdetail/:id" element={<ProductDetailPage/>} />
         <Route path="/productupload" element={
          <ProtectedRoute>
         <ProductUpload/>
         </ProtectedRoute>
         } />
         <Route path="/:category" element={<HomePage/>} />
        
     </Routes>
      
     </React.Suspense>
    )
  }
  
  export default Routers