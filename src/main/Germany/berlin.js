import React, {useState} from 'react';
import germanUniversitiesData from "../../Data/Germany";
import {IoLocationOutline} from "react-icons/io5";
import './berlin.scss'

const Berlin = () => {

    const [line, setLine] = useState(false)

    return (
        <div id="berlin">
            <div className="container">
                <h1>United Stated</h1>
                <div className="berlin">
                    <div className="berlin--select">
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
                        germanUniversitiesData.slice(line ? 0 : 5, line ? 5 : 10).map((el) => (
                            <div className="berlin--title">
                                <div className="berlin--title__munich">
                                    <img src={el.image} alt=""/>
                                    <div className="berlin--title__munich--name">
                                        <h3>Name:</h3>
                                        <h2>{el.name}</h2>
                                    </div>
                                    <div className="berlin--title__munich--location">
                                        <p>Location <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                        <h2>{el.location}</h2>
                                    </div>
                                    <div className="berlin--title__munich--age">
                                        <p>Age:</p>
                                        <h2>Form {el.age}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        <div className="popular--pages">
                            {

                                <div className="popular--pages__btn">
                                    <button className="next" style={{background: line ? "#959aa2" : "black"}} onClick={() => setLine(false)}></button>
                                    <button className="next" style={{background: line ? "black" : "#959aa2"}} onClick={() => setLine( true)}></button>
                                </div>

                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Berlin;