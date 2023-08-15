import React from "react";
import Rectangle from "../../images/Rectangle 19.svg";
import Frame from "../../images/Frame 194.svg";
import Frame1 from "../../images/Frame 196.svg";
import Frame2 from "../../images/Frame 1961.svg";

import "./Exams.scss";
import { NavLink } from "react-router-dom";

function Exams() {
  return (
    <div id="exams">
      <div className="container">
        <div className="exams">
          <h1>Exams</h1>
          <p>
            Exams are tests that assess a person's knowledge, skills, aptitude,
            or other qualifications in a specific subject or area of study. They
            are used to evaluate academic performance.
          </p>
          <div className="exams--big">
            <div className="exams--big__one">
              <img src={Rectangle} alt="img" />
              <div className="exams--big__one--text">
                <h2>cambrige English exams</h2>
                <h3>Your path to learning English, step by step.</h3>
                <h5>
                  Cambridge English Qualifications are in-depth exams that make
                  learning English enjoyable, effective and rewarding. Our
                  qualifications are based on research into effective teaching
                  and learning.
                </h5>
                <NavLink to="cambridge">
                  <h4>Discover more</h4>
                </NavLink>
              </div>
            </div>
            <div className="exams--big__two">
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink to="/aptis">
                    <div className="exams--big__two--block__text--mini">
                      <h5>Aptis</h5>
                    </div>
                  </NavLink>

                  <h3>
                    Choose Aptis for your <br /> assessment needs
                  </h3>
                  <h2>
                    Aptis is a computer basedtest which provides fast <br />{" "}
                    results reliably marked by our exsaminest.
                  </h2>
                </div>
              </div>
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink to="/ielts">
                    <div className="exams--big__two--block__text--mini">
                      <h5>IELTS</h5>
                    </div>
                  </NavLink>

                  <h3>
                    Here’s all you need to know <br /> about IELTS
                  </h3>
                  <h2>
                    IELTS (the International English Language Testing <br />
                    is the world’s most popular.
                  </h2>
                </div>
              </div>
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink to="/other">
                    <div className="exams--big__two--block__text--mini1">
                      <h5>Other Exams</h5>
                    </div>
                  </NavLink>

                  <h3>
                    There are a variety of <br /> competitive exams besides.
                  </h3>
                  <h2>
                    But covering them <br />
                    is no big deal. Just study ncert books for these.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
