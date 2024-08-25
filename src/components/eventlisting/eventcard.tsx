import React from 'react';

interface HeroProps {
    imageSrc: string;
    title: string;
    description: string;
    eventStartDate: string;
    eventEndDate: string;
    registrationStartDate: string;
    registrationEndDate: string;
}

const EventCard: React.FC<HeroProps> = ({
    imageSrc,
    title,
    description,
    eventStartDate,
    eventEndDate,
    registrationStartDate,
    registrationEndDate,
}) => {
    return (
        <div className="bg-[#1D313C] mt-16 mb-4 text-white rounded-lg p-3 w-[40%] h-[30vh] relative flex ml-16">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col justify-between">
                {/* Title */}
                <div className="text-4xl font-bold mb-2 mx-auto">
                    {title}
                </div>

                {/* Image with Overlay */}
                <div className="relative">
                    <img src={imageSrc} alt={title} className="w-full h-[80%] object-cover rounded-lg" />
                    <div className="bg-cyan-950 text-white font-bold absolute bottom-0 left-0 w-full h-[20%] flex items-center justify-center rounded-b-lg">
                        Starts in: xx:xx:xx
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex flex-col justify-between pl-7">
                {/* Description */}
                <div>
                    <p className="className= w-[40%] text-sm mb-2 justify-center mt-6">
                        {description}
                    </p>
                </div>

                {/* Event and Registration Dates */}
                <div className="text-xs">
                    <p>Event start date: {eventStartDate}</p>
                    <p>Event end date: {eventEndDate}</p>
                    {registrationStartDate &&
                        (<p>Registration start date: {registrationStartDate}</p>)
                    }
                    <p>Registration end date: {registrationEndDate}</p>
                </div>

                {/* View Details Button */}
                <div className="flex justify-center mt-3">
                    <button className="bg-[#31869B] hover:bg-[#429498] text-white font-bold py-1 px-4 rounded-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
