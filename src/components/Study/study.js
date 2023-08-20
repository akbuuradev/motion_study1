import React from "react";
import "./study.scss";
import study from "./../../images/Bitmap.svg";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../Data/LanguageContext";

const Study = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Study Abroad",
      text1:
        "for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional  development programmes for teachers and specialists of companies and organizations.",
      text2: "Our partners include:",
      text3: "- universities and higher education establishments.",
      text4: "- private schools and colleges",
      text5: "- state schools and colleges.",
      text6: "- world known language schools for adults.",
      text7: "  - international language schools for 7-18 y.o. schoolchildren.",
      text9: "- business schools",
      text10: "- executive centres",
      text11: "- summer camps",
      text12: "- guardianship companies",
      text13: "Explore",
    },
    ru: {
      title: "Учеба за границей",
      text1:
        "for International Education предлагает своим клиентам различные возможности обучения за рубежом – языковые курсы, среднее, профессиональное и высшее образование, программы повышения квалификации для преподавателей и специалистов компаний и организаций.",
      text2: "Среди наших партнеров:",
      text3: "- университеты и высшие учебные заведения.",
      text4: "- частные школы и колледжи",
      text5: "- государственные школы и колледжи.",
      text6: "- всемирно известные языковые школы для взрослых.",
      text7: " - международные языковые школы для 7-18 лет школьники.",
      text9: "- бизнес-школы",
      text10: "- исполнительные центры",
      text11: "- летние лагеря",
      text12: "- опекунские компании",
      text13: "Исследовать",
    },
  };
  return (
    <div id="study">
      <div className="container">
        <div className="study">
          <h1>{translations[language].title}</h1>
          <div className="study--line"></div>
          <div className="study--title">
            <div className="study--title__right">
              <div className="study--title__right--our">
                <img
                  className="study--title__right--our__img"
                  src={study}
                  alt=""
                />
              </div>
            </div>
            <div className="study--title__left">
              <p className="study--title__left--for">
                <span>Motion study</span> {translations[language].text1}
              </p>
              <h5>{translations[language].text2}</h5>
              <p>{translations[language].text3}</p>
              <p>{translations[language].text4}</p>
              <p>{translations[language].text5}</p>
              <p>{translations[language].text6}</p>
              <p>{translations[language].text7}</p>
              <p>{translations[language].text8}</p>
              <p>{translations[language].text9}</p>
              <p>{translations[language].text10}</p>
              <p>{translations[language].text11}</p>
              <p>{translations[language].text12}</p>
              <NavLink to={"/countries"}>
                <button className="study--title__left--btn">
                  {translations[language].text13}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
