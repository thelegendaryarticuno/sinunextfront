import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface HeroProps {
  lightImage?: string;
  darkImage?: string;
}

const AboutHero: React.FC<HeroProps> = ({
  lightImage = "/images/light.jpg",
  darkImage = "/images/dark.jpg",
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const bottomContainerClass = isDark
    ? "bg-black text-white"
    : "bg-white text-black";
  const bannerImage = isDark ? darkImage : lightImage;
  const bannerStyle = bannerImage
    ? {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: isDark ? "black" : "white" };

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div
        className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden"
        style={bannerStyle}
      >
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center"></div>
      </div>
      <div
        className={`w-full h-[30vh] flex items-center justify-center ${bottomContainerClass}`}
      >
        <div className="relative w-48 h-48 p-2 my-2">
          <Image
            src="/images/sinuoldie.gif" // replace with the actual path to your GIF
            alt="Hero GIF"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* <iframe
          src="https://chromedino.com/"
          loading="lazy"
          className="absolute w-[100%] h-[30%] z-10 border-none"
          style={{ 
            border: 'none', 
            overflow: 'hidden' 
          }}
        ></iframe> */}
      </div>
    </div>
  );
};

export default AboutHero;
