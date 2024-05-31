import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (count) => {
    return Array(count).fill(null).map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} fade />
    ));
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              className="slideshow__img"
              src={image.src}
              alt={image.alt}
            />
            <p className="testimonial-text">{image.text}</p>
          <div className="star-icons">
          {renderStars(5)}
        </div>
          </div>
        ))}
        <button className="prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
        

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      
    </div>
  );
};

export default Testimonials;