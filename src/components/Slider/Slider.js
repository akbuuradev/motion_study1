import React from "react";
import "./Slider.scss";
import Slider from "react-slick";
import { useLanguage } from "../../Data/LanguageContext";

function Sliderone() {
  const { language } = useLanguage();
  let settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2.5, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1300,
    cssEase: "linear",
  };
  const translations = {
    en: {
      title: "Video testimonials from our students",
    },
    ru: {
      title: "Видео-отзывы от наших студентов",
    },
  };
  return (
    <div id="slider">
      <div className="container">
        <div className="slider">
          <h1>{translations[language].title}</h1>
          <Slider className="you" {...settings}>
            <div className="you--video">
              <iframe
                width="520"
                height="340"
                src="https://www.youtube.com/embed/M_pclb-58ZY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="you--video">
              <iframe
                width="520"
                height="340"
                src="https://www.youtube.com/embed/NErrGZ64OdE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="you--video">
              <iframe
                width="520"
                height="340"
                src="https://www.youtube.com/embed/9EmO9_MK1gQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="you--video">
              <iframe
                width="520"
                height="340"
                src="https://www.youtube.com/embed/xhF66hfRbmw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="you--video">
              <iframe
                width="520"
                height="340"
                src="https://www.youtube.com/embed/IK6e1SFCdow"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscree
                n
              ></iframe>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Sliderone;
