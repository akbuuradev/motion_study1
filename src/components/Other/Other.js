import React from "react";
import oth from "../../images/oth.svg";
import "./Other.scss";
import { useLanguage } from "../../Data/LanguageContext";

const translations = {
  en: {
    title: "Other exams",
    paperExamsTitle: "Paper Exams – Third party",
    paperExamsContent: [
      "Our office is also willing to proctor paper exams on behalf of other schools or private institutions. Please keep the following in mind:",
      "Send over any proctor agreements as quickly as possible to avoid delays. You can e-mail us at:",
      "When scheduling an exam, please allow time for the exam to be mailed to us.",
      "Some schools & institutions require the client (you) to pay for return shipping. Please bring an envelope & postage for us to use.",
      "Consider the time needed to mail the exam (each way) and grade the exam when scheduling appointments on tight deadlines.",
    ],
    idRequirementsTitle: "ID Requirements",
    idRequirementsContent:
      "Each school & institution is different, consequently ID requirements are set by the school we proctor for. We encourage you to reach out to your program to find out what form of ID you need.",
    faqTitle: "Frequently Asked Questions",
    faqContent: [
      "Where can I park?",
      "Parking information including instructions on how to pay for parking can be found [here].",
      "What do I need to bring?",
      "You will need to bring proper identification (see above) and a good attitude! A small snack or water is also encouraged. We will have everything else you will need to take the test.",
      "How long is the exam?",
      "The exam time is dependent on the exam itself. Every exam we do for others' schools is different and a UT High School test is certainly different from the University of Buffalo.",
      "Where will I store my personal belongings during the test?",
      "You will be provided a secure locker for your personal belongings before testing begins.",
    ],
  },
  ru: {
    title: "Другие экзамены",
    paperExamsTitle: "Бумажные экзамены – третья сторона",
    paperExamsContent: [
      "Наш офис также готов контролировать бумажные экзамены от имени других школ или частных учреждений. Пожалуйста, имейте в виду следующее:",
      "Отправьте все соглашения проктора как можно быстрее, чтобы избежать задержек. Вы можете отправить нам электронное письмо по адресу:",
      "При планировании экзамена, пожалуйста, подождите, пока экзамен будет отправлен нам по почте.",
      "Некоторые школы и учреждения требуют, чтобы клиент (вы) оплачивал обратную доставку. Пожалуйста, принесите конверт и почтовые расходы для нас.",
      "При планировании встреч в сжатые сроки учитывайте время, необходимое для отправки экзамена по почте (в каждом направлении) и оценки экзамена.",
    ],
    idRequirementsTitle: "Требования к идентификатору",
    idRequirementsContent:
      "Каждая школа и учреждение разные, поэтому требования к удостоверению личности устанавливаются школой, которую мы прокурируем. Мы рекомендуем вам обратиться в вашу программу, чтобы узнать, какая форма удостоверения личности вам нужна.",
    faqTitle: "Часто задаваемые вопросы",
    faqContent: [
      "Где можно припарковаться?",
      "Информацию о парковке, включая инструкции по оплате парковки, можно найти [здесь].",
      "Что мне нужно принести?",
      "Вам нужно будет принести надлежащее удостоверение личности (см. выше) и хорошее отношение! Также рекомендуется небольшой перекус или вода. У нас есть все необходимое для прохождения теста.",
      "Сколько длится экзамен?",
      "Время экзамена зависит от самого экзамена. Каждый экзамен, который мы сдаем для других школ, отличается, и тест средней школы UT, безусловно, отличается от теста Университета Буффало.",
      "Где я буду хранить свои личные вещи во время теста?",
      "Перед началом тестирования вам будет предоставлен безопасный шкафчик для хранения ваших личных вещей.",
    ],
  },
  // Добавьте переводы на другие языки по аналогии
};

const Other = () => {
  const { language } = useLanguage(); // Используйте язык из контекста

  const translate = (key) => {
    return translations[language][key];
  };

  return (
    <div id="other">
      <div className="container">
        <div className="other">
          <h1>{translate("title")}</h1>
          <div className="other--block"></div>
          <img src={oth} width={1400} alt="img" />
          <h2>{translate("paperExamsTitle")}</h2>
          <p>
            {translate("paperExamsContent")[0]}
            <ul>
              {translate("paperExamsContent")
                .slice(1)
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>
          <h2>{translate("idRequirementsTitle")}</h2>
          <li className="other--li">{translate("idRequirementsContent")}</li>
          <h2>{translate("faqTitle")}</h2>
          <ul>
            {translate("faqContent").map((item, index) => (
              <li key={index} className={index % 2 === 0 ? "other--li" : ""}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Other;
