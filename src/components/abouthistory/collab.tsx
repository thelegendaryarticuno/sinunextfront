import React from 'react';
import { useTheme } from 'next-themes';
import SlideShow from '../aboutimage/image';

type CollaborationSectionProps = {
  imageSrc: string;
  text: string;
};

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ imageSrc, text }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-[40vh] py-4 dark:bg-black bg-white flex items-center justify-center px-4 sm:px-8">
      <div className="relative flex-1 py-4 flex flex-col justify-between dark:bg-zinc-950 bg-zinc-200 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="dark:text-white text-black text-3xl md:text-5xl font-bold mb-6 text-center">
          History of siNUsoid
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-full gap-8 lg:gap-16 md:max-w-full">
          <SlideShow />
          <div className="flex flex-col py-4 px-4 text-center md:text-left dark:text-white text-black max-w-md lg:ml-14">
            <p className="text-md md:text-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutHistory: React.FC = () => {
  return (
    <div>
      <CollaborationSection
        imageSrc="/logo/logo.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default AboutHistory;
