import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import PulsatingButton from '../ui/pulsatingbutton';

interface EventsBannerProps {
  lightImage?: string;
  darkImage?: string;
  logo?: string;
  rightImage?: string;
}

const EventsBanner: React.FC<EventsBannerProps> = ({
  lightImage = '/images/eventslight.jpg',
  darkImage = '/images/eventsdark.png',
  logo = '/images/text_mc1.png',
  rightImage = '/images/right.png'
}) => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const bannerImage = isDark ? darkImage : lightImage;
  const bannerStyle = bannerImage
    ? { backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: isDark ? 'black' : 'white' };

  return (
    <div className="relative w-full overflow-hidden my-20">
      <div
        className="w-[90%] md:w-[80%] h-[45vh] md:h-[40vh] flex flex-col justify-center pl-4 md:pl-12 text-left mx-auto rounded-lg overflow-hidden"
        style={bannerStyle}
      >
        <div className="relative z-10 p-8 md:px-12 py-2 flex flex-col md:flex-row h-full justify-between items-start md:items-center">
          <div className="flex-1">
            <h2 className={`text-2xl mt-3 md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              EVENT NAME
            </h2>
            <p className={`text-sm md:text-lg mb-6 ${isDark ? 'text-gray-200' : 'text-gray-950'}`}>
              Event Description
            </p>
            <div className="flex flex-col md:flex-row md:items-start mb-4">
              <div className="flex flex-row text-base md:text-md mb-2 md:mb-0 md:mr-4">
                <div className="mr-4">
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Start Date:</p>
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    <strong>August 10, 2024, 10:00 AM</strong>
                  </p>
                </div>
                <div className="ml-4">
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-900'}`}>End Date:</p>
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    <strong>August 12, 2024, 5:00 PM</strong>
                  </p>
                </div>
              </div>
            </div>
            <PulsatingButton />
          </div>

               
          <div className="mt-6 ml-auto mr-8 hidden md:block">
            <Image 
              src={rightImage} 
              alt="Event illustration" 
              className="rounded-lg"
              width={200} 
              height={100} 
            />
          </div>
        </div>

        <div className="flex justify-start md:justify-between items-center mt-1 md:mt-2">
          <div className="flex items-center ml-12 mb-4">
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mr-2`}>Powered by</span>
            <Image 
              src={logo} 
              alt="sinu logo" 
              className="h-4" 
              height={16}
              width={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
