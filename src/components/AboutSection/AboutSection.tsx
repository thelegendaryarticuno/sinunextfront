import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import RetroGrid from '../magicui/retro-grid';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-[70vh] dark:bg-black bg-white flex items-center justify-center p-2">
      <div className="max-w-7xl w-full dark:bg-zinc-900 bg-zinc-200 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row relative">
        <div className="relative flex-1 p-12 flex flex-col justify-between dark:bg-zinc-900 bg-zinc-200" style={{ minHeight: '65vh' }}>
          <div className="flex flex-col md:flex-row h-full">
            <div className="relative w-full md:w-[40%] h-[30vh] md:h-auto flex items-center justify-center md:justify-end">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/logo_red_mc.png" 
                  alt="siNUsoid Logo" 
                  fill
                  className="object-contain p-4 z-20"
                />
              </div>
            </div>
            <div className="flex-1 p-4 md:p-12 flex flex-col justify-between md:ml-12">
              <h1 className="dark:text-white text-black text-5xl md:text-7xl font-bold mb-12">About siNUsoid<br /></h1>
              <h3 className="dark:text-white text-black mb-12 w-full md:w-8/12 font-bold text-l">
                   siNUsoid, NIIT University premier tech fest, has grown into a vibrant hub for both technical and creative exploration.
                   Now in its 8th edition, it brings students together to apply their knowledge in real-world scenarios, offering unique 
                   opportunities to showcase their skills. Each year, siNUsoid pushes creative boundaries, fostering a close-knit community 
                   of curiosity, collaboration, and discovery.
              </h3>
              <div className="mt-auto">
                <div className="flex space-x-6 mb-12">
                  <Link href="/about" passHref className="bg-opacity-100 bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 mb-8 md:ml-12 z-20">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RetroGrid/>
      </div>
    </div>
  );
};

export default AboutSection;
