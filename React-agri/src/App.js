import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
// import Product from './Pages/Product';
import Pro from './Pages/Pro';

import Payment from './Pages/Payment';
import Footer from './Components/Footer/footer';
import Contact from './Pages/Contact'; 
import About from './Components/About/About';
import Product from './Pages/Product';
import Profile from './Pages/Profile'
import CreateProduct from './Pages/CreateProduct';
import SearchPage from './Components/SearchPage/SearchPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/listings/:id" element={<Product/>}/>
          <Route path="/profiles/:id" element={<Profile/>}/>
          <Route path="/listings/new" element={<CreateProduct/>}/>
          <Route path="/search" element={<SearchPage/>} />

          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/LoginSignup" element={<LoginSignup/>}/>
          <Route path="/Product" element={<Pro/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Contact" element={<Contact/>}/> 
          <Route path="/About" element={<About/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;