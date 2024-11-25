import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

const RotatingText = () => {
  const titles = ["Loading", "Processing", "Finalizing", "Complete"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll("span"); // Select all characters
      const tl = gsap.timeline();

      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: 40,
          rotateX: -20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.4,
          stagger: 0.02, // Stagger the animation for each character
        }
      ).to(
        chars,
        {
          opacity: 0,
          y: -50,
          rotateX: 90,
          duration: 0.4,
          stagger: 0.02, // Apply stagger to make them disappear progressively
        },
        "+=1" // Delay before starting this animation
      );
    }
  }, [currentIndex]); // Re-run animation when the title changes

  return (
    <div className="absolute z-50 top-[28%] left-[47%] text-center">
      <p ref={textRef} className="text-white text-2xl font-bold leading-none">
        {titles[currentIndex].split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RotatingText;
