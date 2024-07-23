import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-screen h-screen p-0 m-0">
      <div className="w-full h-[70vh] flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-4xl font-bold">WELCOME TO THE HOMEPAGE</h1>
      </div>
      <div className="w-full h-[30vh] flex items-center justify-center bg-green-500">
        <h1 className="text-white text-4xl font-bold">I'm different</h1>
      </div>
    </div>
  );
};

export default Hero;
