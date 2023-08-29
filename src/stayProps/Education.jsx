import React from "react";
import { useInView } from "react-intersection-observer";
import imageDiploma from "../assets/diploma.jpg";

function Education() {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const handleIntersection = (isVisible) => {
    const divEd = document.getElementById("divEd");
    const divEd1 = document.getElementById("divEd1");
    const container = document.getElementById("container");
    if (divEd && divEd1 && container) {
      divEd.style.display = "flex";
      // if (isVisible) {
      //   divEd.classList.add("divEd");
      //   divEd1.classList.add("divEd1");
      // } else {
      //   divEd.classList.remove("divEd");
      //   divEd1.classList.remove("divEd1");
      // }

      if (isVisible) {
        divEd.classList.add("divEd");
        divEd1.classList.add("divEd1");
        container.classList.add("containerAdd");
        container.classList.add("containerAddBorder");
      } else {
        divEd.classList.remove("divEd");
        divEd1.classList.remove("divEd1");
        container.classList.remove("containerAdd");
        container.classList.remove("containerAddBorder");
      }
    }
  };

  const imageStyle = {
    width: "700px",
    height: "100%",
  };

  React.useEffect(() => {
    handleIntersection(inView);
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <div id="container" className="container">
        <div id="divEd" className="divEdMain">
            <img src={imageDiploma} alt="Деякий опис" style={imageStyle} />
          </div>
          <div id="divEd1" className="divEdMainRight">
            <h1>
              Front-end{" "}
              <b style={{ color: "#ff416c", fontSize: "2rem" }}>development</b>
            </h1>
            <ul>
              <li>Creating Web Pages with HTML5 and CSS3</li>
              <li>Developing Client-Side Scripts with JavaScript</li>
              <li>Usage of Angular and React</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Education;
