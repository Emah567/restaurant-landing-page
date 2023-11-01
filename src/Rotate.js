import React, { useState, useEffect } from 'react';
import './rotate.css';
import './media.css'

const Rotate = () => {
  const circleBoxData = [
    { bgColor: 'bg-green', text: 'Fried Rice' },
    { bgColor: 'bg-blue', text: 'Text 2' },
    { bgColor: 'bg-white', text: 'Text 3' },
    { bgColor: 'bg-yellow', text: 'Text 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % circleBoxData.length);
        
        // Reset slideOut state after changing the content
        setSlideOut(false);
      }, 500); // Wait for the slide out animation to complete

    }, 8000); // Set the interval time (8 seconds)

    return () => clearInterval(interval);
  }, [circleBoxData.length]);

  return (
    <div className="animation-container">
      <div className={`circle-box ${slideOut ? 'slide-out' : ''}`}>
        <div className={`circle-image ${circleBoxData[currentIndex].bgColor}`} />
        <div className={`text-line ${slideOut ? 'slide-out' : ''}`}>
          {circleBoxData[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default Rotate;
