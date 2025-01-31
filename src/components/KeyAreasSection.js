import React from "react";
import '../CSS/KeyAreasSection.css';
import logo1 from '../Images/Logo/Description/Group 16691.png';
import logo2 from '../Images/Logo/Description/Group 16690.png';
import logo3 from '../Images/Logo/Description/Group 16689.png';
import logo4 from '../Images/Logo/Description/Group 16701.png';
import logo5 from '../Images/Logo/Description/Group 16700.png';
import logo6 from '../Images/Logo/Description/Group 16702.png';



const keyAreas = [
  { 
    title: "AI and Technology", 
    description: "Navigating the evolving tech landscape is challenging. With trends constantly shifting, we help businesses adopt AI-driven solutions for digital transformation.", 
    link: "#", 
    logo: logo1 
  },
  { 
    title: "Web Application Development", 
    description: "We develop high-performance web applications using modern frameworks like React, Django, and Express, ensuring seamless user experiences and scalable architecture.", 
    link: "#", 
    logo: logo2 
  },
  { 
    title: "Cybersecurity & VAPT Services", 
    description: "Safeguard your business with advanced security solutions, including penetration testing, compliance audits, and risk assessments to protect digital assets.", 
    link: "#", 
    logo: logo3 
  },
  { 
    title: "IT Consultancy & Enterprise Solutions", 
    description: "Optimize operations with tailored IT solutions, including payroll management, ERP systems, and accounting software to enhance business efficiency.", 
    link: "#", 
    logo: logo4 
  },
  { 
    title: "EdTech & E-Commerce Solutions", 
    description: "Empower learning and online business with secure EdTech platforms, e-commerce solutions, and seamless payment gateway integrations.", 
    link: "#", 
    logo: logo5 
  },
  { 
    title: "Transformation", 
    description: "Change creates opportunities. We help businesses harness innovation and adapt to market shifts with strategic digital transformation solutions.", 
    link: "#", 
    logo: logo6 
  }
];


const KeyAreasSection = () => {
  return (
    <div className="key-areas-unique-container" id="services">
      <div className="key-areas-unique-content">
        <h2 className="key-areas-unique-title">Discover our perspectives across key areas</h2>
        <p className="key-areas-unique-description">
          Explore our perspectives across key areas of technology and innovation. Stay informed with expert-driven solutions and strategies.
        </p>
        <div className="key-areas-unique-grid">
          {keyAreas.map((area, index) => (
            <div key={index} className="key-areas-unique-item">
              <img src={area.logo} alt={area.title} className="key-areas-unique-logo" />
<br></br>
              <h3 className="key-areas-unique-heading">{area.title}</h3>
              <p className="key-areas-unique-text">{area.description}</p>
              <a href={area.link} className="key-areas-unique-link">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyAreasSection;
