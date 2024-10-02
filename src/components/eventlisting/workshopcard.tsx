import React from 'react';
import { useTheme } from 'next-themes';
import dayjs from 'dayjs';
import Link from 'next/link';

interface WorkshopCardProps {
  imageSrc: string;
  altText: string;
  workshopName: string;
  workshopTagLine: string;
  workshopStartDate: string;
  workshopStartTime: string;
  collaborationLogo: string;
  collaborationName: string;
  workshopId: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({
  imageSrc,
  altText,
  workshopName,
  workshopTagLine,
  workshopStartDate,
  workshopStartTime,
  collaborationLogo,
  collaborationName,
  workshopId,
}) => {
  const { theme } = useTheme();

  const workshopStart = dayjs(workshopStartDate);
  const currentDate = dayjs();

  const isUpcoming = currentDate.isBefore(workshopStart);
  const dateInfo = workshopStart.format('DD-MMM-YYYY');

  const cardBackgroundColor = theme === "dark" ? "bg-gray-800" : "bg-zinc-200";
  const cardTextColor = theme === "dark" ? "text-gray-200" : "text-orange-800";
  const cardBorderColor = theme === "light" ? "border-orange-900" : "";

  return (
    <div
      className={`flex flex-col w-[80%] ${cardBackgroundColor} ${cardBorderColor} border rounded-md shadow-md p-4 relative transform transition-transform duration-300 hover:scale-105 mx-auto h-[100%] min-w-19 md:max-w-22 mt-2`} 
    >
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow mt-2 mb-6">
        <h3 className={`text-lg font-bold ${cardTextColor}`}>{workshopName}</h3>
        <p className={`mt-1 ${cardTextColor}`}>{workshopTagLine}</p>
        <p className={`mt-2 ${cardTextColor}`}>
          {isUpcoming ? "Starts on:" : "Event ended on:"}
        </p>
        <p className={`font-bold ${cardTextColor}`}>{dateInfo}</p>
      </div>

      <div className={`flex flex-row items-center justify-between w-full text-[10px] ${cardTextColor} mt-1`}>
        <p className="text-center">In collaboration with</p>
        <div className="flex items-center ml-1">
          <img src={collaborationLogo} alt="Collaboration Logo" className="w-10 h-auto mr-1" />
          <p>{collaborationName}</p>
        </div>
      </div>

       {/* <div className="flex justify-center mt-2 w-full">
        <Link href={`/workshops/${workshopId}`}>
          <button className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-800 dark:hover:bg-orange-800 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Show more
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default WorkshopCard;
