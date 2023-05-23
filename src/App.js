import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Product from './components/Product'
import SingleProducts from './components/SingleProducts'

import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar />
      <WhatsAppButton/>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<SingleProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
