import React from "react";

function Hero() {
  return (
    <section className="w-screen min-h-[60vh] h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">
        Welcome to Our Store
      </h1>
      <p className="text-lg md:text-2xl mb-10 text-center max-w-2xl mx-auto opacity-90">
        Discover amazing products and unbeatable deals. Shop now and enjoy a
        seamless experience!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded shadow hover:bg-indigo-100 hover:scale-105 transition-all duration-200">
          Shop Now
        </button>
        <button className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded shadow hover:bg-indigo-800 hover:scale-105 transition-all duration-200">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
