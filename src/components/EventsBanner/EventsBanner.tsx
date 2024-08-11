import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

interface EventsBannerProps {
  lightImage?: string;
  darkImage?: string;
  logo?: string;
}

const EventsBanner: React.FC<EventsBannerProps> = ({
  lightImage = '/images/eventslight.jpg',
  darkImage = '/images/eventsdark.png',
  logo = '/images/text_mc1.png'
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
        className="w-[80%] md:w-[80%] h-[35vh] md:h-[30vh] flex flex-col justify-center pl-4 md:pl-12 text-left mx-auto rounded-lg overflow-hidden"
        style={bannerStyle}
      >
        <div className={`relative z-10 px-4 md:px-8 py-12 flex flex-col`}>
          <div className="flex-grow">
            <h2 className={`text-xl md:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>EVENT NAME</h2>
            <p className={`text-sm md:text-lg mb-4 ${isDark ? 'text-gray-200' : 'text-gray-950'}`}>Event Description</p>
            <div className={`text-sm md:text-md ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              <p><strong>Start Date:</strong> August 10, 2024, 10:00 AM</p>
              <p><strong>End Date:</strong> August 12, 2024, 5:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4">
            <div className="flex items-center order-2 sm:order-1 mt-4 sm:mt-0">
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} mr-2`}>
                Powered by
              </span>
              <Image 
                src="/images/text_mc1.png" 
                alt="sinu logo" 
                className="h-4" 
                height={16}
                width={120}
              />
            </div>
            <Link href='/events' className={`px-4 py-2 rounded sm:w-auto order-1 sm:order-2 ${isDark ? 'bg-white hover:bg-gray-400 text-black' : 'bg-black hover:bg-gray-600 text-white'} transition duration-300`}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
