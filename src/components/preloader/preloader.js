import React, { useEffect, useState } from "react";
import "./preloader.scss";
import { preLoaderAnim } from "../../animations";

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
            setProgress(prevProgress => prevProgress + 25);
          }, 200);
        } else {
          clearInterval(interval);
        }
      }, 300);
  

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="preloader">
      <div className={`counter ${isAnimating ? "animate" : ""}`}>
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
