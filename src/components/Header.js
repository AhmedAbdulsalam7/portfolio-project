import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development and Website Promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "CV Builder",
            "Portfolio Builder",
          ]}
          typeSpeed={40}
          backSpeed={50}
          //   attr="placeholder"
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
