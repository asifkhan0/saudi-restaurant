import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/hero-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <div className="w-1/2 flex flex-col gap-6">
          <div className="subHeading text-orange">Welcome to Makhmakha</div>
          <h1 className="text-4xl font-bold md:text-6xl">Find Your Best Healthy & Tasty Food.</h1>
          <p className="mt-4 text-lg md:text-lg">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
