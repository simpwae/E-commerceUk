import React from "react";

function Hero() {
  return (
    <div className="h-[33rem] w-full bg-gray-500 ">
      <div className="flex flex-wrap">
        <div className="w-1/2 h-[45vh] bg-pink-400 "></div>
        <div className="w-1/2 h-[45vh] bg-gray-400 "></div>
        <div className="w-1/2 h-[45vh] bg-purple-400 "></div>
        <div className="w-1/2 h-[45vh] bg-green-400 "></div>
      </div>
      <div
        className="h-2/3 w-1/2 bg-bg-white z-40 absolute top-[20.6%] left-[25%]"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
          boxShadow: "2px 3px 34px 4px rgba(0,0,0,0.75)",
        }}
      ></div>
    </div>
  );
}

export default Hero;
