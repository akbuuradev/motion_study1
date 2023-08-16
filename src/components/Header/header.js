import React, {useState} from "react";
import Motion from "./../../images/Vector.svg";
import {Link, NavLink} from "react-router-dom";
import "./header.scss";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";


const Header = () => {

  const [searchContent, setSearchContent] = useState(false);


  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={Motion} alt=""/>
          <div className="header--nav">
            <NavLink onClick={() => window.scroll(0, 0)} className="header--nav__item" to="/">
              <span>Home</span>
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} className="header--nav__item" to="/about">
             <span>About Us</span>
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} className="header--nav__item" to="/study">
              <span>Study Abroad</span>
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} className="header--nav__item" to="/application">
              <span>Contacts</span>
            </NavLink>
            <Link to={'/united'}  onClick={() => setSearchContent(true)}
                     className="flex md:order-2">
              <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4+++++++++++++++++++++++++-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input onClick={() => window.scroll(0, 0)}  id="search-navbar"
                         className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           style={{
                    outline: searchContent ? 'none' : '',
                    border: searchContent ? 'none' : '',
                  }} type="text"  placeholder="Search..." />
                  {searchContent && (
                      <OutsideClickHandler
                          onOutsideClick={() => setSearchContent(false)}
                      >
                        <div className="search--wrap">
                          <div className="search--content">
                            <Link to={'#'} className="search--content__item">United States</Link>
                            <Link to={'#'} className="search--content__item">Korea</Link>
                            <Link to={'#'} className="search--content__item">Australia</Link>
                            <Link to={'#'} className="search--content__item">Malaysia</Link>
                            <Link to={'#'} className="search--content__item">Germany</Link>
                          </div>
                        </div>
                      </OutsideClickHandler>
                  )}
                </div>
                  <select className="header--nav__select">
                    <option value="">EN</option>
                    <option value="">RU</option>
                  </select>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
