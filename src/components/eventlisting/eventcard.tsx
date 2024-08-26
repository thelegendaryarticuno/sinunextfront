import React from 'react';

interface EventCardProps {
  imageSrc: string;
  altText: string;
  eventName: string;
  eventTagLine: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  altText,
  eventName,
  eventTagLine,
}) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 w-full md:w-80 lg:w-full relative transform transition-transform duration-300 hover:scale-105 mx-auto"
    >
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 mb-10">
        <h3 className="text-lg font-bold text-black dark:text-gray-200">{eventName}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{eventTagLine}</p>
      </div>
      <button className="absolute bottom-4 right-4 bg-[#FADAC1] dark:bg-blue-500 hover:bg-[#F6723A] dark:hover:bg-blue-700 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Show more
      </button>
    </div>
  );
};

export default EventCard;
