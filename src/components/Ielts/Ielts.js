import React from "react";
import iets from "../../images/iets.svg";
import "./Ielts.scss";
import { useLanguage } from "../../Data/LanguageContext";

const Ielts = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "What is IELTS?",
      text1: "What Is IELTS? A Complete Introduction",
      text2:
        " Introduced in 1989, IELTS, the International English Language Testing System, is an English language proficiency test internationally recognized for testing English language ability in  four categories:",
      text3: "Listening",
      text4: "Reading",
      text5: "Writing",
      text6: "Speaking",
      text7: "Types Of APTIS test",
      text8:
        "Anyone can take the IELTS test irrespective of age, gender, race, nationality or religion. IELTS administrators (IDP or British  Council) has set no age limit to take the IELTS test. This is one of  the IELTS advantages. However, for candidates below 16 years, it is  not recommended. Although if they wish, they can also take the test.  Anyone who wishes to pursue higher studies abroad or work abroad can  attempt the IELTS exam (Academic and General Training). However,  candidates should always check the educational institution’s eligibility criteria or organization where they are applying.",
      text9:
        "Reliable Experts: Developed by Cambridge experts and well supported  by a strong research and development team, IELTS is the most trusted  name for the English efficiency test.",
      text10:
        "  Frequency of Test: Due to the tests’ easy availability, it is the  most convenient for test-takers. It is available up to 4 dates a month.",
      text11:
        "Accepted by Most Organizations: More than 10,000 organizations  globally trust IELTS and accept the score to validate language  proficiency. accepted by over 8,000 universities, employers and immigration organizations worldwide",
      text12:
        "Face to Face Testing: It is known to be the fairest of all tests and is the only one that includes a face-to-face interaction.",
    },
    ru: {
      title: "Что такое IELTS?",
      text1: "Что такое IELTS? Полное введение",
      text2:
        " Введенная в 1989 году, IELTS, Международная система тестирования английского языка, представляет собой международно признанный тест на знание английского языка для проверки владения английским языком в четырех категориях:",
      text3: "Прослушивание",
      text4: "Чтение",
      text5: "Письмо",
      text6: "Говорящий",
      text7: "Типы теста APTIS",
      text8:
        "Любой желающий может пройти тест IELTS независимо от возраста, пола, расы, национальности или религии. Администраторы IELTS (IDP или British Council) не устанавливают возрастных ограничений для сдачи теста IELTS. Это одно из преимуществ IELTS. Однако для кандидатов младше 16 лет это не рекомендуется. Хотя при желании они тоже могут пройти тест. Любой, кто хочет получить высшее образование за границей или работать за границей, может попытаться сдать экзамен IELTS (академическая и общая подготовка). Тем не менее, кандидаты всегда должны проверять критерии приемлемости учебного заведения или организации, в которую они подают заявление.",
      text9:
        "Надежные эксперты. Разработанный экспертами Кембриджа и хорошо поддерживаемый сильной командой исследователей и разработчиков, IELTS является самым надежным именем для теста на эффективность английского языка.",
      text10:
        "  Периодичность тестирования: из-за доступности тестов это наиболее удобно для тестируемых. Доступно до 4-х дат в месяц.",
      text11:
        "Принимается большинством организаций: более 10 000 организаций по всему миру доверяют IELTS и принимают результаты для подтверждения владения языком. принят более чем 8000 университетов, работодателей и иммиграционных организаций по всему миру",
      text12:
        "Тестирование лицом к лицу: известно, что это самый честный из всех тестов и единственный, который включает личное взаимодействие.",
    },
  };
  return (
    <div id="ielts">
      <div className="container">
        <div className="ielts">
          <h1>{translations[language].title}</h1>
          <div className="ielts--block"></div>
          <img src={iets} width={1400} alt="img" />
          <h2>{translations[language].text1}</h2>
          <p>{translations[language].text2}</p>
          <li>{translations[language].text3}</li>
          <li>{translations[language].text4}</li>
          <li>{translations[language].text5}</li>
          <li>{translations[language].text6}</li>
          <h2>{translations[language].text7}</h2>
          <p>{translations[language].text8}</p>

          <li>{translations[language].text9}</li>
          <li>{translations[language].text10}</li>
          <li>{translations[language].text11}</li>
          <li>{translations[language].text12}</li>
        </div>
      </div>
    </div>
  );
};

export default Ielts;
