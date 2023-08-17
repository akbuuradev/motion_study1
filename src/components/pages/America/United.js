import React, { useState } from "react";
// import onePhoto from "../../../images/img1.svg";
// import twoPhoto from "../../../images/img2.svg";
// import threePhoto from "../../../images/img3.svg";
// import fourPhoto from "../../../images/img4.png";
// import sixPhoto from "../../../images/img5.svg";
// import sevenPhoto from "../../../images/img6.svg";
// import eightPhoto from "../../../images/img7.svg";
// import { CiLocationOn } from "react-icons/ci";
import "./United.scss";
import americanUniversitiesData from "../../../Data/America";
// import AmericaCard from ".";

const United = () => {
  const [add, setAdd] = useState([]);
  const getAdd = () => {};
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
        <div className="country--america">
          {americanUniversitiesData.map((el) => (
            <div key={el.id} className="university--america__block">
              <img src={el.image} alt={el.name} style={{width: "100px"}}/>
              <h1>{el.name}</h1>
              <p>Location: {el.location}</p>
              <p>Age: {el.age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default United;
