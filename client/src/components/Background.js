import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Background.css';

const AnimatedBackground = () => {
  useEffect(() => {
    const randomValues = () => {
      anime({
        targets: '.square, .circle, .triangle',
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-300, 300),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.2, 2),
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: randomValues,
      });
    };

    randomValues();
  }, []);

  return (
    <div className="background-container">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
    </div>
  );
};

export default AnimatedBackground;
