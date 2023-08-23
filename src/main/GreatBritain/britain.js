import React, {useState} from 'react';
import britishUniversitiesData from "../../Data/GreatBritan";
import "./britain.scss"
import {IoLocationOutline} from "react-icons/io5";

const Britain = () => {

    const [line, setLine] = useState(false)

    return (
        <div id="britain">
            <div className="container">
                <h1>United Stated</h1>
                <div className="britain">
                    <div className="britain--select">
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
                    <div>
                        {
                            britishUniversitiesData.slice(line ? 0 : 5, line ? 5 : 10).map((el) => (
                                <div className="britain--great">
                                    <div className="britain--great__riga justify-between">
                                        <img src={el.image} alt={el.name}/>
                                        <div className="britain--great__riga--name">
                                            <h3>Name:</h3>
                                            <h2>{el.name}</h2>
                                        </div>
                                        <div className="britain--great__riga--location">
                                            <p>Location  <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                            <h2>{el.location}</h2>
                                        </div>
                                        <div className="britain--great__riga--age">
                                            <p>Age:</p>
                                            <h2>From {el.age}</h2>
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
        </div>
    );
};

export default Britain;