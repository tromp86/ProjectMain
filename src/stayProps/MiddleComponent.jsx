import React, { useState, useEffect } from "react";
import AppButton from "./AppButton";
import MenuIcon from "./MenuIcon.jsx";
import "../index.css";

const MiddleComponent = () => {
  const [width, setWidth] = useState(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (width >= 900) {
      if (scrollPosition > 80) {
        document.getElementById("middle").style.backgroundSize = "150% auto";
      } else {
        document.getElementById("middle").style.backgroundSize = "100% auto";
      }
    }
  }, [width, scrollPosition]);

  return (
    <div id="middle">
      <div
        id="header"
        className="animated slideInDown"
        style={{ animationDelay: "0.8s" }}
      >
        <AppButton />
        <div className="header-links">
          <a className="links" href="#skills">
            skills
          </a>
          <a className="links" href="#work">
            works
          </a>
          <a className="links" href="#contact">
            contact
          </a>
        </div>
      </div>
      <MenuIcon />
      <center>
        <div
          id="tagline"
          className="animated zoomIn"
          style={{ animationDelay: "0.8s" }}
        >
          if you're reading this, that means you can read
          <br />
        </div>
      </center>
    </div>
  );
};

export default MiddleComponent;
