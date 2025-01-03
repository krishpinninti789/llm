import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Popups = () => {
  const balloonRefs = useRef([null, null, null, null]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create scroll-triggered burst effect for each <p> element
    balloonRefs.current.forEach((balloonRef, index) => {
      gsap.fromTo(
        balloonRef,
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
            trigger: balloonRef,
            start: "top 80%", // Trigger when the element reaches 80% of the viewport height from the top
            end: "bottom 60%", // Optional, you can set an end point if needed
            scrub: false, // No smooth scrubbing
            markers: false, // Set to true for debugging (see scroll trigger markers)
            onEnter: () => {
              createBalloonBurst(balloonRef); // Trigger burst when the balloon comes into view
            },
          },
        }
      );
    });
  }, []);

  // Function to create burst particles
  const createBalloonBurst = (balloonRef) => {
    const particleCount = 10; // Number of particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.backgroundColor = "#FF5722"; // Burst color (orange)
      particle.style.borderRadius = "50%"; // Round particles
      particle.style.pointerEvents = "none"; // Prevent interaction with particles
      particle.style.zIndex = "100"; // Ensure particles are above other content
      document.body.appendChild(particle);

      // Get the position of the balloon (center of the <p> element)
      const rect = balloonRef.getBoundingClientRect();
      console.log(rect);
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height * 7;

      particle.style.left = `${startX - 5}px`; // Adjust for particle center alignment
      particle.style.top = `${startY - 5}px`; // Adjust for particle center alignment

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
          setTimeout(
            () =>
              document.getElementById("popupcontainer").removeChild(balloonRef),
            500
          );
        },
      });
    }
  };

  return (
    <div
      id="popupcontainer"
      className="relative h-[100svh] w-[100svw] bg-[#F7EEE3] flex justify-center items-center flex-col"
    >
      <h1 className="font-serif text-9xl text-center text-brand1 mb-10">
        One place for <br />
        everything
      </h1>

      {/* Balloon 1 (First <p>) */}
      <p
        ref={(el) => (balloonRefs.current[0] = el)}
        className="popups -translate-x-[20rem] -translate-y-[11rem] relative"
      >
        <span>Send the Notes</span>
      </p>

      {/* Balloon 2 (Second <p>) */}
      <p
        ref={(el) => (balloonRefs.current[1] = el)}
        className="popups translate-x-[20rem] -translate-y-[17rem]"
      >
        <span>Send the Notes</span>
      </p>

      {/* Balloon 3 (Third <p>) */}
      <p
        ref={(el) => (balloonRefs.current[2] = el)}
        className="popups -translate-x-[15rem] translate-y-[10rem]"
      >
        <span>Send the Notes</span>
      </p>

      {/* Balloon 4 (Fourth <p>) */}
      <p
        ref={(el) => (balloonRefs.current[3] = el)}
        className="popups translate-x-[23rem] translate-y-[2rem]"
      >
        <span>Send the Notes</span>
      </p>
    </div>
  );
};

export default Popups;
