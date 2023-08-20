import React, { useState } from "react";
import Motion from "./../../images/Vector.svg";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
<<<<<<< HEAD
import { useLanguage } from "../../Data/LanguageContext";

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  function scrol() {
    window.scroll(0, 1000);
  }
  const [searchContent, setSearchContent] = useState(false);
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
=======
import {FaPhoneVolume, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {RxHamburgerMenu} from "react-icons/rx";
import {GrClose} from "react-icons/gr";

const Header = () => {

  const [searchContent, setSearchContent] = useState(false);
  const [burger , setBurger] = useState(false)
  const [color , setColor] = useState(1)

>>>>>>> 4eacd4ccf992f9d22b2f20161a9299ea1dc52711

  return (
    <div id="header">
      <div className="container">
        <div className="header">
<<<<<<< HEAD
          <img src={Motion} alt="" />
          <div className="header--nav">
            <NavLink
              onClick={() => window.scroll(0, 0)}
              className="header--nav__item"
              to="/"
            >
              <span>{translations[language].home}</span>
            </NavLink>
            <NavLink
              onClick={() => window.scroll(0, 0)}
              className="header--nav__item"
              to="/about"
            >
              <span>{translations[language].about}</span>
            </NavLink>
            <NavLink
              onClick={() => window.scroll(0, 0)}
              className="header--nav__item"
              to="/study"
            >
              <span>{translations[language].study}</span>
            </NavLink>
            <a
              onClick={() => window.scroll(0, 3300)}
              className="header--nav__item"
            >
              <span>{translations[language].contacts}</span>
=======
           <img src={Motion} alt=""/>
          <div className="header--title">
          <div className="header--title__nav">
            <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/">
              <span>Home</span>
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/about">
             <span>About Us</span>
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/study">
              <span>Study Abroad</span>
            </NavLink>
            <a onClick={() => window.scroll(0, 3300)} className="header--title__nav--item">
              <span>Contacts</span>
>>>>>>> 4eacd4ccf992f9d22b2f20161a9299ea1dc52711
            </a>
            <Link
              to={"/united"}
              onClick={() => setSearchContent(true)}
              className="flex md:order-2"
            >
              <div className="flex md:order-2">
<<<<<<< HEAD
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
=======
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
>>>>>>> 4eacd4ccf992f9d22b2f20161a9299ea1dc52711
                  </svg>

                  <span className="sr-only"> Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<<<<<<< HEAD
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4+++++++++++++++++++++++++-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
=======
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m19 19-4+++++++++++++++++++++++++-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
>>>>>>> 4eacd4ccf992f9d22b2f20161a9299ea1dc52711
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    onClick={() => window.scroll(0, 0)}
                    id="search-navbar"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{
                      outline: searchContent ? "none" : "",
                      border: searchContent ? "none" : "",
                    }}
                    type="text"
                    placeholder="Search..."
                  />
                  {searchContent && (
                    <OutsideClickHandler
                      onOutsideClick={() => setSearchContent(false)}
                    >
                      <div className="search--wrap">
                        <div className="search--content">
                          <Link to={"#"} className="search--content__item">
                            {translations[language].countries.unitedStates}
                          </Link>
                          <Link to={"#"} className="search--content__item">
                            {translations[language].countries.korea}
                          </Link>
                          <Link to={"#"} className="search--content__item">
                            {translations[language].countries.australia}
                          </Link>
                          <Link to={"#"} className="search--content__item">
                            {translations[language].countries.malaysia}
                          </Link>
                          <Link to={"#"} className="search--content__item">
                            {translations[language].countries.germany}
                          </Link>
                        </div>
                      </div>
                    </OutsideClickHandler>
                  )}
                </div>
<<<<<<< HEAD
                <select
                  className="header--nav__select"
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={language}
                >
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                </select>
=======
>>>>>>> 4eacd4ccf992f9d22b2f20161a9299ea1dc52711
              </div>
            </Link>
          </div>
          <select className="header--title__nav--select">
            <option value="">EN</option>
            <option value="">RU</option>
          </select>
          </div>
          <div className='header--men'>
            {burger ?  <RxHamburgerMenu onClick={() => setBurger(false)} style={{fontSize:'31px', zIndex:'50'}}/> : <GrClose onClick={() => setBurger(true)} style={{fontSize:'31px'}}/>}
            <div style={{display:burger ? 'none' : 'block'}} className='header--men__div'>
              <nav className="header--men__div--nav">
                <NavLink to={"/"}><h4  style={{color:'black'}} className='h1'>Home</h4></NavLink>
                <NavLink to={"/about"}><h4 style={{color:'black'}} className='h2'>About Us</h4></NavLink>
                <NavLink to={"/study"}><h4 style={{color:'black'}} className='h3'>Study Abroad</h4></NavLink>
                <NavLink to={"/contacts"}><h4  style={{color:'black'}} className='h4'>Contacts</h4></NavLink>
                <div style={{display:'flex' , justifyContent:'space-between' , width:'116px',marginTop:'10px',fontSize:'20px', marginLeft:'10px'}} >
                  <h5 style={{color:color === 1 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 1 ? '2px solid #5609BB' : ''}} onClick={() => setColor(1)}>EN</h5>
                  <h5 style={{color:color === 2 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 2 ? '2px solid #5609BB' : ''}} onClick={() => setColor(2)}>RU</h5>
                  <h5 style={{color:color === 3 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 3 ? '2px solid #5609BB' : ''}} onClick={() => setColor(3)}>KG</h5>
                </div>
                <div style={{fontSize:"30px" ,marginTop:"27px", display:"flex" , justifyContent:'space-around'}}>
                  <FaTelegramPlane/>
                  <AiFillInstagram/>
                  <FaPhoneVolume/>
                  <CgMail style={{fontSize:'35px' , margin:'-3px 0 0 -11px'}}/>
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
