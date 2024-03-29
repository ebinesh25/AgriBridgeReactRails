import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-class">
        <div className="foot-line">
          <div className="footer-left">
            <h1>AgriBridge</h1>
            <p>Boost your production with us.</p>
          </div>
          <div className="footer-right">
            <div className="listed">
              <h4>Startup</h4>
              <p><Link className='l' to="/">Home</Link></p>
              <p><Link className='l' to="/contact">About us</Link></p>
              <p><Link className='l' to="/contact">Contact us</Link></p>
            </div>
            <div className="listed">
              <h4>Support</h4>
              <p><Link className='l' to="/contact">FAQ</Link></p>
              <p><Link className='l' to="/slog">slog</Link></p>
              <p><Link className='l' to="/contact">Support</Link></p>
            </div>
            <div className="listed">
              <h4>Info</h4>
              <p><Link className='l' to="/contact">Contact us</Link></p>
              <p><Link className='l' to="/privacy">Privacy policies</Link></p>
              <p><Link className='l' to="/terms">Terms and Conditions</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;