import React from "react";
import FRE from "../../images/Frame 73.svg";
import "./Best.scss";

const Best = () => {
  return (
    <div id="best">
      <div className="container">
        <div className="best">
          <div className="best--img">
            <img src={FRE} alt="img" />
          </div>
          <div className="best--text">
            <h2>About Us</h2>
            <h1>
              Best Education <br /> Platform
            </h1>
            <p>
              Apparently we had reached a great height in <br /> the atmosphere,
              for the sky was a dead black.
            </p>
            <span>
              By the same illusion which lifts the horizon of the sea to the{" "}
              <br />
              level of the spectator on a hillside, the sable cloud beneath{" "}
              <br /> was dished out, and the car seemed to float in the middle.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
