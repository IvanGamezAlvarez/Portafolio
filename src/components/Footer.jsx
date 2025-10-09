import React from "react";

function Footer() {
  return (
    <div className=" h-30 bg-gray-950">
      <a href="#nav">
        <img
          className=" h-12 rotate-180 m-auto"
          src="/imgs/arrow_circle_down.svg"
          alt=""
        />
      </a>

      <p className="text-white text-xl text-center m-3">Are you lost?</p>
    </div>
  );
}

export default Footer;
