import React, {useState} from "react";
import "./Countries.scss";
import { useNavigate} from "react-router-dom";
import {useLanguage} from "../../Data/LanguageContext";
import { data} from "../../Data/countData";
import {useDispatch,} from "react-redux";


const Countries = ({el}) => {
    const {language} = useLanguage();



    const dispatch = useDispatch()

    const nav = useNavigate()


    // const {todo} = useSelector(s => s)

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
                            <div className="flag--block__title">
                                {
                                    data.map((el) => (
                                        <div onClick={() => {
                                            dispatch({type: "COUNTRY", payload: el.id})
                                            nav(`/${el.path}`)
                                        window.scroll(0,0) }} className="flag--block__title--one">
                                            <img src={el.flagImage} alt=""/>
                                            <h2>{el.name}</h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Countries;
