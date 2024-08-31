import React from 'react';
import { useTheme } from 'next-themes';
import dayjs from 'dayjs';

interface EventCardProps {
  imageSrc: string;
  altText: string;
  eventName: string;
  eventTagLine: string;
  eventStatus: string;
  registrationStartDate: string;
  registrationEndDate: string;
  eventStartDate: string;
  eventEndDate: string;
  collaborationLogo: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  altText,
  eventName,
  eventTagLine,
  eventStatus,
  registrationStartDate,
  registrationEndDate,
  eventStartDate,
  eventEndDate,
  collaborationLogo,
}) => {
  const { theme } = useTheme();
  const currentDate = dayjs();

  const regStart = dayjs(registrationStartDate);
  const regEnd = dayjs(registrationEndDate);
  const eventStart = dayjs(eventStartDate);
  const eventEnd = dayjs(eventEndDate);

  let dateInfo = '';

  if (currentDate.isBefore(regStart)) {
    dateInfo = `Registration starts: ${regStart.format('DD-MM-YYYY')}`;
  } else if (currentDate.isBefore(regEnd)) {
    dateInfo = `Registration ends: ${regEnd.format('DD-MM-YYYY')}`;
  } else if (currentDate.isBefore(eventStart)) {
    dateInfo = `Event starts: ${eventStart.format('DD-MM-YYYY')}`;
  } else if (currentDate.isBefore(eventEnd)) {
    dateInfo = `Event ends: ${eventEnd.format('DD-MM-YYYY')}`;
  } else {
    dateInfo = `Event closed on: ${eventEnd.format('DD-MM-YYYY')}`;
  }

  const badgeBgColor = theme === "dark" ? "bg-white" : "bg-black";
  const badgeTextColor = theme === "dark" ? "text-black" : "text-white";

  return (
    <div
      className="flex flex-col bg-white dark:bg-gray-800 rounded-md shadow-md p-4 relative transform transition-transform duration-300 hover:scale-105 mx-auto h-[100%] md:max-w-22 lg:min-w-19">
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full ${badgeBgColor} ${badgeTextColor} font-semibold text-xs`}
        >
          {eventStatus}
        </div>
      </div>
      <div className="flex-grow mt-4 mb-6">
        <h3 className="text-lg font-bold text-black dark:text-gray-200">{eventName}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{eventTagLine}</p>
        <p className="text-gray-600 dark:text-gray-400 font-bold mt-1">{dateInfo}</p>
      </div>
      
      {/* Collaboration and Show More Button */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-auto">
        <button className="bg-[#FADAC1] dark:bg-blue-500 hover:bg-[#F6723A] dark:hover:bg-blue-700 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Show more
        </button>
        <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 md:mt-3">
          <span>In collaboration with </span>
          <img src={collaborationLogo} alt="Collaboration Logo" className="ml-2 w-12 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
