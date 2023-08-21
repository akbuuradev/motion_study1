import React from "react";
import "./Countries.scss";
import america from "../../images/america.png";
import greatBritan from "../../images/greatBritan.png";
import austria from "../../images/ausrtra.png";
import germany from "../../images/germany.png";
import holland from "../../images/holland.png";
import ireland from "../../images/Ireland.png";
import spain from "../../images/Spain.png";
import italy from "../../images/Italy.png";
import canada from "../../images/canada.png";
import cyprus from "../../images/cyprus.png";
import China from "../../images/china.png";
import latvia from "../../images/latvia.png";
import {Link} from "react-router-dom";
import {useLanguage} from "../../Data/LanguageContext";


const Countries = ({el}) => {
    const {language} = useLanguage();


    const translations = {
        en: {
            title: "Choose the country",
            option1: "Higher Education",
            option2: "Secondary Education",
            option3: "Higher Education",
            option4: "language courses for youth",
            option5: "chilren's language comps",
            option6: "Specialization",
            option7: "IT Technologies",
            option8: "Bisiness",
            option9: "Medicine",
            option10: "International Relationships",
            option11: "Tourism",
            option12: "Сountries",
            option13: "America",
            option14: "Germany",
            option15: "INDONESIA",
            option16: "South Korea",

            flag1: "Great Britain",
            flag2: "Austria",
            flag3: "Germany",
            flag4: "Holland",
            flag5: "Ireland",
            flag6: "Spain",
            flag7: "Italy",
            flag8: "Canada",
            flag9: "Cyprus",
            flag10: "China",
            flag11: "Latvia",
            flag12: "America",
        },
        ru: {
            title: "Выберите страну",
            option1: "Высшее образование",
            option2: "Среднее образование",
            option3: "Высшее образование",
            option4: "языковые курсы для молодежи",
            option5: "детские языковые конкурсы",
            option6: "Специализация",
            option7: "ИТ-технологии",
            option8: "Бизнес",
            option9: "Лекарство",
            option10: "Международные отношения",
            option11: "Туризм",
            option12: "Страны",
            option13: "Америка",
            option14: "Германия",
            option15: "ИНДОНЕЗИЯ",
            option16: "Южная Корея",
            flag1: "Великобритания",
            flag2: "Австрия",
            flag3: "Германия",
            flag4: "Голландия",
            flag5: "Ирландия",
            flag6: "Испания",
            flag7: "Италия",
            flag8: "Канада",
            flag9: "Кипр",
            flag10: "Китай",
            flag11: "Латвия",
            flag12: "Америка",
        },
    };
    return (

        <section id="flag">
            <div className="container">
                <h1>{translations[language].title}</h1>
                <div className="flag">
                    <div className="flag--select">
                        <select>
                            <option value="#">{translations[language].option1}</option>
                            <option value="#">{translations[language].option2}</option>
                            <option value="#">{translations[language].option3}</option>
                            <option value="#">{translations[language].option4}</option>
                            <option value="#">{translations[language].option5}</option>
                        </select>

                        <select name="" id="">
                            <option value="#">{translations[language].option6}</option>
                            <option value="#">{translations[language].option7}</option>
                            <option value="#">{translations[language].option8}</option>
                            <option value="#">{translations[language].option9}</option>
                            <option value="#">{translations[language].option10}</option>
                            <option value="#">{translations[language].option11}</option>
                        </select>
                        <div className="flag--select__options">
                            <select name="" id="">
                                <option value="#">{translations[language].option12}</option>
                                <option value="#">{translations[language].option13}</option>
                                <option value="#">{translations[language].option14}</option>
                                <option value="#">{translations[language].option15}</option>
                                <option value="#">{translations[language].option16}</option>
                            </select>
                        </div>
                    </div>
                    <div className="flag--block">
                        <Link to={"/united"}>
                            <div className="flag--block__one">
                                <img src={america} alt="img"/>
                                <h2>{translations[language].flag12}</h2>
                            </div>
                        </Link>
                        <Link to={"/britain"}>
                            <div className="flag--block__one">
                                <img src={greatBritan} alt="img"/>
                                <h2>{translations[language].flag1}</h2>
                            </div>
                        </Link>
                        <Link to={"/vienna"}>
                            <div className="flag--block__one">
                                <img src={austria} alt="img"/>
                                <h2>{translations[language].flag2}</h2>
                            </div>
                        </Link>
                        <Link to={"/berlin"}>
                            <div className="flag--block__one">
                                <img src={germany} alt="img"/>
                                <h2>{translations[language].flag3}</h2>
                            </div>
                        </Link>
                        <Link to={"/delft"}>
                            <div className="flag--block__one">
                                <img src={holland} alt="img"/>
                                <h2>{translations[language].flag4}</h2>
                            </div>
                        </Link>
                        <Link to={"/dublin"}>
                            <div className="flag--block__one">
                                <img src={ireland} alt="img"/>
                                <h2>{translations[language].flag5}</h2>
                            </div>
                        </Link>
                        <Link to={"/spain"}>
                            <div className="flag--block__one">
                                <img src={spain} alt="img"/>
                                <h2>{translations[language].flag6}</h2>
                            </div>
                        </Link>
                        <Link to={"/rome"}>
                            <div className="flag--block__one">
                                <img src={italy} alt="img"/>
                                <h2>{translations[language].flag7}</h2>
                            </div>
                        </Link>
                        <Link to={"#"}>
                            <div className="flag--block__one">
                                <img src={canada} alt="img"/>
                                <h2>{translations[language].flag8}</h2>
                            </div>
                        </Link>
                        <Link to={"/paphos"}>
                            <div className="flag--block__one">
                                <img src={cyprus} alt="img"/>
                                <h2>{translations[language].flag9}</h2>
                            </div>
                        </Link>
                        <Link to={"/hardin"}>
                        <div className="flag--block__one">
                            <img src={China} alt="img"/>
                            <h2>{translations[language].flag10}</h2>
                        </div>
                        </Link>
                        <Link to={"/jelgava"}>
                        <div className="flag--block__one">
                            <img src={latvia} alt="img"/>
                            <h2>{translations[language].flag11}</h2>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countries;
