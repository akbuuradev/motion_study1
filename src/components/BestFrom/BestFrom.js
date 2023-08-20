import React from "react";
import "./BestFrom.scss";
import best from "../../images/from.png";
import fblock1 from "../../images/fblok.png";
import fblock2 from "../../images/fblok2.png";
import fblock3 from "../../images/fblok3.png";
import fblock4 from "../../images/fblok4.png";
import { useLanguage } from "../../Data/LanguageContext";

const BestFrom = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "This is why we are best from others",
      description:
        "We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us and start your journey to higher education abroad!",
      blocks: [
        {
          image: fblock1,
          heading: "1000+ Partners",
          text: "over 1000+ partners worldwide enter the best universities in the world",
        },
        {
          image: fblock2,
          heading: "Experts",
          text: "We are experts in our field. help you reach new heights",
        },
        {
          image: fblock3,
          heading: "Time",
          text: "we will help you save your time and nerves when applying to the best university.",
        },
        {
          image: fblock4,
          heading: "Affordable Prices",
          text: "reasonable prices will always please you. sign up for a consultation",
        },
      ],
    },
    ru: {
      title: "Почему мы лучше других",
      description:
        "Мы оказываем полную поддержку на всех этапах подготовки, включая помощь в подаче документов и подготовке к собеседованию. Свяжитесь с нами и начните свой путь к высшему образованию за границей!",
      blocks: [
        {
          image: fblock1,
          heading: "1000+ Партнеров",
          text: "более 1000 партнеров по всему миру поступают в лучшие университеты мира",
        },
        {
          image: fblock2,
          heading: "Эксперты",
          text: "Мы эксперты в своей области. Поможем вам достичь новых высот",
        },
        {
          image: fblock3,
          heading: "Время",
          text: "мы поможем вам сэкономить ваше время и нервы при подаче заявления в лучший университет.",
        },
        {
          image: fblock4,
          heading: "Доступные цены",
          text: "разумные цены всегда вас порадуют. Запишитесь на консультацию",
        },
      ],
    },
  };

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
            <h1>{translations[language].title}</h1>
            <p>{translations[language].description}</p>
            <img src={best} alt="" className="from--blocks__block--photo" />
          </div>
          <div className="from--blocks">
            {translations[language].blocks.map((block, index) => (
              <div className="from--blocks__block" key={index}>
                <img src={block.image} alt="" />
                <h3>{block.heading}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFrom;
