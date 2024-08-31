import React, { useEffect, useState } from 'react';
import EventCard from './eventcard';
import axios from 'axios';

const OnFest: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]); // State to store raw fetched data

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get('https://api.sinusoid.in/events/');
      setFetchedData(response?.data); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching events:", error);
      setFetchedData([]); // Set to an empty array in case of error
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
      registrationStartDate: event?.registrationStartDate,  
      registrationEndDate: event?.registrationEndDate,  
      eventStartDate: event?.eventStartDate,  
      eventEndDate: event?.eventEndDate,  
      collaborationLogo: "/logo/logo.png",  // Constant value
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
          />
        </div>
      ))}
    </div>
  );
};

export default OnFest;
