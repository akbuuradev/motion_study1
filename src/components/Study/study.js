import React from 'react';
import './study.scss'
import study from './../../images/Bitmap.svg'
import {NavLink} from "react-router-dom";

const Study = () => {
    return (
        <div id="study">
            <div className="container">
                <div className="study">
                    <h1>Study Abroad</h1>
                    <div className="study--line"></div>
                    <div className="study--title">
                        <div className="study--title__right">
                            <div className="study--title__right--our">
                                <img className="study--title__right--our__img" src={study} alt=""/>
                            </div>
                        </div>
                        <div className="study--title__left">
                            <p className="study--title__left--for"><span>Motion study</span> for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional development programmes for teachers and specialists of companies and organizations.</p>
                            <h5>Our partners include:</h5>
                            <p>- universities and higher education establishments.</p>
                            <p>- private schools and colleges.</p>
                            <p>- state schools and colleges.</p>
                            <p>- world known language schools for adults.</p>
                            <p>- international language schools for 7-18 y.o. schoolchildren.</p>
                            <p>- business schools</p>
                            <p>- executive centres</p>
                            <p>- summer camps</p>
                            <p>- guardianship companies</p>
                            <NavLink to={'/countries'}><button className="study--title__left--btn">Explore</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;