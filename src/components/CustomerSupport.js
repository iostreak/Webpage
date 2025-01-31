import React from "react";
import "../CSS/CustomerSupport.css";
import support from '../Images/Other/support.png'
import Logo7 from '../Images/Other/7.png'
import chat from '../Images/Other/live chat.png'
import satisfaction from '../Images/Other/user satisfaction.png'
import Questions from '../Images/Other/Frequently_Ask_Question.png'

const CustomerSupport = () => {
  return (
    <div className="customer-support__wrapper" id="support">
        <div className="customer-support__text-container">
          <h2 className="customer-support__title">Quick and Dependable Support at IoStreak Solutions</h2>
          <p className="customer-support__description">
            Our expert technical specialists are here to address your queries
            efficiently. Count on us for prompt and reliable assistance.
          </p>
          <br></br>
        </div>
      <div className="customer-support">
        <div className="customer-support__content">
          <div className="customer-support__image-container">
            <img
              src={support}
              alt="Customer Support"
              className="customer-support__image"
            />
          </div>
        </div>

        <div className="customer-support__features">
          <div className="customer-support__feature">
            <span className="customer-support__icon"><img src={Logo7}></img></span>
            <h3 className="customer-support__feature-title">Customer Support</h3>
            <p className="customer-support__feature-description">
24/7 Assistance for Your Technical Needs</p>
          </div>

          <div className="customer-support__feature">
            <span className="customer-support__icon"><img src={chat}></img></span>
            <h3 className="customer-support__feature-title">Prompt & Friendly Response</h3>
            <p className="customer-support__feature-description">Ticket support and live chat</p>
          </div>

          <div className="customer-support__feature">
            <span className="customer-support__icon"><img src={satisfaction}></img></span>
            <h3 className="customer-support__feature-title">99% User Satisfaction</h3>
            <p className="customer-support__feature-description">Rest 1%; we are improving more</p>
          </div>

          <div className="customer-support__feature">
            <span className="customer-support__icon"><img src={Questions}></img></span>
            <h3 className="customer-support__feature-title">Technical Handling</h3>
            <p className="customer-support__feature-description">Get all technical queries solved</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default CustomerSupport;
