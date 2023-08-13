import React from "react";
import FRE1 from "../../images/Rectangle 15.svg";
import Rec1 from "../../images/rec1.svg";
import Rec2 from "../../images/rec2.svg";
import Rec3 from "../../images/rec3.svg";
import Rec4 from "../../images/rec4.svg";
import Rec5 from "../../images/rec5.svg";
import "./Our.scss";

const Our = () => {
  return (
    <div id="our">
      <div className="container">
        <div className="our">
          <h1>Our Team</h1>
          <div className="our--block">
            <div className="our--block__mini">
              <img src={FRE1} alt="img" />
              <h2>Miss.Anushin oont </h2>
              <p>CEO & co-Founder</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec1} alt="img" />
              <h2>mr.Vishmas s. </h2>
              <p>CTO & co-Founder </p>
            </div>
            <div className="our--block__mini">
              <img src={Rec2} alt="img" />
              <h2>Miss.Tanisha kaduu </h2>
              <p>VP Of Technology</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec3} alt="img" />
              <h2>Mr.KL Rahul </h2>
              <p>Head of design</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec4} alt="img" />
              <h2>Miss.vashika g. </h2>
              <p>vP Of Finance</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec5} alt="img" />
              <h2>Mr.Aryan Singh </h2>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
