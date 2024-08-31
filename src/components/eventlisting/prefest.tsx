import React from 'react';
import EventCard from './eventcard';

const PreFest: React.FC = () => {
  const events = [
    {
      imageSrc: "/images/dark.jpg",
      altText: "Google AI Essentials",
      eventName: "Pre fest Sinusoid",
      eventTagLine: "A premier tech event for developers",
      eventStatus: "Ongoing", // Manually set event status
      registrationStartDate: "2024-09-01",  
      registrationEndDate: "2024-09-10",    
      eventStartDate: "2024-09-15",         
      eventEndDate: "2024-09-20",
      collaborationLogo: "/logo/logo.png",           
    },
    {
      imageSrc: "/images/light.jpg",
      altText: "Another Event",
      eventName: "Pre fest Tech Expo",
      eventTagLine: "Explore the latest in tech and innovation",
      eventStatus: "Upcoming", // Manually set event status
      registrationStartDate: "2024-09-05",  
      registrationEndDate: "2024-09-12",    
      eventStartDate: "2024-09-18",         
      eventEndDate: "2024-09-25",           
      collaborationLogo: "/logo/logo.png",  
    },
    // Add more events here if needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-16 mb-4 px-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full md:w-2/3 lg:w-1/3 flex justify-center mb-4 px-2"
        >
          <EventCard
            imageSrc={event.imageSrc}
            altText={event.altText}
            eventName={event.eventName}
            eventTagLine={event.eventTagLine}
            eventStatus={event.eventStatus} // Pass the eventStatus prop
            registrationStartDate={event.registrationStartDate}
            registrationEndDate={event.registrationEndDate}
            eventStartDate={event.eventStartDate}
            eventEndDate={event.eventEndDate}
            collaborationLogo={event.collaborationLogo}

          />
        </div>
      ))}
    </div>
  );
};

export default PreFest;
