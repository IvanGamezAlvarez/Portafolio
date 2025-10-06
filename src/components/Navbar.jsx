import React, { useState } from "react";

export default function Navbar() {
  //   const [fullScreen, setFullScreen] = useState(true);
  return (
    <>
      <nav className="relative flex items-center justify-center w-screen h-screen ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/birds.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <video className="w-11/12 h-11/12 object-cover" autoPlay muted loop>
            <source src="/videos/mountains.mp4" type="video/mp4" />
          </video>
        </div>
        <a href="" className="relative">
          <img
            className=" absolute inset-0 h-12 translate-1/2 top-1/2 left-9/10"
            src="/imgs/arrow_circle_down.svg"
            alt=""
          />
        </a>

        <div className=" h-full w-full flex flex-col justify-end gap-2 p-10 text-5xl md:text-7xl md:p-30 ">
          <h1 className="relative  text-white font-bold">Ivan Gamez</h1>
          <h2 className="relative text-amber-200 font-bold"> Portafolio</h2>
        </div>
      </nav>
    </>
  );
}
