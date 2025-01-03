import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Features from "./components/Features";
import Popups from "./components/Popups";
import { Quote } from "lucide-react";

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
        <div className="w-[100vh] h-[100vh] items-start gap-3 justify-center box flex flex-col">
          <div className=" flex  items-center justify-center border-[1px] border-white gap-3 text-[#f7eee3] rounded-full px-3">
            <h1>
              Introducing<span className="text-[#f17929]">.</span>
            </h1>
          </div>
          <div className=" flex gap-10">
            <div className="text-[#f7eee3] flex flex-col w-3/4   gap-3">
              <h1 className="text-orange-500 text-[4em] font-serif">
                SphereLM
              </h1>
              <p className="font-serif text-[2em] tracking-tight leading-tight">
                SphereLM is our innovative custom-built model developed on top
                of the powerful llama architecture 🦙.{" "}
                <span className="text-[#f7eee3]/70">
                  This cutting-edge model is specifically designed to be compact
                  yet powerful, delivering lightning-fast{" "}
                </span>
                ⚡ performance while maintaining exceptional reliability. As a
                privacy-centric solution🔒, SphereLM adheres to strict data
                protection principles, ensuring that your personal information
                remains completely separate from the training process.{" "}
                <span className="text-[#f7eee3]/70">
                  The model's efficient architecture means it can be seamlessly
                  deployed and hosted directly on college servers{" "}
                </span>
                🏫, providing immediate access while maintaining complete
                institutional control over the infrastructure.
              </p>
            </div>
            <div className="border-[1px] h-full w-1/4 rounded-2xl bg-gradient-to-b from-orange-600 to-orange-100 shd"></div>
          </div>
        </div>
        <div className="w-[100vh] h-[100vh]">
          <h1 className="z-10 leading-[6rem] text-center bg-gradient-to-b from-[#f7eee3] to-[#f07432] bg-clip-text text-transparent text-[6em] font-serif">
            Just drop the notes into the <br /> REPO & see the magic how <br />{" "}
            your AI is trined on your <br /> resources
          </h1>
        </div>
        <div>
          <Popups />
        </div>
        <div className="w-[100vh] h-[100vh] "></div>
        <div className="w-[100vh] h-[100vh] text-[3em] font-serif">
          <h1 className="text-[#f7eee3]">
            {" "}
            Why should <span className="text-orange-700">you ? </span>
          </h1>
          <br />
          <span className="text-[#f7eee3]/60">
            
            <Quote size={48} className="transform scale-x-[-1]" />
          </span>
          
          <p className="text-[#f7eee3]">
            SphereML is a small model ❤️built on top of the llama . which can be
            self hosted on the your own collage servers for better privacy and
            transparency😁
          </p>
          <p className="text-[#f7eee3]">
            SphereML is a small model built on top of the llama . which can be
            self hosted on the your own collage servers for better privacy and
            transparency
          </p>
          <span className="text-[#f7eee3]/60 flex justify-center ">
            <Quote size={48} />
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
