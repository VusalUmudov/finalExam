import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="about-us">
          <h1>About us</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
          <p>
            Copyright ©2023 All rights reserved | This template is made with by 
           <span style={{color: 'red'}}>Colorlib</span>
          </p>
        </div>
        <div className="newsletter">
          <h1>Newsletter</h1>
          <p>Stay update with our latest</p>
          <input type="text" placeholder="Enter email" />
          <button>enter</button>
        </div>
        <div className="follow-us">
          <h1>Follow Us</h1>
          <p>Let us be social</p>
          <div className="icons">
            
          </div>
        </div>
      </div>
    </footer> 
  );
}

export default Footer;
