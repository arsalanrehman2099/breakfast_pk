import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

function Slideshow() {
  const slideImages = [
    "images/home-slider/6.jpg",
    "images/home-slider/1.jpg",
    "images/home-slider/3.jpg",
    "images/home-slider/4.jpg",
    "images/home-slider/2.jpg",
  ];

  return (
    <div className="slide-container">
      <Fade duration={2500}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Fade>
    </div>
  );
}

export default Slideshow;
