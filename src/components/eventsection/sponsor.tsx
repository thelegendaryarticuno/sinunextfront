// Overview.js
import React from 'react';
import { useTheme } from 'next-themes';

const Sponsor = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Our Sponsors</h2>
      <p className="mb-4">
      Founded 40 years ago on the simple idea of creating innovative products that change the world, Adobe offers groundbreaking technology that empowers everyone, everywhere to imagine, create, and bring any digital experience to life. From students to creative professionals, and from small businesses to the worlds largest enterprises, our customers are using Adobe products to unleash their creativity, accelerate document productivity, and power digital businesses.
      </p>
            
    </div>
  );
};

export default Sponsor;
