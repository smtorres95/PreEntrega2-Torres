import React from 'react'

import { Routes, Route } from "react-router-dom"
import About from '../About/About'
import Cart from '../Cart/Cart'

const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        
    </Routes>
  )
}

export default AppRoutes