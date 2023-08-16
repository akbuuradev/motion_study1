import React from 'react';
import Univer from "./../../images/university.svg"
import './university.scss'

const University = () => {
    return (
        <div id="university">
            <div className="container">
                <h1>Solbrige University</h1>
                <div className="university">
                    <div className="university--right">
                        <img src={Univer} alt=""/>
                    </div>
                        <div className="university--left">
                            <h2><span>Location :</span>   Australia,Milan,Rim</h2>
                            <h2><span>Date of foundation :</span>   1996</h2>
                            <h2><span>Type of programs  :</span>   Bachelor Course Magistracy</h2>
                            <div className="university--left__car">
                                <div className="university--left__car--shoe">
                                <div className="university--left__car--shoe__ties">
                                    <span>Specialities :</span>
                                </div>
                                <div className="university--left__car--shoe__design">
                                    <h3>  Fashion and Design</h3>
                                    <h3>  Jewerly design</h3>
                                    <h3>  Shoe design</h3>
                                    <h3>  Interior design</h3>
                                    <h3>  landscape design</h3>
                                    <h3>  Car design</h3>
                                    <h3>  Photography</h3>
                                </div>
                                </div>
                            </div>
                            <h2><span>Language :  </span>   English,Italian</h2>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default University;