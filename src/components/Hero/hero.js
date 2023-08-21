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
import { useLanguage } from "../../Data/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  const translations = {
    en: {
      explore: "Explore The World",
      studyAbroad: "Study abroad with our help",
      studyText:
        "Study at the world's top universities and expand your horizons. Get the highest quality education and achieve success abroad.",
      name: "NAME",
      enterName: "|Enter your name",
      phone: "PHONE",
      enterPhone: "|Enter your phone",
      contact: "Contact",
    },
    ru: {
      explore: "Исследуйте мир",
      studyAbroad: "Учеба за границей с нашей помощью",
      studyText:
        "Учись в лучших университетах мира и расширь свои горизонты. Получай качественное образование и добивайся успехов за границей.",
      name: "ИМЯ",
      enterName: "|Введите ваше имя",
      phone: "ТЕЛЕФОН",
      enterPhone: "|Введите ваш номер телефона",
      contact: "Контакт",
    },
  };
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
            <h4>{translations[language].explore}</h4>
            <h1>{translations[language].studyAbroad}</h1>
            <p>{translations[language].studyText}</p>
          </div>
          <div data-aos="zoom-in" className="hero--image">
            <div>
              <img src={one} alt="" className="one" />
              <img src={three} alt="" className="two" />
            </div>
            <div>
              <img src={two} alt="" className="three" />
              <img src={four} alt="" className="four" />
            </div>
          </div>
          <div className="hero--block">
            <div className="hero--block__input">
            <div style={{display: "flex"}}>
            <img src={block1} alt="" />
              <div style={{display: "flex",flexDirection: "column"}}>
                <span>{translations[language].name}</span>
                <input
                    placeholder={translations[language].enterName}
                    type="text"
                />
              </div>
            </div>
            </div>
            <div className="hero--block__input">
            <div style={{display: "flex"}}>
            <img src={block2} alt="" />
            <div style={{display: "flex",flexDirection: "column"}}>
              <span>{translations[language].phone}</span>
              <input
                placeholder={translations[language].enterPhone}
                type="text"
              />
            </div>
            </div>
            </div>
            <button>{translations[language].contact}</button>
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
