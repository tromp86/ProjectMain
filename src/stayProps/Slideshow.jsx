import React, { useState } from "react";
import "../product.css";

function Slideshow({ icon }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % icon.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? icon.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <img
        className="image"
        src={icon[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
      />
      <button className="prev" onClick={prevSlide}>◀</button>
      <button className="next" onClick={nextSlide}>▶</button>
    </div>
  );
}

export default Slideshow;