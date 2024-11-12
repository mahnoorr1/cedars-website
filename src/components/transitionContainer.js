// src/components/BottomToTopTransition.js
import React, { useEffect, useRef, useState } from 'react';
import '../css/transition.css';

const BottomToTopTransition = ({ children, duration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-container ${isVisible ? 'fade-in' : ''}`}
      style={{ '--duration': `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default BottomToTopTransition;
