import React from "react";
import FRE1 from "../../images/Rectangle 15.svg";
import Rec1 from "../../images/rec1.svg";
import Rec2 from "../../images/rec2.svg";
import Rec3 from "../../images/rec3.svg";
import Rec4 from "../../images/rec4.svg";
import Rec5 from "../../images/rec5.svg";
import "./Our.scss";
import { useLanguage } from "../../Data/LanguageContext";

const Our = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      logo: "Our Team",
      name1: "Miss.Anushin oont ",
      title1: "CEO & co-Founder",
      name2: "mr.Vishmas s.",
      title2: "CTO & co-Founder",
      name3: "Miss.Tanisha kaduu",
      title3: "VP Of Technology",
      name4: "Mr.KL Rahul",
      title4: "Head of design",
      name5: "Miss.vashika g.",
      title5: "vP Of Finance",
      name6: "Mr.Aryan Singh",
      title6: "Head of Marketing",
    },
    ru: {
      logo: "Наша команда",
      name1: "Мисс Анушин Онт ",
      title1: "Генеральный директор и соучредитель",
      name2: "г-н Вишмас с.",
      title2: "технический директор и со-Four",
      name3: "Мисс Таниша кадуу",
      title3: "вице-президент по технологиям",
      name4: "Г-н КЛ Рахул",
      title4: "Руководитель отдела дизайна",
      name5: "мисс.вашика г.",
      title5: "вице-президент по финансам",
      name6: "Мистер Арьян Сингх",
      title6: "руководитель отдела маркетинга",
    },
  };
  return (
    <div id="our">
      <div className="container">
        <div className="our">
          <h1>{translations[language].logo}</h1>
          <div className="our--block">
            <div className="our--block__mini">
              <img src={FRE1} alt="img" />
              <h2>{translations[language].name1}</h2>
              <p>{translations[language].title1}</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec1} alt="img" />
              <h2>{translations[language].name2}</h2>
              <p>{translations[language].title2}</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec2} alt="img" />
              <h2>{translations[language].name3}</h2>
              <p>{translations[language].title3}</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec3} alt="img" />
              <h2>{translations[language].name4} </h2>
              <p>{translations[language].title4}</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec4} alt="img" />
              <h2>{translations[language].name5}</h2>
              <p>{translations[language].title5}</p>
            </div>
            <div className="our--block__mini">
              <img src={Rec5} alt="img" />
              <h2>{translations[language].name6}</h2>
              <p>{translations[language].title6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
