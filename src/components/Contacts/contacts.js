import React, { useEffect, useState } from "react";
import "./contacts.scss";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguage } from "../../Data/LanguageContext";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const Contacts = () => {
  const [send, setSend] = useState(false);
  const [detail, setDetail] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [help, setHelp] = useState("");
  const [form, setForm] = useState(false);
  const lol = document.querySelector(".lol");
  const lol1 = document.querySelector(".lol1");
  const lol2 = document.querySelector(".lol2");
  const lol3 = document.querySelector(".lol3");
  const lol4 = document.querySelector(".lol4");
  const lol5 = document.querySelector(".lol5");
  const { language } = useLanguage();
  const [copy , setCopy] = useState(false)

  const translations = {
    en: {
      title: "Send a message",
      text1: "First Name",
      text2: "Last Name",
      text3: "Phone",
      text4: "Email",
      text5: "Group or Company",
      text6: "How can we help?",
      text7: "Submit",
      text8: "Contact Info",
      text9: "Send",
      text10: "Share this site with your friends",
      text11: "Done",
    },
    ru: {
      title: "Отправить сообщение",
      text1: "Имя",
      text2: "Фамилия",
      text3: "Телефон",
      text4: "Электронная почта",
      text5: "Группа или компания",
      text6: "Как мы можем помочь?",
      text7: " Рассмотрение",
      text8: "Контактная информация",
      text9: "Отправлять",
      text10: "Поделитесь этим сайтом с друзьями",
      text11: "Готово",
    },
  };

  useEffect(() => {
    setForm(
      lastName.trim() !== "" &&
        firstName.trim() !== "" &&
        phone.trim() !== "" &&
        email.trim() !== "" &&
        group.trim() !== "" &&
        help.trim() !== ""
    );
  }, [lastName, firstName, phone, email, group, help]);

  return (
    <div id="contacts">
      <div className="container">
        <div className="application">
          <div className="application--right">
            <h1>{translations[language].title}</h1>
            <div className="application--right__name">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                className="inputs lol"
                type="name"
                placeholder={translations[language].text1}
              />
              <div className="application--right__line"></div>
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="inputs lol1"
                type="name"
                placeholder={translations[language].text2}
              />
              <div className="application--right__line"></div>
            </div>
            <div className="application--right__email">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="inputs lol2"
                type="phone"
                placeholder={translations[language].text3}
              />
              <div className="application--right__line"></div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="inputs lol3"
                type="email"
                placeholder={translations[language].text4}
              />
              <div className="application--right__line"></div>
            </div>
            <div className="application--right__group">
              <input
                onChange={(e) => setGroup(e.target.value)}
                className="application--right__group--com lol4"
                type="text"
                placeholder={translations[language].text5}
              />
              <textarea
                onChange={(e) => setHelp(e.target.value)}
                className="application--right__group--help  lol5"
                type="text"
                placeholder={translations[language].text6}
              />
              <div className="block">
                <button
                  onClick={() => {
                    setDetail(true);
                    lol.value = "";
                    lol1.value = "";
                    lol2.value = "";
                    lol3.value = "";
                    lol4.value = "";
                    lol5.value = "";
                  }}
                  style={{
                    background: form ? "#026ac9" : "#cfd4d9",
                    color: form ? "#fff" : "grey",
                    cursor: form ? "pointer" : "not-allowed",
                  }}
                  className="application--right__group--btn"
                >
                  {translations[language].text7}
                </button>
              </div>
            </div>
            {detail && (
              <div className="detail">
                <div className="detail--open">
                  <h1
                    className="detail--open__none"
                    onClick={() => setDetail(false)}
                  >
                    x
                  </h1>
                  <div className="detail--open__name">
                    <h3>
                      <span>{translations[language].text2}:</span> {firstName} {lastName}
                    </h3>
                  </div>
                  <div className="detail--open__phone">
                    <h3><span>{translations[language].text3}:</span> {phone}</h3>
                  </div>
                  <div className="detail--open__email">
                    <h3><span>{translations[language].text4}:</span> {email}</h3>
                  </div>
                  <div className="detail--open__group">
                    <h3><span>{translations[language].text5}:</span> {group}</h3>
                  </div>
                  <div className="detail--open__help">
                    <h3><span>{translations[language].text6}:</span> {help}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="application--left">
            <div className="application--left__info">
              <div
                onClick={() => setSend(true)}
                className="application--left__info--line">
                <CopyToClipboard text='+996 500 34 84 39'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none">
                  <rect width="56" height="56" rx="28" fill="#E5EA00" />
                  <path
                    d="M28.5771 31.0701C28.745 32.3354 28.3429 33.662 27.3706 34.6343L23.5819 38.423C21.9237 40.0811 19.2353 40.0811 17.5771 38.423C15.919 36.7648 15.919 34.0764 17.5771 32.4182L21.3658 28.6295C22.3381 27.6572 23.6647 27.255 24.93 27.423M27.4232 24.9297C27.2553 23.6644 27.6575 22.3379 28.6298 21.3656L32.4185 17.5769C34.0766 15.9187 36.765 15.9187 38.4232 17.5769C40.0814 19.235 40.0814 21.9235 38.4232 23.5816L34.6345 27.3703C33.6622 28.3426 32.3357 28.7448 31.0703 28.5768M24.93 31.0701L31.0703 24.9297"
                    stroke="#212121"
                    stroke-width="1.3"
                    stroke-linecap="square"/>
                </svg>
                </CopyToClipboard>
              </div>
              <div className="application--left__info--main">
                <div className="application--left__info--main__block">
                  <h2>{translations[language].text8}</h2>
                  <div className="application--left__info--main__block--phone">
                     <MdPhoneInTalk className="application--left__info--main__block--phone__icon" />
                    <h3 onClick={() => setCopy(true)}>+996 500 34 84 39</h3>
                  </div>
                  <div className="application--left__info--main__block--email">
                    <h4 className="application--left__info--main__block--email__icons"><TfiEmail  /></h4>
                    <h3>motionweb312@gmail.com</h3>
                  </div>
                  <div className="application--left__info--main__block--plane">
                    <BiLogoTelegram />
                    <IoLogoWhatsapp className="application--left__info--main__block--plane__whatsapp" />
                    <BiLogoInstagramAlt />
                  </div>
                  <div className="application--left__info--main__block--card">
                    <iframe className="figa"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.670015518184!2d74.58255517583908!3d42.87980860210774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1691908143384!5m2!1sru!2skg"
                      width="400"
                      height="250"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default Contacts;
