import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Popups = () => {
  const balloonRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create scroll-triggered burst effect
    gsap.fromTo(
      balloonRef.current,
      {
        scale: 1, // Start scale 0 (hidden)
        opacity: 1, // Start with hidden opacity
      },
      {
        scale: 1.5, // Inflate balloon
        opacity: 0, // Make it visible
        duration: 0.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: balloonRef.current,
          start: "top 80%", // Trigger when element enters the viewport (80%)
          end: "bottom 60%", // Trigger stop when bottom of the element reaches 60% of the viewport
          scrub: false, // No smooth scrubbing
          markers: false, // Set to true for debugging (see scroll trigger markers)
          onEnter: () => {
            createBalloonBurst(); // Trigger burst when the balloon comes into view
          },
        },
      }
    );
  }, []);

  // Function to create burst particles
  const createBalloonBurst = () => {
    // Create burst particles
    const particleCount = 10; // Number of particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.backgroundColor = "#FF5722"; // Burst color (orange)
      particle.style.borderRadius = "50%"; // Round particles
      particle.style.pointerEvents = "none"; // Prevent interaction with particles
      document.body.appendChild(particle);

      // Set initial position (center of balloon)
      const startX =
        balloonRef.current.offsetLeft - balloonRef.current.offsetWidth;
      const startY =
        balloonRef.current.offsetTop - balloonRef.current.offsetHeight - 90;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;

      // Animate particles scattering outward
      gsap.to(particle, {
        x: gsap.utils.random(-200, 200), // Random horizontal movement
        y: gsap.utils.random(-200, 200), // Random vertical movement
        opacity: 0,
        scale: 0.5,
        duration: 0.9,
        ease: "power2.out",
        onComplete: () => {
          particle.remove(); // Remove particle after animation completes
        },
      });
    }

    // gsap.from(balloonRef.current, {
    //   scale: 1,
    //   opacity: 1,
    // });

    // Balloon burst animation: shrink and rotate
    // gsap.to(balloonRef.current, {
    //   scale: 2, // Shrink balloon to 0
    //   opacity: 0, // Fade out balloon
    //   // Rotate during the burst
    //   duration: 0.1,
    //   // ease: "power1.out",
    // });
  };

  return (
    <div className="relative h-[100svh] w-[100svw] bg-[#F7EEE3] flex justify-center items-center flex-col">
      <h1 className="font-serif text-9xl text-center text-brand1 mb-10">
        One place for <br />
        everything
      </h1>

      {/* Balloon 1 (First <p>) */}
      <p
        ref={balloonRef}
        className="popups -translate-x-[20rem] -translate-y-[11rem] relative" // Make sure it's positioned relative
      >
        <span>Send the Notes</span>
      </p>

      {/* Other balloons */}
      <p className="popups translate-x-[20rem] -translate-y-[17rem]">
        <span>Send the Notes</span>
      </p>
      <p className="popups -translate-x-[15rem] translate-y-[10rem]">
        <span>Send the Notes</span>
      </p>
      <p className="popups translate-x-[23rem] translate-y-[2rem]">
        <span>Send the Notes</span>
      </p>
    </div>
  );
};

export default Popups;
