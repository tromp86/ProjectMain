import React, { useRef, useState } from "react";
import imagesDiploma from "../../assets/diploma.jpg";

function ImageDiploma() {
  const containerRef = useRef(null);
  const [currentRotate, setCurrentRotate] = useState({ x: "", y: "", z: ""});
  let timer = useRef(null);

  const calculateRotation = (event, rect) => {
    const x = event.clientX - rect.left - rect.width / 3;
    const y = event.clientY - rect.top - rect.height / 3;
    const z = (x + y) / 160;

    let rotationX = Math.abs(y / (rect.height / 3)) * 8;
    let rotationY = Math.abs(x / (rect.width / 3)) * 8;

    if (x > 0 && y > 0) {
      return { x: -rotationX, y: rotationY, z };
    } else if (x < 0 && y > 0) {
      return { x: -rotationX, y: -rotationY, z };
    } else if (x < 0 && y < 0) {
      return { x: rotationX, y: -rotationY, z };
    } else {
      return { x: rotationX, y: rotationY, z };
    }
  };

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const rotate = calculateRotation(event, rect);
    setCurrentRotate(rotate);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
        setCurrentRotate({ x: 0, y: 0, z: 0 });
      }, 2000);
  };

  const imageStyle = {
    width: "700px",
  };
  return (
    // <div>
    //   <img src={imagesDiploma} alt="Деякий опис" style={imageStyle} />
    // </div>

    <div
      ref={containerRef}
      id="container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        id="myImage"
        src={imagesDiploma}
        alt="A beautiful scenery"
        style={{
          ...imageStyle,
          transform: `rotateX(${currentRotate.x}deg) rotateY(${currentRotate.y}deg) rotateZ(${currentRotate.z}deg)`,
        }}
      />
    </div>
  );
}

export default ImageDiploma;
