import React, { useEffect, useState } from 'react';
import EventCard from './eventcard';
import axios from 'axios';

const Workshop: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get('https://api.sinusoid.in/workshops/');
      const publishedEvents = response?.data.filter((event: any) => event?.published === false);
      setFetchedData(publishedEvents);
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
      eventName: event?.workshopName,
      eventTagLine: event?.workshopTagline,
      eventStatus: event?.status || "Upcoming",
      registrationStartDate: event?.workshopStart,
      registrationEndDate: event?.registrationEndDate,
      eventStartDate: event?.eventStartDate,
      eventEndDate: event?.eventEndDate,
      collaborationLogo: "/logo/logo.png",
      eventId: event?.workshopId,
    }));
    setEvents(formattedEvents);
  }, [fetchedData]);

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-16 mb-4 px-4">
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
  );
};

export default Workshop;
