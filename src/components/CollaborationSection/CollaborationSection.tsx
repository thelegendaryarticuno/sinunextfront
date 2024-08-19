import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type CollaborationSectionProps = {
  imageSrc: string;
  text: string;
};

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ imageSrc, text }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-[70vh] dark:bg-black bg-white flex items-center justify-center p-4">
      <div className="relative flex-1 p-8 flex flex-col justify-between dark:bg-zinc-950 bg-zinc-200 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="dark:text-white text-black text-3xl md:text-5xl font-bold mb-6 text-center">
          In Collaboration With . . .
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="relative w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
            <Image
              src={imageSrc}
              alt="Collaboration Logo"
              layout="fill"
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
          <div className="p-4 text-center md:text-left dark:text-white text-black max-w-md">
            <p className="text-lg md:text-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collab: React.FC = () => {
  return (
    <div>
      <CollaborationSection
        imageSrc="/images/NSS LOGO.webp"
        text="NSS: The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. The sole aim of the NSS is to provide hands on experience to young students of 11th & 12th Class of schools at +2 board level, Graduate & Post Graduate level  in delivering community service."
      />
    </div>
  );
};

export default Collab;
