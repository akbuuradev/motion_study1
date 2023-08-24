import React from 'react';
import Univer from "./../../images/university.svg"
import './university.scss'
import {data} from "../../Data/countData";
import {useSelector} from "react-redux";

const University = () => {

    const {count, aboutCount} = useSelector(s => s)

    const {img, location, date, name,  type, design, language, languages} = data[count - 1].about[aboutCount - 1].details

    console.log(name)

    return (
        <div id="university">
            <div className="container">
                <h1>{name}</h1>
                <div className="university">
                    <div className="university--right">
                        <img src={img} alt=""/>
                    </div>
                    <div className="university--left">
                        <h2><span>Location : </span> {location}</h2>
                        <h2><span>Date of foundation : </span> {date}</h2>
                        <h2><span>Type of programs  :</span> {type}</h2>
                        <div className="university--left__car">
                            <div className="university--left__car--shoe">
                                <div className="university--left__car--shoe__ties">
                                    <span>Specialities:</span>
                                </div>
                                <div className="university--left__car--shoe__design">
                                    {
                                        design.map(el => (
                                            <h3>{el}</h3>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <h2><span>Language :</span>{language},{languages}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default University;