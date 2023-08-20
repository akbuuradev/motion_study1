import React from "react";
import "./BestFrom.scss";
import best from "../../images/from.png";
import fblock1 from "../../images/fblok.png";
import fblock2 from "../../images/fblok2.png";
import fblock3 from "../../images/fblok3.png";
import fblock4 from "../../images/fblok4.png";

const BestFrom = () => {
  return (
    <div id="from">
      <div className="container">
        <div className="from">
          <div className="from--title">
            <h1>This is why we are best from others</h1>
            <p>
              We provide full support at all stages of preparation, including
              assistance in filing documents and preparing for an interview.
              Contact us and start your journey to higher education abroad!
            </p>
            <img src={best} alt="" className="from--blocks__block--photo" />
          </div>
          <div className="from--blocks">
            <div className="from--blocks__block">
              <img src={fblock1} alt="" />
              <h3>1000+ Partners</h3>
              <p>
                over 1000+ partners worldwide enter the best universities in the
                world
              </p>
            </div>
            <div className="from--blocks__block">
              <img src={fblock2} alt="" />
              <h3>Experts</h3>
              <p>We are experts in our field. help you reach new heights</p>
            </div>
            <div className="from--blocks__block">
              <img src={fblock3} alt="" />
              <h3>Time</h3>
              <p>
                we will help you save your time and nerves when applying to the
                best university.
              </p>
            </div>
            <div className="from--blocks__block">
              <img src={fblock4} alt="" />
              <h3>Affrodable Prices</h3>
              <p>
                reasonable prices will always please you. sign up for a
                consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFrom;
