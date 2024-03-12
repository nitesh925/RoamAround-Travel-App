import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerLogo.png";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91 9040555925</p>
          <p>niteshdevarsetty@gmail.com</p>
          <a href="https://web.facebook.com/nitesh925/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/d-nitesh-kumar-0401b0249/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/nitesh925">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
             Roam Around <span>Travels</span><br></br>
             &copy; 2024 Devarsetty Nitesh Kumar. All rights reserved.
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
           
         
      
          </p>
          

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
