import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface HeroProps {
  lightImage?: string;
  darkImage?: string;
  lightbannerImageSrc?: string;
  darkbannerImageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  lightImage = '/images/light.png',
  darkImage = '/images/dark.png',
  lightbannerImageSrc = '/images/caset_named_light.webp',
  darkbannerImageSrc = '/images/caset_named_dark.webp',
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
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={isDark ? darkbannerImageSrc : lightbannerImageSrc}
            alt={isDark ? 'Dark Banner' : 'Light Banner'}
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={`w-full h-[30vh] flex items-center justify-center ${bottomContainerClass}`}>
        <h1 className="text-4xl font-bold">{"I'm different"}</h1>
      </div>
    </div>
  );
};

export default Hero;
