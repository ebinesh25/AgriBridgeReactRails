import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setMenu]=useState("Home")
  return (
    
    <div className='navbar'>
      <div className='nav-logo'>
        <img className="logo" src={logo} alt='logo'/>
        <p>Agribridge</p>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:"none"}} to ="/">SHOP</Link>{(menu==="Home")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Orders")}}><Link style={{textDecoration:"none"}} to ="/cart">ORDERS</Link>{(menu==="Orders")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("About")}}><Link style={{textDecoration:"none"}} to ="/About">ABOUT</Link>{menu==="About"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration:"none"}} to ="/Contact">CONTACT US</Link>{menu==="Contact"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{textDecoration:"none"}} to="/LoginSignup"><button>Login</button></Link>
          <Link to ="/Cart"><img className="cart_image" src={cart_icon} alt="cart" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
export default Navbar;