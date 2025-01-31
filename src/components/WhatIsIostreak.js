import React from "react";
import "../CSS/WhatIsIostreak.css";
import iostreakLogo from '../Images/Logo/Group 16675.png';

const WhatIsIostreak = () => {
  return (
    <section className="iostreak-section" >
      <div className="iostreak-content" id="industry">
        <div className="iostreak-title">
          <span>What is IOSTREAK?</span>
        </div>
        <p className="iostreak-text">
        IoStreak Solutions is a technology firm specializing in web development, AI solutions, cybersecurity, and IT consultancy. We offer custom digital services like web applications, penetration testing (VAPT), and business automation to enhance efficiency, security, and scalability for organizations, enabling them to thrive in the digital age.
        </p>
      </div>
      <div className="iostreak-logo-container">
        <img src={iostreakLogo} alt="Iostreak Logo" className="iostreak-logo" />
      </div>
    </section>
  );
};

export default WhatIsIostreak;
