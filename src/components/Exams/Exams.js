import React from "react";
import Rectangle from "../../images/Rectangle 19.svg";
import Frame from "../../images/Frame 194.svg";
import Frame1 from "../../images/Frame 196.svg";
import Frame2 from "../../images/Frame 1961.svg";
import { NavLink } from "react-router-dom";
import "./Exams.scss";
import { useLanguage } from "../../Data/LanguageContext";

function Exams() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Exams",
      description:
        "Exams are tests that assess a person's knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance.",
      cambridge: {
        title: "Cambridge English Exams",
        subtitle: "Your path to learning English, step by step.",
        text: "Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective, and rewarding. Our qualifications are based on research into effective teaching and learning.",
        discover: "Discover more",
      },
      aptis: {
        title: "Aptis",
        subtitle: "Choose Aptis for your assessment needs",
        text: "Aptis is a computer-based test which provides fast results reliably marked by our examiners.",
      },
      ielts: {
        title: "IELTS",
        subtitle: "Here’s all you need to know about IELTS",
        text: "IELTS (the International English Language Testing System) is the world’s most popular.",
      },
      other: {
        title: "Other Exams",
        subtitle: "There are a variety of competitive exams besides.",
        text: "But covering them is no big deal. Just study NCERT books for these.",
      },
    },
    ru: {
      title: "Экзамены",
      description:
        "Экзамены - это тесты, оценивающие знания, навыки, способности или другие квалификации человека в определенной предметной области. Они используются для оценки учебной успеваемости.",
      cambridge: {
        title: "Кембриджские экзамены по английскому языку",
        subtitle: "Ваш путь к изучению английского пошагово.",
        text: "Кембриджские квалификации по английскому языку - это глубокие экзамены, которые делают изучение английского языка интересным, эффективным и награждающим. Наши квалификации основаны на исследованиях эффективного обучения.",
        discover: "Узнать больше",
      },
      aptis: {
        title: "Aptis",
        subtitle: "Выберите Aptis для ваших потребностей в оценке",
        text: "Aptis - это компьютерный тест, который обеспечивает быстрые результаты, надежно оцениваемые нашими экзаменаторами.",
      },
      ielts: {
        title: "IELTS",
        subtitle: "Вот все, что вам нужно знать об IELTS",
        text: "IELTS (Международная система тестирования по английскому языку) - самая популярная в мире.",
      },
      other: {
        title: "Другие экзамены",
        subtitle: "Помимо этого, существует множество конкурсных экзаменов.",
        text: "Но с ними разбираться не так уж и сложно. Просто изучайте учебники NCERT для этого.",
      },
    },
  };

  return (
    <div id="exams">
      <div className="container">
        <div className="exams">
          <h1>{translations[language].title}</h1>
          <p>{translations[language].description}</p>
          <div className="exams--big">
            <div className="exams--big__one">
              <img src={Rectangle} alt="img" />
              <div className="exams--big__one--text">
                <h2>{translations[language].cambridge.title}</h2>
                <h3>{translations[language].cambridge.subtitle}</h3>
                <h5>{translations[language].cambridge.text}</h5>
                <NavLink onClick={() => window.scroll(0, 0)} to="cambridge">
                  <h4>{translations[language].cambridge.discover}</h4>
                </NavLink>
              </div>
            </div>
            <div className="exams--big__two">
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink onClick={() => window.scroll(0, 0)} to="/aptis">
                    <div className="exams--big__two--block__text--mini">
                      <h5>{translations[language].aptis.title}</h5>
                    </div>
                  </NavLink>

                  <h3>{translations[language].aptis.subtitle}</h3>
                  <h2>{translations[language].aptis.text}</h2>
                </div>
              </div>
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink onClick={() => window.scroll(0, 0)} to="/ielts">
                    <div className="exams--big__two--block__text--mini">
                      <h5>{translations[language].ielts.title}</h5>
                    </div>
                  </NavLink>

                  <h3>{translations[language].ielts.subtitle}</h3>
                  <h2>{translations[language].ielts.text}</h2>
                </div>
              </div>
              <div className="exams--big__two--block">
                <img src={Frame} alt="img" />
                <div className="exams--big__two--block__text">
                  <NavLink onClick={() => window.scroll(0, 0)} to="/other">
                    <div className="exams--big__two--block__text--mini1">
                      <h5>{translations[language].other.title}</h5>
                    </div>
                  </NavLink>

                  <h3>{translations[language].other.subtitle}</h3>
                  <h2>{translations[language].other.text}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
