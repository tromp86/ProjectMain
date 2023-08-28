import React from "react";
import { useInView } from "react-intersection-observer";
import imageDiploma from "../assets/diploma.jpg";

function Education() {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const handleIntersection = (isVisible) => {
    const divEd = document.getElementById("divEd");
    if (divEd) {
      divEd.style.display = "flex";
      if (isVisible) {
        divEd.classList.add("divEd");
      } else {
        divEd.classList.remove("divEd");
      }
    }
  };

  const imageStyle = {
    width: "600px",
    height: "100%",
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <div id="divEd" className="divEdMain">
      <h1>Frontend</h1>
        <img src={imageDiploma} alt="Деякий опис" style={imageStyle} />
      </div>
    </div>
  );
}

export default Education;
