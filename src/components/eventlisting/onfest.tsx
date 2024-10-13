import React, { useEffect, useState } from "react";
import EventCard from "./eventcard";
import axios from "axios";

const OnFest: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get("https://api.sinusoid.in/events/");
      const filteredEvents = response?.data.filter(
        (event: any) =>
          event?.eventType !== "prefest" && event?.published === true
      );
      setFetchedData(filteredEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setFetchedData([]);
    }
  };

  const getImageUrl = (fileName: string) =>
    `https://api.sinusoid.in/images/${fileName}`;

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    const formattedEvents = fetchedData.map((event: any) => ({
      imageSrc: getImageUrl(
        event?.imageAsset?.squareBanner?.imgUrl || "/images/eventsdark.png"
      ),
      altText: event?.eventName || "Event Image",
      eventName: event?.eventName,
      eventTagLine: event?.eventTagline,
      eventStatus: event?.status || "Upcoming",
      registrationStartDate: event?.registrationStart,
      registrationEndDate: event?.registrationEnd,
      eventStartDate: event?.eventStart,
      eventEndDate: event?.eventEnd,
      collaborationLogo: getImageUrl("logo.png"),
      eventId: event?.eventId,
    }));
    setEvents(formattedEvents);
  }, [fetchedData]);

  return (
    <div className="flex flex-col items-center mt-16 mb-4 px-4">
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">Coming Soon!</p>
      )}
    </div>
  );
};

export default OnFest;
