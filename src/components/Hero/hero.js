import React, {useState} from "react";
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
import {Link, useNavigate} from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import {data} from "../../Data/countData";
import {useDispatch} from "react-redux";

const Hero = () => {
  const { language } = useLanguage();
  const [searchContent, setSearchContent] = useState(false);
  const [todo, setTodo] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const getDetail = (el) => {
    nav("/uni");
    dispatch({ type: "DATA", payload: el });
  };
  console.log("data", data);

  const fifa = data.find(
      (e) =>
          e.name.toLowerCase().includes(todo) || e.name.toUpperCase().includes(todo)
  );
  const filter = data.filter(
      (item) =>
          item.name.toLowerCase().includes(todo) ||
          item.name.toUpperCase().includes(todo)
  );


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
      searchPlaceholder: "Search...",
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
      searchPlaceholder: "Поиск...",
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
        <Link
            to={"/united"}
            onClick={() => setSearchContent(true)}
            className="flex md:order-2"
        >
          <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
              <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">
                    {translations[language].searchPlaceholder}
                  </span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
              >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">
                      {translations[language].searchPlaceholder}
                    </span>
            </div>
            <input
                type="text"
                id="search-navbar"
                onChange={(e) => setTodo(e.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={translations[language].searchPlaceholder}
            />
            {searchContent && (
                <OutsideClickHandler
                    onOutsideClick={() => setSearchContent(false)}
                >
                  <div
                      className="search-wrap"
                      style={{ display: fifa ? "block" : "none" }}
                  >
                    {todo &&
                        filter.map((el) => (
                            <div className="search-content">
                              <h4 onClick={() => getDetail(el)}>{el.name}</h4>
                            </div>
                        ))}
                  </div>
                </OutsideClickHandler>
            )}
          </div>
        </Link>
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
          <video autoPlay loop muted class="video-container">
            <source src={go} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
