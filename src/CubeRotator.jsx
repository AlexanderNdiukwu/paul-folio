import React, { useState, useEffect } from 'react';

const words = ['Full-Stack', 'Robotics'];

const GlassCube = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <p className="text-white text-lg md:text-2xl font-semibold text-center max-w-3xl">
        Hi, I'm a{' '}
        <span className="inline-block w-[130px] h-[40px] perspective-[1000px] relative">
          <span
            className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg flex items-center justify-center transition-transform duration-700"
            style={{
              transform: `rotateX(${index % 2 === 0 ? '0deg' : '180deg'})`,
            }}
          >
            {words[index]}
          </span>
        </span>{' '}
        Engineer creating intelligent systems at the intersection of software and machines.
      </p>
    </div>
  );
};

export default GlassCube;
