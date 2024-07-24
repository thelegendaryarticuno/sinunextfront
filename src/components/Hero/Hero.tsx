import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Import images
import lightBanner from '../../../public/images/light.jpg';
import darkBanner from '../../../public/images/dark.jpg';

const Hero: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Use resolvedTheme to get the actual applied theme
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bottomContainerClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const bannerImage = isDark ? darkBanner : lightBanner;

  return (
    <div className="w-full h-screen p-0 m-0">
      <div
        className="w-full h-[70vh] flex flex-col items-center justify-center"
        style={{ 
          backgroundImage: `url(${bannerImage.src})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <h1 className="text-4xl font-bold">siNUsoid</h1>
        <h2 className="text-lg mt-2">The Ultimate Fusion of Technology and Creativity at NIIT University</h2>
      </div>
      <div className={`w-full h-[30vh] flex items-center justify-center ${bottomContainerClass}`}>
        <h1 className="text-4xl font-bold">{"I'm different"}</h1>
      </div>
    </div>
  );
};

export default Hero;
