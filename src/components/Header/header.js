import React, { useState } from "react";
import Motion from "./../../images/Vector.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { FaPhoneVolume, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { useLanguage } from "../../Data/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Data/countData";
import {RxHamburgerMenu} from "react-icons/rx";
import {GrClose} from "react-icons/gr";

const Header = () => {
  const [searchContent, setSearchContent] = useState(false);
  const [color, setColor] = useState(1);
  const [todo, setTodo] = useState("");
  const { language, changeLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { detail } = useSelector((s) => s);
  const [modal, setModal] = useState(true);
  const [value, setValue] = useState("");
  const [burger, setBurger] = useState(true);

  const fifa = data.find(
    (e) =>
      e.name.toLowerCase().includes(todo) || e.name.toUpperCase().includes(todo)
  );
  const filter = data.filter(
    (item) =>
      item.name.toLowerCase().includes(todo) ||
      item.name.toUpperCase().includes(todo)
  );

  const nav = useNavigate();
  const getDetail = (el) => {
    nav("/uni");
    dispatch({ type: "DATA", payload: el });
  };
  console.log("data", data);
  console.log("detail", detail);

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      study: "Study Abroad",
      contacts: "Contacts",
      searchPlaceholder: "Search...",
      countries: {
        unitedStates: "United States",
        korea: "Korea",
        australia: "Australia",
        malaysia: "Malaysia",
        germany: "Germany",
      },
      languageOptions: {
        en: "EN",
        ru: "RU",
      },
    },
    ru: {
      home: "Главная",
      about: "О нас",
      study: "Обучение за границей",
      contacts: "Контакты",
      searchPlaceholder: "Поиск...",
      countries: {
        unitedStates: "США",
        korea: "Корея",
        australia: "Австралия",
        malaysia: "Малайзия",
        germany: "Германия",
      },
      languageOptions: {
        en: "EN",
        ru: "RU",
      },
    },
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={Motion} alt="" />
          <div className="header--title">
            <div className="header--title__nav">
              <NavLink
                onClick={() => window.scroll(0, 0)}
                className="header--title__nav--item"
                to="/"
              >
                <span>{translations[language].home}</span>
              </NavLink>
              <NavLink
                onClick={() => window.scroll(0, 0)}
                className="header--title__nav--item"
                to="/about"
              >
                <span>{translations[language].about}</span>
              </NavLink>
              <NavLink
                onClick={() => window.scroll(0, 0)}
                className="header--title__nav--item"
                to="/study"
              >
                <span>{translations[language].study}</span>
              </NavLink>
              <a
                onClick={() => window.scroll(0, 3500)}
                className="header--title__nav--item"
              >
                <span>{translations[language].contacts}</span>
              </a>
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
            </div>
            <select
              className="header--title__nav--select"
              onChange={(e) => changeLanguage(e.target.value)}
              value={language}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </div>
          <div className="header--men">
            {burger ? (
                <RxHamburgerMenu
                    onClick={() => setBurger(false)}
                    style={{ fontSize: "31px", zIndex: "50" }}
                />
            ) : (
                <GrClose
                    onClick={() => setBurger(true)}
                    style={{ fontSize: "31px" }}
                />
            )}
            <div
                style={{ display: burger ? "none" : "block" }}
                className="header--men__div"
            >
              <nav className="header--men__div--nav">

                <NavLink to={"/"}>
                  <a onClick={() => setBurger(true)}  href="#"><h4 className="h1">Home</h4></a>
                </NavLink><br />
                <NavLink to={"/about"}>
                  <a onClick={() => setBurger(true)}  href="#"><h4 className="h2">About Us</h4></a>
                </NavLink><br />
                <NavLink to={"/study"}>
                  <a onClick={() => setBurger(true)}  href="#"><h4 className="h3">Study Abroad</h4></a>
                </NavLink><br />
                <NavLink to={"#"} onClick={() => window.scroll(0,6100)}>
                  <a onClick={() =>
                      setBurger(true)
                  }  href="#">
                    <h4 className="h4">Contacts</h4>
                  </a>

                </NavLink>

                <div className="header--men__div--nav__navcolor" onClick={() => changeLanguage}>
                  <h5
                      style={{
                        color: color === 1 ? "black" : "#7E7B7B",
                        cursor: "pointer",
                        borderBottom: color === 1 ? "2px solid #5609BB" : "",
                      }}
                      onClick={() =>
                          setColor(1)
                  }
                  >
                    EN
                  </h5>
                  <h5
                      style={{
                        color: color === 2 ? "black" : "#7E7B7B",
                        cursor: "pointer",
                        borderBottom: color === 2 ? "2px solid #5609BB" : "",
                      }}
                      onClick={() => setColor(2)}
                  >
                    RU
                  </h5>
                  <h5
                      style={{
                        color: color === 3 ? "black" : "#7E7B7B",
                        cursor: "pointer",
                        borderBottom: color === 3 ? "2px solid #5609BB" : "",
                      }}
                      onClick={() => setColor(3)}
                  >
                    KG
                  </h5>
                </div>
                <div className="header--men__div--nav__navicons">
                  <FaTelegramPlane />
                  <AiFillInstagram className="header--men__div--nav__navicons--locols"/>
                  <FaPhoneVolume />
                  <CgMail className="header--men__div--nav__navicons--lol" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
