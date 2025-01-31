import React from 'react';
import '../CSS/Footer.css'; // Import the CSS file for styling
import Logo from '../Images/Logo/logo.png';
import insta from '../Images/Logo/insta.png';
import youtube from '../Images/Logo/youtube.png';
import fb from '../Images/Logo/fb.png';
import linkedin from '../Images/Logo/linkedin.png';




const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className='footer-company-information'>
            <img src={Logo}></img>
            <p>Iostreak Solutions makes technology seamless<br></br> and stress-free for businesses worldwide.</p>
            {/* <div className='footer-company-social-media'> */} 
            <div className='footer-compay-information-social-md'>               
            <img src={linkedin}></img>
            <img src={insta}></img>
            <img src={fb}></img>
            <img src={youtube}></img>

            </div>
            {/* </div> */}
            <p>hr@iostreak.com</p>
        </div>
        <div className="footer-section">
          <h4>INDUSTRIES</h4>
          <ul>
            <li>Automotive</li>
            <li>Banking</li>
            <li>Blue Economy</li>
            <li>Capital Markets</li>
            <li>Communications</li>
            <li>Media & Technology</li>
            <li>Consumer Goods</li>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Information Services</li>
            <li>Insurance</li>
            <li>Life Sciences</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SERVICES</h4>
          <ul>
            <li>Application Services</li>
            <li>Artificial Intelligence</li>
            <li>Business Process Services</li>
            <li>Cloud Solutions</li>
            <li>Core Modernization</li>
            <li>Digital Strategy</li>
            <li>Enterprise Platform Services</li>
            <li>Experience</li>
            <li>Infrastructure Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>RESEARCH</h4>
          <ul>
            <li>Deep Green</li>
            <li>Future-Ready Cities</li>
            <li>Gen At New Work</li>
            <li>New World</li>
            <li>The Future Of Us</li>
            <li>The Future-Ready</li>
            <li>Business Benchmark</li>
            <li>The Metaverse</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Knowledge Base</li>
            <li>Icebreak Reviews</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Iostreak Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;