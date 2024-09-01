import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

interface EventsBannerProps {
  eventData?: {
    eventName: string;
    longDesc: string;
    overview: string;
  };
}

const Overview: React.FC<EventsBannerProps> = ({ eventData }) => {
  const { theme } = useTheme();
  useEffect(() => {
    console.log('EventData in Overview component:', eventData);

    if (!eventData) {
      console.warn('No eventData available');
    } else {
      if (!eventData.eventName) console.warn('eventName is missing');
      if (!eventData.overview) console.warn('overview is missing');
      if (!eventData.longDesc) console.warn('longDesc is missing');
    }
  }, [eventData]);

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg shadow-md ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        {eventData?.eventName || 'Event Name Unavailable'}
      </h2>
      <p className="mb-4">
        {eventData?.overview || 'No overview available.'}
      </p>
      <p className="mb-4">
        {eventData?.longDesc || 'No additional description available.'}
      </p>
    </div>
  );
};

export default Overview;
