import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface HeroProps {
  lightImage?: string;
  darkImage?: string;
}

const IHero: React.FC<HeroProps> = ({
  lightImage = '/images/Indradhanush/HerLight.webp',
  darkImage = '/images/Indradhanush/HeroDark.webp',
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bottomContainerClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const bannerImage = isDark ? darkImage : lightImage;
  const bannerStyle = bannerImage
    ? { backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden" style={bannerStyle}>
        <div className="absolute w-full h-full flex items-center justify-center">
          <Image
            src="/images/indradhanush/text.svg"
            alt="Text Overlay"
            width={500} // Adjust width as needed
            height={200} // Adjust height as needed
            className="object-contain"
          />
        </div>
      </div>
      <div className={`w-full h-[30vh] flex items-center justify-center ${bottomContainerClass}`}>
        <h1 className="text-4xl font-bold">{"I'm different"}</h1>
      </div>
    </div>
  );
};

export default IHero;
