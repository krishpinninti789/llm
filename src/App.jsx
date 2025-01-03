import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Features from "./components/Features";

function App() {
  return (
    <>
      <main className="bg-[#0c0c0c] flex flex-col items-center justify-center m-4 min-h-screen relative">
        <Header />
        {/* Container for the circle */}
        <div className="relative flex items-center justify-center w-[50rem] h-[50rem]">
          {/* Circle */}
          <div className="absolute bg-gradient-to-b from-[#ff5e00] to-[#0c0c0c] h-[30rem] w-[30rem] rounded-full blur-3xl drop-shadow-lg"></div>

          {/* Text */}
          <h1 className="z-10 text-center bg-gradient-to-b from-[#f7eee3] to-[#f3bb9d] bg-clip-text text-transparent text-[6em] font-serif">
            Super charged <br />
            <span className="italic">LMS </span>with
            <span className="italic"> LLM</span>
          </h1>
        </div>
        <div className="w-[100vh] h-[100vh] items-center justify-center box flex">
          <h1 className=" text-[#f7eee3] font-serif text-[6em]">
            Your College <span>👍</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp; ❤️Your AI
          </h1>
        </div>
        <div className="w-[100vh] h-[100vh] items-center justify-center box flex">
          <div className="border-[1px] border-white">
            Introducing{" "}
            <span className="text-orange-500 text-[2rem] rounded-full">.</span>
          </div>
          <div className=" flex-col">
            <div className="text-[#f7eee3] flex  gap-3">
              <h1 className="text-orange-500">SphereML</h1>
              <p>
                SphereLM is our innovative custom-built model developed on top
                of the powerful llama architecture 🦙. This cutting-edge model
                is specifically designed to be compact yet powerful, delivering
                lightning-fast ⚡ performance while maintaining exceptional
                reliability. As a privacy-centric solution🔒, SphereLM adheres
                to strict data protection principles, ensuring that your
                personal information remains completely separate from the
                training process. The model's efficient architecture means it
                can be seamlessly deployed and hosted directly on college
                servers 🏫, providing immediate access while maintaining
                complete institutional control over the infrastructure.
              </p>
            </div>
            <div className="border-[1px] h-full bg-red-600"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
