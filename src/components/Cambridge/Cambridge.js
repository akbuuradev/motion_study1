import React from "react";
import REC from "../../images/Rectangle 120.svg";
import { FaCheck } from "react-icons/fa";
import "./Cambridge.scss";
import { useLanguage } from "../../Data/LanguageContext";

const Cambridge = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Cambridge English Exam",
      text1: "ho are the Cambridge English exams for?.",
      text2:
        "The Cambridge English exams are strongly recommended for anyone who plans to work in international business or study and/or work overseas. Wherever life takes you, you will be able to prove your English level with your Cambridge Certificate",
      text3: "What do the Cambridge exams involve?",
      text4: "Official Recognition",
      text5:
        " Cambridge English Qualifications are accepted worldwide. They are a mark of excellence trusted by thousands of leading higher education  institutions, governments and employers. With a Cambridge English Qualification, you'll open doors to a world of opportunities – literally!",
      text6:
        "   When you pass the exam, you'll be awarded a certificate delivered by Cambridge Assessment English, the ESOL accreditation body of the University of Cambridge. Each year, more than 300,000 people from over 100 different countries choose to sit a Cambridge exam. ",
      text7:
        "Depending on the level you are looking to achieve, you might choose from one of the following exam preparation courses:",
      text8: "B2 First (FCE)",
      text9: "C1 Advanced (CAE)",
      text10: "C2 Proficiency (CPE)",
    },
    ru: {
      title: "Кембриджский экзамен по английскому языку",
      text1:
        "для кого предназначены Кембриджские экзамены по английскому языку?.",
      text2:
        "Кембриджские экзамены по английскому языку настоятельно рекомендуются всем, кто планирует работать в международном бизнесе или учиться и/или работать за границей. Куда бы вас ни забросила жизнь, вы сможете подтвердить свой уровень английского с помощью Кембриджского сертификата",
      text3: "Что включают в себя кембриджские экзамены?",
      text4: "Официальное признание",
      text5:
        "Cambridge English Qualifications признаются во всем мире. Они являются знаком качества, которому доверяют тысячи ведущих высших учебных заведений, правительств и работодателей. Имея Cambridge English Qualification, вы буквально откроете двери в мир возможностей!",
      text6:
        "   Когда вы сдадите экзамен, вы получите сертификат, выданный Cambridge Assessment English, органом по аккредитации ESOL Кембриджского университета. Каждый год более 300 000 человек из более чем 100 разных стран выбирают Кембриджский экзамен. ",
      text7:
        "В зависимости от уровня, которого вы хотите достичь, вы можете выбрать один из следующих курсов подготовки к экзамену:",
      text8: "B2 Первый (FCE)",
      text9: "C1 Расширенный (CAE)",
      text10: " C2 мастерство (CPE)",
    },
  };

  return (
    <div id="cambridge">
      <div className="container">
        <div className="cambridge">
          <h1>{translations[language].title}</h1>
          <div className="cambridge--block"></div>
          <img src={REC} width={1300} alt="img" />
          <h2>{translations[language].text1}</h2>
          <p>{translations[language].text2}</p>
          <h2>{translations[language].text3}</h2>
          <h3>{translations[language].text4}</h3>
          <p>{translations[language].text5}</p>
          <p>{translations[language].text6}</p>
          <p>{translations[language].text7}</p>
          <div className="cambridge--li">
            <div className="cambridge--li__icon">
              <FaCheck className="cambridge--li__icon--one" />
              <FaCheck className="cambridge--li__icon--one" />
              <FaCheck className="cambridge--li__icon--one" />
            </div>
            <div className="cambridge--li__text">
              <li>{translations[language].text8}</li>
              <li>{translations[language].text9}</li>
              <li>{translations[language].text10}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge;
