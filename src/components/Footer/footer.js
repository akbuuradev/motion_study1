import React from 'react';
import footer from './../../images/footer.svg'
import {BsYoutube} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import './footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--about">
                        <div className="footer--about__img">
                            <img src={footer} alt=""/>
                        </div>
                        <div className="footer--about__home">
                            <a href="#">Home</a>
                            <a className="study" href="#">About us</a>
                            <a href="#">Study Abroad</a>
                            <a  className="contact">Contacts</a>
                        </div>
                        <div className="footer--about__fill">
                            <BsYoutube/>
                            <FaTelegramPlane className="footer--about__fill--plan"/>
                            <RiInstagramFill/>
                        </div>
                    </div>
                    <div className="footer--line"></div>
                    <h4>c 2023 Motion Study LLC</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;