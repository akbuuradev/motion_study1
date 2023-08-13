import React from "react";
import REC from "../../images/Rectangle 120.svg";
import { FaCheck } from "react-icons/fa";
import "./Cambridge.scss";

const Cambridge = () => {
  return (
    <div id="cambridge">
      <div className="container">
        <div className="cambridge">
          <h1>Cambridge English Exam</h1>
          <div className="cambridge--block"></div>
          <img src={REC} width={1300} alt="img" />
          <h2>Who are the Cambridge English exams for?.</h2>
          <span>
            The Cambridge English exams are strongly recommended for anyone who
            plans to work in international business or study <br /> and/or work
            overseas. Wherever life takes you, you will be able to prove your
            English level with your Cambridge Certificate
          </span>
          <h2>What do the Cambridge exams involve?</h2>
          <h3>Official Recognition</h3>
          <p>
            Cambridge English Qualifications are accepted worldwide. They are a
            mark of excellence trusted by thousands of leading higher education
            institutions, governments and employers. With a Cambridge English
            Qualification, you'll open doors to a world of opportunities –
            literally!
          </p>
          <p>
            When you pass the exam, you'll be awarded a certificate delivered by
            Cambridge Assessment English, the ESOL accreditation body of the
            University of Cambridge. Each year, more than 300,000 people from
            over 100 different countries choose to sit a Cambridge exam\.
          </p>
          <p>
            Depending on the level you are looking to achieve, you might choose
            from one of the following exam preparation courses:
          </p>
          <div className="cambridge--li">
            <div className="cambridge--li__icon">
              <FaCheck className="cambridge--li__icon--one" />
              <FaCheck className="cambridge--li__icon--one" />
              <FaCheck className="cambridge--li__icon--one" />
            </div>
            <div className="cambridge--li__text">
              <li>B2 First (FCE)</li>
              <li>C1 Advanced (CAE)</li>
              <li>C2 Proficiency (CPE)</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge;
