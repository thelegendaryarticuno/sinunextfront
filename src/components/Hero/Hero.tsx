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
  lightbannerImageSrc = '/images/lightBackground.png',
  darkbannerImageSrc = '/images/dark.jpg',
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [lightImageError, setLightImageError] = useState(false);
  const [darkImageError, setDarkImageError] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bottomContainerClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const bannerImage = isDark
    ? (darkImageError ? defaultDarkImg : darkbannerImageSrc)
    : (lightImageError ? defaultLightImg : lightbannerImageSrc);

  const bannerStyle = bannerImage
    ? { backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden" style={bannerStyle}>
        <div className="w-[70%] h-auto flex items-center justify-center">
          {!isDark && !lightImageError && (
            <Image
              src={lightbannerImageSrc}
              alt="Light Component"
              fill
              quality={100}
              priority
              onError={() => setLightImageError(true)}
            />
          )}
          {isDark && !darkImageError && (
            <Image
              src={darkbannerImageSrc}
              alt="Dark Component"
              fill
              quality={100}
              priority
              onError={() => setDarkImageError(true)}
            />
          )}
          {(isDark && darkImageError) && (
            <Image
              src={defaultDarkImg}
              alt="Default Dark Component"
              fill
              quality={100}
              priority
            />
          )}
          {(!isDark && lightImageError) && (
            <Image
              src={defaultLightImg}
              alt="Default Light Component"
              fill
              quality={100}
              priority
            />
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
