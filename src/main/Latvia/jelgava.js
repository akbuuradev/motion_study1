import React from 'react';
import latvianUniversitiesData from "../../Data/Latvia";
import {IoLocationOutline} from "react-icons/io5";
import './jelgava.scss'

const Jelgava = () => {
    return (
        <div id="jelgava">
            <div className="container">
                <h1>United Stated</h1>
                <div className="jelgava">
                    <div className="jelgava--select">
                        <div>
                            <select>
                                <option value="#">Higher Education</option>
                                <option value="#">Secondary Education</option>
                                <option value="#">Higher Education</option>
                                <option value="#">language courses for youth</option>
                                <option value="#">chilren's language comps</option>
                            </select>
                        </div>

                        <div>
                            <select>
                                <option value="#">Specialization</option>
                                <option value="#">IT Technologies</option>
                                <option value="#">Bisiness</option>
                                <option value="#">Medicine</option>
                                <option value="#">International Relationships</option>
                                <option value="#">Tourism</option>
                            </select>
                        </div>

                        <div className="options">
                            <select>
                                <option value="#">Сountries</option>
                                <option value="#">America</option>
                                <option value="#">Germany</option>
                                <option value="#">INDONESIA</option>
                                <option value="#">South Korea</option>
                            </select>
                        </div>
                    </div>
                    {
                        latvianUniversitiesData.map((el) => (
                            <div className="jelgava--riga">
                                <div className="jelgava--riga__title">
                                    <img src={el.image} alt=""/>
                                    <div className="jelgava--riga__title--name">
                                        <h3>Name:</h3>
                                        <h2>{el.name}</h2>
                                    </div>
                                    <div className="jelgava--riga__title--location">
                                        <p>Location <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                        <h2>{el.location}</h2>
                                    </div>
                                    <div className="jelgava--riga__title--age">
                                        <p>Age:</p>
                                        <h2>Form {el.age}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Jelgava;