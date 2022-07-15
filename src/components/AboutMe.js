import React from "react";
import Paris from "../images/baghdadUniversity.jfif";

const AboutMe = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Paris} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h5 className="a-sub">Graduate Dec, 2022 from Ubiversity of Baghdad</h5>
        <h6 className="a-sub">INFORMATION AND COMMUNICATION ENGINEERING</h6>
        <p className="a-desc">
          As a developer, I specialize in creating modular and scalable
          front-end and back-end architectures. As an Engineer, I focus on
          developing projects and making them work as efficiently as possible.
          I'm also exploring more creative endeavors to help college students
          excel with technology and collaboration.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
