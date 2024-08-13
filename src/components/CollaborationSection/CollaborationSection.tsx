import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type CardProps = {
  title: string;
  imageSrc: string;
};

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg w-full max-w-[300px] md:max-w-[500px] mx-auto overflow-hidden">
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image src={imageSrc} alt={title} fill className="absolute top-0 left-0 object-cover" />
      </div>
      <h3 className="text-lg font-semibold dark:text-white text-center mt-2">{title}</h3>
    </div>
  );
};

type CollaborationSectionProps = {
  image1Src: string;
  image2Src: string;
};

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ image1Src, image2Src }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-[70vh] dark:bg-black bg-white flex items-center justify-center p-2">
      <div className="relative flex-1 p-12 flex flex-col justify-between dark:bg-zinc-950 bg-zinc-200" style={{ minHeight: '70vh' }}>
        <div className="flex flex-col h-full">
          <div className="flex-1 p-4 md:p-12 flex flex-col justify-between">
            <h1 className="dark:text-white text-black text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-[90%] md:max-w-full truncate-3-lines">
              In Collaboration With . . .
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center ml-3.5 mt-8 w-full gap-6 md:gap-4">
            <Card title='' imageSrc={image1Src} />
            <Card title='' imageSrc={image2Src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
