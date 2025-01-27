import React, { useState } from 'react';
import '../CSS/InnovationSection.css';
import poster from '../Images/Flags/poster.png'

const InnovationSection = () => {
  // const[addTalk, setaddTalk]=useState();
  const addTalk=()=>{
    console.log("hello");
  }
  const pricing =() =>{
    console.log("click pricing");
  }
  return (

    <section className="innovation-section">
      <div className="text-container">
        <h1 className="headline">Innovative IT Solutions for a Digital Tomorrow</h1>
        <p className="description">
          Transforming businesses with cutting-edge technology and future-ready strategies.
        </p>
        <div className="button-container">
          <button className="talk-btn" onClick={addTalk}>Let's Talk</button>
          <button className="pricing-btn" onClick={pricing}>View Pricing</button>
        </div>
      </div>
      <div className="image-container">
        <img 
          src={poster} 
          alt="Innovation Section" 
          className="section-image"
        />
         <div className="ellipse"></div>
      </div>
    </section>
  );
};

export default InnovationSection;
