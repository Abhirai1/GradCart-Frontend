import React, { useState, useEffect } from 'react';
import './SlidingImages.css';

// Define a type for the slide items
interface Slide {
  imageSrc: string;
  link: string;
}

// Slider component
const ImageSlider: React.FC = () => {
  const slides: Slide[] = [
    { imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1957c92d54dccbb8.jpg?q=20', link: 'https://www.flipkart.com' },
    { imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b30b72df83baa666.jpg?q=20', link: 'https://www.flipkart.com' },
    { imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/583b2ae9f3f8b334.jpg?q=20', link: 'https://www.flipkart.com' },
    { imageSrc: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1316eb53d6f52c71.jpg?q=20', link: 'https://www.flipkart.com' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="slide-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <a href={slide.link}>
                <img src={slide.imageSrc} alt={`Slide ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
