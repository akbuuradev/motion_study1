import React from 'react';
import cypriotUniversitiesData from "../../Data/Cyprus";
import {IoLocationOutline} from "react-icons/io5";
import './paphos.scss'

const Paphos = () => {
    return (
        <div id="paphos">
            <div className="container">
                <h1>United Stated</h1>
                <div className="paphos">
                    <div className="paphos--select">
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
                        cypriotUniversitiesData.map((el) => (
                            <div className="paphos--lima">
                                <div className="paphos--lima__nico">
                                    <img src={el.image} alt=""/>
                                    <div className="paphos--lima__nico--name">
                                        <h3>Name:</h3>
                                        <h2>{el.name}</h2>
                                    </div>
                                    <div className="paphos--lima__nico--location">
                                        <p>Location <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                        <h2>{el.location}</h2>
                                    </div>
                                    <div className="paphos--lima__nico--age">
                                        <p>Age:</p>
                                        <h2>From {el.age}</h2>
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

export default Paphos;