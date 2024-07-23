// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
      <footer className="bg-gray-800 p-4 text-white text-center">
          <div></div>
      <p>&copy; {new Date().getFullYear()} siNUsoid v8</p>
    </footer>
  );
};

export default Footer;
