import React from "react";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import block1 from "../../images/hblock.png";
import block2 from "../../images/hblock1.png";
import go from "../../images/louch.webm";
import "./hero.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="hero--title"
          >
            <h4>Explore The World</h4>
            <h1>Study abroad with our help</h1>
            <p>
              Study at the world's top universities and expand your horizons.
              Get the highest quality education and achieve success abroad.
            </p>
          </div>
          <div className="hero--image">
            <div>
              <img data-aos="zoom-in" src={one} alt="" className="one" />
              <img data-aos="zoom-in" src={three} alt="" className="two" />
            </div>
            <div>
              <img data-aos="zoom-in" src={two} alt="" className="three" />
              <img data-aos="zoom-in" src={four} alt="" className="four" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="hero--block">
            <img src={block1} alt="" />
            <div className="hero--block__input">
              <span>NAME</span>
              <input placeholder="|Enter your name" type="text" />
            </div>
            <img src={block2} alt="" />
            <div className="hero--block__input">
              <span>NAME</span>
              <input placeholder="|Enter your phone" type="text" />
            </div>
            <button>Contact</button>
          </div>
          <video autoPlay loop class="video-container">
            <source src={go} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
