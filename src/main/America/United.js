import React, {useState} from "react";
import "./United.scss";
import {IoLocationOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {data} from "../../Data/countData";

const United = () => {

    const [line, setLine] = useState(false)
    const [active, setActive] = useState(1)
    const {count, aboutCount} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(aboutCount)

    return (
        <section id="country">
            <div className="container">
                <h1>United Stated</h1>
                <div className="select">
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

                    <div className="select--options">
                        <select>
                            <option value="#">Сountries</option>
                            <option value="#">America</option>
                            <option value="#">Germany</option>
                            <option value="#">INDONESIA</option>
                            <option value="#">South Korea</option>
                        </select>
                    </div>
                </div>
                <div className="country--america">
                    {data[count - 1].about.slice(line ? 0 : 5, line ? 5 : 10).map((el) => (
                        <>
                        <div style={{display:line ? "none":'block'}} className="country--america__blocks"
                             onClick={() => dispatch({type: "ABOUT_COUNT", payload: el.id})}>
                            <div key={el.id} className="country--america__blocks--block">
                                <img src={el.image} alt={el.name}/>
                                <div className="country--america__blocks--block__name">
                                    <h3>Name:</h3>
                                    <h2>{el.name}</h2>
                                </div>
                                <div className="country--america__blocks--block__location">
                                    <p>Location <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                    <h2>{el.location}</h2>
                                </div>
                                <div className="country--america__blocks--block__age">
                                    <p>Age: </p>
                                    <h2>From {el.age}</h2>
                                </div>
                            </div>
                        </div>


                            <div style={{display:line ? "block":'none'}} className="country--america__blocks"
                                 onClick={() => dispatch({type: "ABOUT_COUNT", payload: el.id})}>
                                <div key={el.id} className="country--america__blocks--block">
                                    <img src={el.image} alt={el.name}/>
                                    <div className="country--america__blocks--block__name">
                                        <h3>Name:</h3>
                                        <h2>{el.name}</h2>
                                    </div>
                                    <div className="country--america__blocks--block__location">
                                        <p>Location <IoLocationOutline style={{color: "#9D72D6"}}/></p>
                                        <h2>{el.location}</h2>
                                    </div>
                                    <div className="country--america__blocks--block__age">
                                        <p>Age: </p>
                                        <h2>From {el.age}</h2>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))} {
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
        </section>
    );
};

export default United;
