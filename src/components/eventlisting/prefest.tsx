import React, { useEffect, useState } from 'react';
import EventCard from './eventcard';
import axios from 'axios';

const OnFest: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get('https://api.sinusoid.in/events/');
      // Filter for events with published status as false
      const filteredEvents = response?.data.filter((event: any) =>
        event?.published === true
      );
      setFetchedData(filteredEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setFetchedData([]);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    const formattedEvents = fetchedData.map((event: any) => ({
      imageSrc: "/images/light.jpg",
      altText: "Google AI Essentials",
      eventName: event?.eventName,
      eventTagLine: event?.eventTagline,
      eventStatus: event?.status || "Upcoming",
      registrationStartDate: event?.schedule?.registrationStart, // Accessing dates from schedule
      registrationEndDate: event?.schedule?.registrationEnd,     // Accessing dates from schedule
      eventStartDate: event?.schedule?.eventStart,               // Accessing dates from schedule
      eventEndDate: event?.schedule?.eventEnd,                   // Accessing dates from schedule
      collaborationLogo: "/events/Hive Pen.png",
      eventId: event?.eventId,
    }));
    setEvents(formattedEvents);
  }, [fetchedData]);

  return (
    <div className="flex flex-col items-center mt-16 mb-4 px-4">
      {events.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full md:w-2/3 lg:w-1/3 flex justify-center mb-4 px-2"
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
        <p className="text-center text-lg font-semibold">
          No events right now. Join us and stay tuned for more.
        </p>
      )}
    </div>
  );
};

export default OnFest;
