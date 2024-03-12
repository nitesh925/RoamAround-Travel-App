import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Receive your information</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>Roam Around Travels</span>
            </h1>
            <p>
            Discover unbeatable savings of at least 25% on accommodations worldwide, spanning from tranquil retreats to exhilarating off-grid experiences. Explore our wide array of stays and seize the opportunity to save big on your next adventure.
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="search your location" />
            </div>

            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            <button onClick={() => setModal(true)}>book now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
