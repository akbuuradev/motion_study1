import React from "react";
import "./Countries.scss";
import america from "../../../images/america.png";
import greatBritan from "../../../images/greatBritan.png";
import austria from "../../../images/ausrtra.png";
import germany from "../../../images/germany.png";
import holland from "../../../images/holland.png";
import ireland from "../../../images/Ireland.png";
import spain from "../../../images/Spain.png";
import italy from "../../../images/Italy.png";
import canada from "../../../images/canada.png";
import cyprus from "../../../images/cyprus.png";
import China from "../../../images/china.png";
import latvia from "../../../images/latvia.png";
import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <section id="flag">
      <div className="container">
        <h1>Choose the country</h1>
        <div className="flag">
          <div className="flag--select">
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
            <div className="flag--select__options">
              <select name="" id="">
                <option value="#">Сountries</option>
                <option value="#">America</option>
                <option value="#">Germany</option>
                <option value="#">INDONESIA</option>
                <option value="#">South Korea</option>
              </select>
            </div>
          </div>
          <div className="flag--block">
            <Link to={"/united"}>
              <div className="flag--block__one">
                <img src={america} alt="img" />
                <h2>America</h2>
              </div>
            </Link>

            <div className="flag--block__one">
              <img src={greatBritan} alt="img" />
              <h2>Great Britain</h2>
            </div>

            <div className="flag--block__one">
              <img src={austria} alt="img" />
              <h2>Austria</h2>
            </div>

            <div className="flag--block__one">
              <img src={germany} alt="img" />
              <h2>Germany</h2>
            </div>

            <div className="flag--block__one">
              <img src={holland} alt="img" />
              <h2>Holland</h2>
            </div>

            <div className="flag--block__one">
              <img src={ireland} alt="img" />
              <h2>Ireland</h2>
            </div>

            <div className="flag--block__one">
              <img src={spain} alt="img" />
              <h2>Spain</h2>
            </div>

            <div className="flag--block__one">
              <img src={italy} alt="img" />
              <h2>Italy</h2>
            </div>

            <div className="flag--block__one">
              <img src={canada} alt="img" />
              <h2>Canada</h2>
            </div>

            <div className="flag--block__one">
              <img src={cyprus} alt="img" />
              <h2>Cyprus</h2>
            </div>

            <div className="flag--block__one">
              <img src={China} alt="img" />
              <h2>China</h2>
            </div>

            <div className="flag--block__one">
              <img src={latvia} alt="img" />
              <h2>Latvia</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
