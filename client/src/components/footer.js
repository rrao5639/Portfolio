import React from 'react';
import { Link } from "react-scroll";
import './footer.css';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-logo">PORTFOLIO</h1>
          <h6>Let's work together</h6>
          <p><a href="mailto:Rrahul5223u@gmail.com" className='contact-me'>Rrahul5223u@gmail.com</a></p>
        
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul >
            <li className='links'><Link to="home">Home</Link></li>
            <li className='links'><Link to="About">About</Link></li>
            <li className='links'><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className='line-container'>  <div className="line" /></div>
      
      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/rahul-undefined-910a332a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><BsLinkedin color="blue" size={30} className="ms-2" /></a>
                        <a href="https://github.com/Rahulrs7" target="blank"><BsGithub color="black" size={30} className="ms-2" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100025757291599" target="blank"><BsFacebook color="blue" size={30} className="ms-2" /></a>
                        <a href="https://www.instagram.com/rahul_sr.24?igsh=MXA3a3FpZG9nbDd0bA==" target="blank"><BsInstagram color="black" size={30} className="ms-2" /></a>
                      </h6>
        &copy; {new Date().getFullYear()} PORTFOLIO | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
