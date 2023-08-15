import React from "react";
import onePhoto from "../../../images/img1.svg";
import twoPhoto from "../../../images/img2.svg";
import threePhoto from "../../../images/img3.svg";
import fourPhoto from "../../../images/img4.png";
import sixPhoto from "../../../images/img5.svg";
import sevenPhoto from "../../../images/img6.svg";
import eightPhoto from "../../../images/img7.svg";
import { CiLocationOn } from "react-icons/ci";
import "./United.scss";

const United = () => {
  return (
    <section id="country">
      <div className="container">
        <h1>United Stated</h1>
        <div className="select">
          <select>
            <option value="#">Higher Education</option>
            <option value="#">Secondary Education</option>
            <option value="#">Higher Education</option>
            <option value="#">language courses for youth</option>
            <option value="#">chilren's language comps</option>
          </select>

          <select name="" id="">
            <option value="#">Specialization</option>
            <option value="#">IT Technologies</option>
            <option value="#">Bisiness</option>
            <option value="#">Medicine</option>
            <option value="#">International Relationships</option>
            <option value="#">Tourism</option>
          </select>
          <div className="select--options">
            <select name="" id="">
              <option value="#">Сountries</option>
              <option value="#">America</option>
              <option value="#">Germany</option>
              <option value="#">INDONESIA</option>
              <option value="#">South Korea</option>
            </select>
          </div>
        </div>

        <div className="country">
          <img src={onePhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={twoPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={threePhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={fourPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={sixPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={sevenPhoto} alt="img" />

          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
        <div className="country">
          <img src={eightPhoto} alt="img" />
          <div className="country--one">
            <h4>Name:</h4>
            <h3>Solbrige University</h3>
          </div>
          <div className="country--one">
            <h4>
              Location <CiLocationOn />
            </h4>
            <h3>Perth</h3>
          </div>
          <div className="country--one">
            <h4>Age:</h4>
            <h3>From 16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default United;
