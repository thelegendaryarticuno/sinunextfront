import React from 'react';
import Image from 'next/image';

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
        <div className="bg-[#1D313C] dark:bg-gray-800 text-white dark:text-gray-300 rounded-lg p-4 
                        w-full lg:w-[90%] 
                        h-auto lg:h-[40vh] 
                        relative flex flex-col lg:flex-row overflow-hidden">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col justify-between">
                {/* Title */}
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left overflow-hidden ml-2 text-ellipsis">
                    {title}
                </div>

                {/* Image with Overlay */}
                <div > {/* Reduce top margin to decrease the gap */}
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        layout="responsive" 
                        width={130} 
                        height={150}  
                        className="object-cover rounded-lg" 
                    />
                    
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col justify-between lg:pl-4 mt-4 lg:mt-0">
                {/* Description */}
                <div>
                    <p className="text-sm mb-2 text-center lg:text-left break-words">
                        {description}
                    </p>
                </div>

                {/* Event and Registration Dates */}
                <div className="text-xs mt-2 text-center md:text-center lg:text-left">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">Event start date: {eventStartDate}</p>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">Event end date: {eventEndDate}</p>
                    {registrationStartDate &&
                        (<p className="whitespace-nowrap overflow-hidden text-ellipsis">Registration start date: {registrationStartDate}</p>)
                    }
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">Registration end date: {registrationEndDate}</p>
                </div>

                {/* View Details Button */}
                <div className="flex justify-center lg:justify-start mt-4">
                    <button className="bg-[#31869B] hover:bg-[#429498] text-white dark:bg-[#31869B] dark:hover:bg-[#429498] font-bold py-1 px-4 rounded-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
