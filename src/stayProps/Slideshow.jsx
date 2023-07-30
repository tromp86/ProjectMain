import React, { useState } from "react";

import imagefilm0 from "../assets/project/film0.jpg";
import imagefilm1 from "../assets/project/film1.jpg";
import imagefilm2 from "../assets/project/film2.jpg";

function Slideshow() {
  const images = [
    imagefilm0,
    imagefilm1,
    imagefilm2,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <img className='image' src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button onClick={prevSlide}>Попередній слайд</button>
      <button onClick={nextSlide}>Наступний слайд</button>
    </div>
  );
}

export default Slideshow;