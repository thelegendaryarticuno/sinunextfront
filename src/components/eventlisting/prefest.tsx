import React from 'react';
import EventCard from './eventcard';

const PreFest: React.FC = () => {
  const events = [
    {
      imageSrc: "/images/dark.jpg",
      altText: "Google AI Essentials",
      eventName: "Pre fest Sinusoid",
      eventTagLine: "A premier tech event for developers",
    },
    {
      imageSrc: "/images/light.jpg",
      altText: "Another Event",
      eventName: "Prefest Tech Expo",
      eventTagLine: "Explore the latest in tech and innovation",
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
          />
        </div>
      ))}
    </div>
  );
};

export default PreFest;
