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
  lightImage = '/images/light.jpg',
  darkImage = '/images/dark.jpg',
  lightbannerImageSrc = '/images/.jpg',
  darkbannerImageSrc = '/images/.jpg',
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
  const componentImage = isDark ? darkbannerImageSrc : lightbannerImageSrc;
  const componentStyle = bannerImage
    ? { backgroundImage: `url(${componentImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden" style={bannerStyle}>
        <div className="object-contain flex items-center justify-center" style={componentStyle}>
          <Image
            src={isDark ? darkbannerImageSrc : lightbannerImageSrc}
            alt={isDark ? '' : ''}
            fill
            className="object-contain"
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
