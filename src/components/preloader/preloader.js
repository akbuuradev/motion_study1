import React, { useEffect, useState } from "react";
import "./preloader.scss";
import { preLoaderAnim } from "../../animations";
import gsap from "gsap";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          setProgress((prevProgress) => prevProgress + 25);
        }, 200);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    // Создаем анимацию для сужения круга и его исчезновения
    if (isAnimating) {
      gsap.to(".circle", {
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        duration: 0.5,
        ease: "expo.easeOut",
      });
      gsap.to(".counter", {
        opacity: 0,
        duration: 0.5,
        ease: "expo.easeOut",
      });
    }
  }, [isAnimating]);

  return (
    <div className="preloader">
      {/* Анимация сужения */}
      <div className={`circle`} />
      
      {/* Прогресс загрузки */}
      <div className={`counter ${isAnimating ? "animate" : ""}`}>
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
