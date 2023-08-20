import React from "react";
import footer from "./../../images/footer.svg";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./footer.scss";
import { useLanguage } from "../../Data/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      study: "Study Abroad",
      contacts: "Contacts",
    },
    ru: {
      home: "Главная",
      about: "О нас",
      study: "Обучение за границей",
      contacts: "Контакты",
    },
  };
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--about">
            <div className="footer--about__img">
              <img src={footer} alt="" />
            </div>
            <div className="footer--about__home">
              <a href="#">{translations[language].home}</a>
              <a className="study" href="#">
                {translations[language].about}
              </a>
              <a href="#">{translations[language].study}</a>
              <a className="contact">{translations[language].contacts}</a>
            </div>
            <div className="footer--about__fill">
              <BsYoutube />
              <FaTelegramPlane className="footer--about__fill--plan" />
              <RiInstagramFill />
            </div>
          </div>
          <div className="footer--line"></div>
          <h4>c 2023 Motion Study LLC</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
