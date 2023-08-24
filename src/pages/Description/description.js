import React from 'react';
import './description.scss'
import {LuCalendarCheck2} from "react-icons/lu";
import {BsBank} from "react-icons/bs";
import {BiSolidErrorCircle} from "react-icons/bi";
import instagram from './../../images/Instagram.svg'
import telegram from './../../images/Telegram.svg'
import {data} from "../../Data/countData";
import {useSelector} from "react-redux";
import whatsapp from "./../../images/WhatsApp.svg"


const Description = () => {
    const {count, aboutCount} = useSelector(state => state)

    const {img, title, titles, normal, awards, bs,
        tuition, fee, fees, application, entry,
        registration, apply, fall, pre, time, line, cation,
        studies, sept, now, spring, period, com, share, commence, per} = data[count-1].about[aboutCount-1].details.tabs[0].text
    console.log(data[1].about[1].details)


    return (
        <div id="description">
            <div className="container">
                <div className="description">
                    <div className="description--time">
                            <div className="description--time__right">
                                <div className="description--time__right--now">
                                    <img src={img} alt=""/>
                                    <div className="description--time__right--now__share">
                                        <h1>{title}</h1>
                                        <h2>{titles}<span>{per}</span></h2>
                                    </div>
                                </div>
                                <h3><span>Nominal duration:</span>{normal}</h3>
                                <div className="description--time__right--awards">
                                    <h2>Awards:</h2>
                                    <p><span>{bs}</span>{awards}</p>
                                </div>
                                <div className="description--time__right--line"></div>
                                <div className="description--time__right--tuition">
                                    <h2>Tuition fee:</h2>
                                    <p>{tuition} </p>
                                </div>
                                <div className="description--time__right--one">
                                    <h2>Application fee:</h2>
                                    <p>{application}</p>
                                </div>
                                <div className="description--time__right--base">
                                    <h2>Registration fee:</h2>
                                        <div className="description--time__right--base--vip">
                                            {
                                                registration.map((el) => (
                                                    <p>{el}</p>
                                                ))
                                            }
                                        </div>
                                </div>
                                <div className="description--time__right--line"></div>
                                <div className="description--time__right--high">
                                    <h2>Tuition fee:</h2>
                                    <div className="description--time__right--high__some">
                                        <span>{fee}</span>
                                        <p>{fees}</p>
                                    </div>
                                </div>
                                <div className="description--time__right--entry">
                                    <h2>Entry qualication:</h2>
                                    <p>{entry}</p>
                                </div>
                            </div>
                        <div className="description--time__left">
                            <div className="description--time__left--for">
                                <h2><span>{apply}</span>{fall}</h2>
                                <div className="description--time__left--for__you">
                                    <LuCalendarCheck2 className="icons"/>
                                    <p><span>{pre}<br/></span>
                                        {time}</p>
                                </div>
                                <div className="description--time__left--for__apple">
                                    <LuCalendarCheck2 className="icons"/>
                                    <p><span>{line}</span>
                                        {cation}</p>
                                </div>
                                <div className="description--time__left--for__commence">
                                    <BsBank  className="icons"/>
                                    <p><span>{studies}</span>
                                        {sept}</p>
                                </div>
                                    <h3><span>{now}</span>{spring}</h3>
                                <div className="description--time__left--for__has">
                                    <BiSolidErrorCircle className="icons"/>
                                    <p>{period}</p>
                                </div>
                                <div className="description--time__left--for__studies">
                                    <BsBank className="icons"/>
                                    <p><span>{com}<br/></span>
                                        {commence} </p>
                                </div>
                                <div className="description--time__left--for__line"></div>
                                <div className="description--time__left--for__share">
                                    <h4>{share}</h4>
                                    <div className="description--time__left--for__share--images">
                                        <img src={whatsapp} alt=""/>
                                        <img src={instagram} alt=""/>
                                        <img src={telegram} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;