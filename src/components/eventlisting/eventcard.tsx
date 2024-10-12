import React from "react";
import { useTheme } from "next-themes";
import dayjs from "dayjs";
import Link from "next/link";

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
  eventId: string;
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
  eventId,
}) => {
  const { theme } = useTheme();
  const currentDate = dayjs();

  const regStart = dayjs(registrationStartDate);
  const regEnd = dayjs(registrationEndDate);
  const eventStart = dayjs(eventStartDate);
  const eventEnd = dayjs(eventEndDate);

  let dateLabel = "";
  let dateInfo = "";

  if (currentDate.isBefore(regStart)) {
    dateLabel = "Registration starts:";
    dateInfo = regStart.format("D MMMM, YYYY");
  } else if (currentDate.isBefore(regEnd)) {
    dateLabel = "Registration ends on:";
    dateInfo = regEnd.format("D MMMM, YYYY");
  } else if (currentDate.isBefore(eventEnd)) {
    dateLabel = "Event ends:";
    dateInfo = eventEnd.format("D MMMM, YYYY");
  } else {
    dateLabel = "Event closed on:";
    dateInfo = eventEnd.format("D MMMM, YYYY");
  }

  const isEventEnded = eventStatus.toLowerCase() === "ended";

  const badgeBgColor = theme === "dark" ? "bg-white" : "bg-black";
  const badgeTextColor = theme === "dark" ? "text-black" : "text-white";
  const cardBackgroundColor = theme === "dark" ? "bg-gray-800" : "bg-zinc-200";
  const cardTextColor = theme === "dark" ? "text-gray-200" : "text-orange-800";
  const cardBorderColor = theme === "light" ? "border-orange-900" : "";

  return (
    <div
      className={`relative flex flex-col w-[95%] ${cardBackgroundColor} ${cardBorderColor} border rounded-md shadow-md p-4 mx-auto h-full min-w-[22rem] md:max-w-[22rem] transition-transform duration-300 ${
        isEventEnded ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
      }`}
    >
      {/* Overlay for "Event Ended" */}
      {isEventEnded && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl px-6 py-3 rounded-md">
            Event Ended
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/eventsdark.png";
          }}
        />
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full ${badgeBgColor} ${badgeTextColor} font-semibold text-xs`}
        >
          {eventStatus}
        </div>
      </div>

      {/* Text Section */}
      <div className="flex-grow mt-4 mb-2">
        <h3 className={`text-lg font-bold ${cardTextColor}`}>{eventName}</h3>
        <p className={`mt-1 ${cardTextColor}`}>{eventTagLine}</p>
        <p className={`mt-2.5 ${cardTextColor}`}>{dateLabel}</p>
        <p className={`font-bold ${cardTextColor}`}>{dateInfo}</p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-2">
        <Link href={`/events/${eventId}`} passHref>
          <button
            className={`bg-orange-400 dark:bg-orange-600 hover:bg-orange-800 dark:hover:bg-orange-800 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isEventEnded ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isEventEnded}
          >
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
