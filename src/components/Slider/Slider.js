import React from "react";
import "./Slider.scss";

function Slider() {
  return (
    <div id="slider">
      <div className="container">
        <div className="slider">
          <h1>Video testimonials from our students</h1>
          <div className="slider--block">
            <div className="slider--block__video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/M_pclb-58ZY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slider--block__video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/NErrGZ64OdE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slider--block__video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/9EmO9_MK1gQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slider--block__video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/xhF66hfRbmw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="slider--block__video">
              <iframe
                width="560"
                height="340"
                src="https://www.youtube.com/embed/IK6e1SFCdow"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
