import React from "react";
import "./card.scss";
import Video from "../logosvg/video.mp4";

const Card = () => {
  return (
    <div className="page-wrapper">
      <div className="overlay"></div>
      <div className="videoplay">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="elementor-widget">
        <div className="elementor-wrap">
          <span>HAVE A STUDIO AGENCY</span>
          <h1>Welcome Video Studio</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            <br /> the majority have suffered alteration.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
