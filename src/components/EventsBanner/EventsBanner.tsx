import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface EventsBannerProps {
  lightImage?: string;
  darkImage?: string;
  logo?: string;
}

const EventsBanner: React.FC<EventsBannerProps> = ({ lightImage = '/images/eventslight.jpg', darkImage = '/images/eventsdark.png', logo = '/images/text_mc1.png' }) => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bannerImage = isDark ? darkImage : lightImage;
  const bannerStyle = bannerImage
    ? { backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };

  return (
    <div className="relative w-full h-screen p-0 m-0 overflow-hidden">
      <div 
        className="w-[80%] h-[40vh] md:h-[30vh] flex flex-col md:justify-center items-start pl-12 text-left relative mx-auto rounded-lg overflow-hidden my-20"
        style={bannerStyle} 
      >
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-2 mt-10 md:mb-0 md:mt-0">EVENT NAME</h1>
          <h2 className="text-xl mt-2">Event Description.</h2>
          <div className="mt-10 text-lg"> 
            <p><strong>Start Date:</strong> August 10, 2024, 10:00 AM</p>
            <p><strong>End Date:</strong> August 12, 2024, 5:00 PM</p>
          </div>
        </div>
        <Link
          href="#learn-more"
          className="md:mb-0 mb-20 absolute md:bottom-8 md:right-8 bottom-2 bg-black text-white dark:bg-white dark:text-black py-3 px-6 text-lg rounded-md shadow-md dark:hover:bg-gray-300 hover:bg-gray-700 transition duration-300"
        >
          Learn More
        </Link>
        <div className="absolute bottom-4 left-8 flex items-center space-x-2">
          <span className="text-sm text-gray-700 dark:text-gray-400 transition">Powered by</span>
          <img src={logo} alt="Logo" className="h-4 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
