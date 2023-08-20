import React from "react";
import FRE from "../../images/Frame 73.svg";
import "./Best.scss";
import { useLanguage } from "../../Data/LanguageContext";

const Best = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      h1: "About Us",
      h2: "Best Education Platform",
      p: " Apparently we had reached a great height in the atmosphere, forthe sky was a dead black.",
      h3: "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.",
    },
    ru: {
      h1: "О нас",
      h2: "Лучшая образовательная платформа",
      p: "По-видимому, мы достигли большой высоты в атмосфере, для небо было мертвенно-черным.",
      h3: "Благодаря той же иллюзии, которая поднимает горизонт моря до уровня зрителя на склоне холма, соболиное облако под ним было раскачивался, и машина, казалось, плавала посередине.",
    },
  };
  return (
    <div id="best">
      <div className="container">
        <div className="best">
          <div className="best--img">
            <img src={FRE} alt="img" />
          </div>
          <div className="best--text">
            <h2>{translations[language].h1}</h2>
            <h1>{translations[language].h2}</h1>
            <p>{translations[language].p}</p>
            <h3>{translations[language].h3} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
