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
        We are grateful to our sponsors for their generous support.
      </p>
            
    </div>
  );
};

export default Sponsor;
