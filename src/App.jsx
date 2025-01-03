import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-[#0c0c0c] flex flex-col items-center justify-center ">
        <div className=" w-[100svw] h-[100svh] flex flex-col justify-center items-center">
          <h1 className="z-1 bg-gradient-to-b from-[#f7eee3] to-[#f3bb9d] text-center bg-clip-text text-transparent   text-[6em] font-serif">
            Super charged <br />
            <span className="italic">LMS </span>
            <span className="italic"> with LLM</span>
          </h1>
          <div className="z-2">
            <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-[#1b1b1b] to-[#0c0c0c] inner  rounded-full w-[50rem] h-[50rem]">
              <div className="bg-gradient-to-b  from-[#ff5e00] to-[#0c0c0c] h-[30rem] w-[30rem] rounded-full blur-3xl "></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
