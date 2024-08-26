import React from 'react';
import EventCard from './eventcard'; // Adjust the path if necessary

const OnFest: React.FC = () => {
    // Dummy data for the event cards
    const eventCardsData = [
        {
            imageSrc: '/images/dark.jpg',
            title: 'Event 1',
            description: 'Description for event 1. This event is about...',
            eventStartDate: '2024-09-01',
            eventEndDate: '2024-09-03',
            registrationStartDate: '2024-08-01',
            registrationEndDate: '2024-08-31',
        },
        {
            imageSrc: '/images/dark.jpg',
            title: 'Event 2',
            description: 'Description for event 2. This event is about...',
            eventStartDate: '2024-09-05',
            eventEndDate: '2024-09-07',
            registrationStartDate: '2024-08-05',
            registrationEndDate: '2024-09-04',
        },
        // Add more event data as needed
    ];

    return (
        <div className="container mx-auto py-8 px-4 mt-16 flex justify-center">
            <div className="grid grid-cols-1 my-4 md:grid-cols-2 gap-8 justify-items-center w-full lg:w-4/5">
                {eventCardsData.concat(eventCardsData, eventCardsData, eventCardsData).map((event, index) => (
                    <div key={index}>
                        <EventCard
                            imageSrc={event.imageSrc}
                            title={event.title}
                            description={event.description}
                            eventStartDate={event.eventStartDate}
                            eventEndDate={event.eventEndDate}
                            registrationStartDate={event.registrationStartDate}
                            registrationEndDate={event.registrationEndDate}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnFest;
