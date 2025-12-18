import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'
import Contact from './Contact.jsx'
import ProductDetails from './ProductDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
