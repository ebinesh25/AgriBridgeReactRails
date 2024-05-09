import React from 'react';
import './About.css';
import logo from '../Assests/logo.png'

const About = () => {
    return (
        <div className="about-container">
          <img className="aboutuslogo" src={logo} alt='logo'/>
            <h1 class="abouth1">About Agribridge...</h1><br/><br/><br/>
            <div className='aboutp'>
            <p>Founded in 2024, Agribridge has been dedicated to bridging the gap between farmers and buyers. Our mission is to provide a platform where agricultural waste products can be sold, reducing waste and creating new opportunities for income.</p>
            <p>At Agribridge, we believe in the power of sustainable farming and the importance of reducing waste. By selling agricultural waste products, we help farmers earn extra income while providing buyers with valuable resources.</p>
            <p>We are committed to creating a sustainable future for farming and helping to build a world where no resources go to waste. Join us in our mission to bridge the gap and create a better future for farmers and buyers alike.</p>
            </div>
        </div>
    );
};

export default About;