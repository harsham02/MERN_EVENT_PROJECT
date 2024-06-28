import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
    <div className="banner">
        <div className="title">
            <h1>PartyZen</h1>
            <p>Events and Weddings</p>
        </div>
        <div className="social-icons">
        <a href=""><FaFacebook/></a>
        <a href="https://www.instagram.com/harsha__m_"><FaInstagram/></a>
        <a href=""><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/harshavardhana-m-88b9361a0"><FaLinkedin/></a>
        <a href="https://github.com/harsham02"><FaGithub/></a>
        </div>
        <p className='copyright'> &copy; 2024 PartyZen. All rights reserved. </p>
    </div>
    </footer>
  )
}

export default Footer
