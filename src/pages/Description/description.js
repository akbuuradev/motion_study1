import React from 'react';
import {NavLink} from "react-router-dom";
import './description.scss'
import cost from "./../../images/cost.svg"
import {LuCalendarCheck2} from "react-icons/lu";
import {BsBank} from "react-icons/bs";
import {BiSolidErrorCircle} from "react-icons/bi";
import instagram from './../../images/Instagram.svg'
import telegram from './../../images/Telegram.svg'


const Description = () => {
    return (
        <div id="description">
            <div className="container">
                <div className="description">
                    <div className="description--time">
                            <div className="description--time__right">
                                <div className="description--time__right--now">
                                    <img src={cost} alt=""/>
                                    <div className="description--time__right--now__share">
                                        <h1>Landscape Design</h1>
                                        <h2>University of Fashion and Design</h2>
                                    </div>
                                </div>
                                <h3><span>Nominal duration:</span> 4.5 years(240 ECTS)</h3>
                                <div className="description--time__right--awards">
                                    <h2>Awards:</h2>
                                    <p><span>B.Sc.</span> (Professional Bachelor’s degree in Business Management, qualification: Business Manager or E-Business Manager)</p>
                                </div>
                                <div className="description--time__right--line"></div>
                                <div className="description--time__right--tuition">
                                    <h2>Tuition fee:</h2>
                                    <p>€1,400 per semester
                                        US$1,502.87</p>
                                </div>
                                <div className="description--time__right--one">
                                    <h2>Application fee:</h2>
                                    <p>€120 one-time <br/>
                                        US$128.83</p>
                                </div>
                                <div className="description--time__right--base">
                                    <h2>Registration fee:</h2>
                                        <div className="description--time__right--base--vip">
                                            <span>US$150 one-time</span>

                                                <p>You need to choose student status:</p>
                                               <p> Base – 150 USD</p>
                                                <p>Standard – 500 USD</p>
                                               <p> VIP – 900 USD</p>


                                        </div>
                                </div>
                                <div className="description--time__right--line"></div>
                                <div className="description--time__right--high">
                                    <h2>Tuition fee:</h2>
                                    <div className="description--time__right--high__some">
                                        <span>High school / secondary education (or higher)</span>
                                        <p>Completed Secondary Education ( 12 years, in some countries 11 years)</p>
                                    </div>
                                </div>
                                <div className="description--time__right--entry">
                                    <h2>Entry qualication:</h2>
                                    <p>The entry qualification documents are accepted in the following languages: English / Lithuanian.Often you can get a suitable transcript from your school. If this is not the case, you will need official translations along with verified copies of the original.</p>
                                </div>
                            </div>
                        <div className="description--time__left">
                            <div className="description--time__left--for">
                                <h2><span>Apply Now!!!</span> Fall semester 2023</h2>
                                <div className="description--time__left--for__you">
                                    <LuCalendarCheck2 className="icons"/>
                                    <p><span>Pre-deadline <br/></span>
                                        20 Jun 2023, 23:59:59Eastern European Time
                                        Please ask your manager in Baltic Center about correct deadline for your country</p>
                                </div>
                                <div className="description--time__left--for__apple">
                                    <LuCalendarCheck2 className="icons"/>
                                    <p><span>Application deadline</span>
                                        31 Aug 2023, 23:59:59Eastern European Time
                                        Autumn Intake</p>
                                </div>
                                <div className="description--time__left--for__commence">
                                    <BsBank  className="icons"/>
                                    <p><span>Studies commence</span>
                                        4 Sept 2023</p>
                                </div>
                                    <h3><span>Apply Now!!!</span>  Spring semester 2023</h3>
                                <div className="description--time__left--for__has">
                                    <BiSolidErrorCircle className="icons"/>
                                    <p>Application period has ended</p>
                                </div>
                                <div className="description--time__left--for__studies">
                                    <BsBank className="icons"/>
                                    <p><span>Studies commence <br/></span>
                                        6 Feb 2023</p>
                                </div>
                                <div className="description--time__left--for__line"></div>
                                <div className="description--time__left--for__share">
                                    <h4>Share on:</h4>
                                    <div className="description--time__left--for__share--images">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                        <rect width="32.5517" height="32.5517" rx="16.2759" fill="#0DC143"/>
                                        <path d="M23.5664 8.95953C21.8215 7.16332 19.4095 6.18823 16.9461 6.18823C11.7114 6.18823 7.50316 10.4478 7.55448 15.6312C7.55448 17.2734 8.01637 18.8643 8.78617 20.3013L7.45184 25.1767L12.4299 23.8937C13.8156 24.6635 15.3552 25.0228 16.8948 25.0228C22.0781 25.0228 26.2864 20.7632 26.2864 15.5798C26.2864 13.0652 25.3113 10.7044 23.5664 8.95953ZM16.9461 23.4318C15.5604 23.4318 14.1748 23.0726 12.9944 22.3541L12.6865 22.2002L9.70994 22.97L10.4797 20.0447L10.2745 19.7368C8.01637 16.093 9.09409 11.2689 12.7892 9.01085C16.4842 6.75276 21.257 7.83048 23.5151 11.5255C25.7732 15.2206 24.6955 19.9934 21.0004 22.2515C19.82 23.0213 18.3831 23.4318 16.9461 23.4318ZM21.4623 17.7353L20.8978 17.4787C20.8978 17.4787 20.0766 17.1195 19.5634 16.8629C19.5121 16.8629 19.4608 16.8115 19.4095 16.8115C19.2555 16.8115 19.1529 16.8629 19.0502 16.9142C19.0502 16.9142 18.9989 16.9655 18.2804 17.7866C18.2291 17.8893 18.1265 17.9406 18.0238 17.9406H17.9725C17.9212 17.9406 17.8185 17.8893 17.7672 17.8379L17.5106 17.7353C16.9461 17.4787 16.4329 17.1708 16.0223 16.7602C15.9197 16.6576 15.7657 16.5549 15.6631 16.4523C15.3038 16.093 14.9446 15.6825 14.688 15.2206L14.6367 15.118C14.5854 15.0666 14.5854 15.0153 14.534 14.9127C14.534 14.81 14.534 14.7074 14.5854 14.6561C14.5854 14.6561 14.7906 14.3995 14.9446 14.2455C15.0472 14.1429 15.0986 13.9889 15.2012 13.8863C15.3038 13.7323 15.3552 13.527 15.3038 13.3731C15.2525 13.1165 14.6367 11.7308 14.4827 11.4229C14.3801 11.2689 14.2774 11.2176 14.1235 11.1663H13.9695C13.8669 11.1663 13.7129 11.1663 13.559 11.1663C13.4563 11.1663 13.3537 11.2176 13.251 11.2176L13.1997 11.2689C13.0971 11.3203 12.9944 11.4229 12.8918 11.4742C12.7892 11.5769 12.7378 11.6795 12.6352 11.7821C12.276 12.244 12.0707 12.8085 12.0707 13.3731C12.0707 13.7836 12.1733 14.1942 12.3273 14.5534L12.3786 14.7074C12.8405 15.6825 13.4563 16.5549 14.2774 17.3247L14.4827 17.53C14.6367 17.684 14.7906 17.7866 14.8933 17.9406C15.971 18.8643 17.2027 19.5315 18.5883 19.8907C18.7423 19.9421 18.9476 19.9421 19.1015 19.9934C19.2555 19.9934 19.4608 19.9934 19.6148 19.9934C19.8714 19.9934 20.1793 19.8907 20.3846 19.7881C20.5385 19.6855 20.6412 19.6855 20.7438 19.5828L20.8464 19.4802C20.9491 19.3775 21.0517 19.3262 21.1544 19.2236C21.257 19.1209 21.3596 19.0183 21.411 18.9157C21.5136 18.7104 21.5649 18.4538 21.6162 18.1972C21.6162 18.0945 21.6162 17.9406 21.6162 17.8379C21.6162 17.8379 21.5649 17.7866 21.4623 17.7353Z" fill="#FDFDFD"/>
                                        </svg>
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