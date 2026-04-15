import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navbar'
import Faq from './faq'
import Collections from './collection'
import About from './about'
import Contact from './contact'
import Products from './Products'
import Home from './home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Categories from './productsCategory'
import ProductDetails from './productDetails'
import { SearchProvider } from './search'
import AuthPage from './register'
import Cart from './cart'
import { CartProvider } from './CarrtContext'
import Checkout from './checkout'
import Success from './success'
import Footer from './footer'

function App() {
 return(
   <>
   <SearchProvider>
    <CartProvider>
      
       <Navbar/>
   <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Collections/>} path='/collection'/>
    <Route element={<Products/>} path='/products'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<Faq/>} path='/faq'/>
    <Route element={<Categories/>} path='/products/:categorie'/>
    <Route element={<ProductDetails/>} path='/product/:productId'/>
    <Route element={<ProductDetails/>} path='/collection/:categoryId'/>
    <Route element={<AuthPage/>} path='/authPage'/>
    <Route element={<Cart/>} path='/cart'/>
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/success" element={<Success />} />
   </Routes>
    </CartProvider>
   </SearchProvider>
 <Footer/>
   </>
 )
 }
export default App
