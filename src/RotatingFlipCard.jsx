// src/components/RotatingFlipCard.jsx
import React, { useState, useEffect } from 'react';

const words = [ 'Robotics','FullStack'];

const RotatingFlipCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
      setIndex(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex items-center justify-center whitespace-nowrap">
      <div className="relative  backdrop-blur-md border whitespace-normal border-white/20 rounded-xl shadow-xl perspective-1000">
        <div className={`flip-y ${flipped ? 'flipped' : ''} whitespace-nowrap  `}>
          <div className="front text-black bg-blue-200 whitespace-nowrap">{words[index]}</div>
          <div className="back text-blue bg-amber-300 whitespace-normal ">
            {words[(index + 1) % words.length]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingFlipCard;
