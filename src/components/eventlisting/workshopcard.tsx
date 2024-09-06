import React from 'react';
import { useTheme } from 'next-themes';
import dayjs from 'dayjs';
import Link from 'next/link'; // Import the Link component from Next.js

interface WorkshopCardProps {
  imageSrc: string;
  altText: string;
  workshopName: string;
  workshopTagLine: string;
  workshopStartDate: string;
  workshopStartTime: string;
  collaborationLogo: string;
  collaborationName: string;
  workshopId: string; // Add workshopId as a prop
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
  workshopId, // Destructure workshopId
}) => {
  const { theme } = useTheme();

  // Parse the workshop start date
  const workshopStart = dayjs(workshopStartDate);
  // Get the current date
  const currentDate = dayjs();

  // Compare the dates
  const isUpcoming = currentDate.isBefore(workshopStart);
  const dateInfo = workshopStart.format('DD-MMM-YYYY');

  const badgeBgColor = theme === "dark" ? "bg-white" : "bg-black";
  const badgeTextColor = theme === "dark" ? "text-black" : "text-white";
  const cardBackgroundColor = theme === "dark" ? "bg-gray-800" : "bg-zinc-200";
  const cardTextColor = theme === "dark" ? "text-gray-200" : "text-orange-800";
  const cardBorderColor = theme === "light" ? "border-orange-900" : "";

  return (
    <div
      className={`flex flex-col w-[95%] ${cardBackgroundColor} ${cardBorderColor} border rounded-md shadow-md p-4 relative transform transition-transform duration-300 hover:scale-105 mx-auto h-[100%] min-w-19 md:max-w-22`}
    >
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow mt-4 mb-6">
        <h3 className={`text-lg font-bold ${cardTextColor}`}>{workshopName}</h3>
        <p className={`mt-1 ${cardTextColor}`}>{workshopTagLine}</p>
        <p className={`mt-2.5 ${cardTextColor}`}>
          {isUpcoming ? "Starts on:" : "Event ended on:"}
        </p>
        <p className={`font-bold ${cardTextColor}`}>{dateInfo}</p>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center">
        {/* Wrap the button with the Link component */}
        <Link href={`/workshops/${workshopId}`} passHref className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-800 dark:hover:bg-orange-800 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Show more
        </Link>
        <div className={`flex flex-col md:flex-row items-center text-xs ${cardTextColor} mt-5`}>
          <p>In collaboration with</p>
          <div className="flex items-center mt-2">
            <img src={collaborationLogo} alt="Collaboration Logo" className="w-12 h-auto" />
          </div>
          <div>
          <p className="ml-1 text-center">{collaborationName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
