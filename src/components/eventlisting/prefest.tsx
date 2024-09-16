import React, { useEffect, useState } from "react";
import EventCard from "./eventcard";
import axios from "axios";
import { useTheme } from "next-themes";

const PreFest: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get("https://api.sinusoid.in/events/");
      const filteredEvents = response?.data.filter(
        (event: any) =>
          event?.eventType !== "onfest" && event?.published === true
      );
      setFetchedData(filteredEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setFetchedData([]);
    }
  };

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    const formattedEvents = fetchedData.map((event: any) => ({
      imageSrc: isDark ? "/images/dark.jpg" : "/images/light.jpg",
      altText: "Google AI Essentials",
      eventName: event?.eventName,
      eventTagLine: event?.eventTagline,
      eventStatus: event?.status || "Upcoming",
      registrationStartDate: event?.schedule?.registrationStart,
      registrationEndDate: event?.schedule?.registrationEnd,
      eventStartDate: event?.schedule?.eventStart,
      eventEndDate: event?.schedule?.eventEnd,
      collaborationLogo: isDark ? "/events/Hive Pen.png" : "/events/1.png",
      eventId: event?.eventId,
    }));
    setEvents(formattedEvents);
  }, [fetchedData, isDark]);

  const gridColumns =
    events.length === 1
      ? "grid-cols-1 items-center"
      : events.length === 2
      ? "grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="flex flex-col items-center mt-16 mb-4 px-4">
      {events.length > 0 ? (
        <div className={`grid ${gridColumns} gap-8 justify-center`}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`w-full flex justify-center mb-4 ${
                events.length === 4 && index === 3
                  ? "lg:col-span-3 sm:col-span-2"
                  : ""
              }`}
            >
              <EventCard
                imageSrc={event?.imageSrc}
                altText={event?.altText}
                eventName={event?.eventName}
                eventTagLine={event?.eventTagLine}
                eventStatus={event?.eventStatus}
                registrationStartDate={event?.registrationStartDate}
                registrationEndDate={event?.registrationEndDate}
                eventStartDate={event?.eventStartDate}
                eventEndDate={event?.eventEndDate}
                collaborationLogo={event?.collaborationLogo}
                eventId={event?.eventId}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">Loading....</p>
      )}
    </div>
  );
};

export default PreFest;
