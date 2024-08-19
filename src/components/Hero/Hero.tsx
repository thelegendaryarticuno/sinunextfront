import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface HeroProps {
  defaultLightImg?: string;
  defaultDarkImg?: string;
  lightbannerImageSrc?: string;
  darkbannerImageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  defaultLightImg = '/images/light.jpg',
  defaultDarkImg = '/images/dark.jpg',
  lightbannerImageSrc = '/images/dark.jpg',
  darkbannerImageSrc = '/images/light.jpg',
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bottomContainerClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const bannerImage = isDark ? defaultDarkImg : defaultLightImg;
  const bannerStyle = bannerImage
    ? { backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };
  const componentImage = isDark ? darkbannerImageSrc : lightbannerImageSrc;

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden" style={bannerStyle}>
        <div className="w-[70%] h-auto flex items-center justify-center">
          {!imageError && (
            <Image
              src={componentImage}
              alt={isDark ? 'Dark Component' : 'Light Component'}
              // You can adjust the width to fit your needs
              fill // Height should maintain the aspect ratio
              
              
              quality={100}
              priority
              onError={() => setImageError(true)}
            />
          )}
          {imageError && (
            <div className="text-center">
              <p className="text-lg font-bold">{isDark ? '' : ''}</p>
              <p className="text-sm"></p>
            </div>
          )}
        </div>
      </div>
      <div className={`w-full h-[30vh] flex items-center justify-center ${bottomContainerClass}`}>
        <h1 className="text-4xl font-bold">{"I'm different"}</h1>
      </div>
    </div>
  );
};

export default Hero;

