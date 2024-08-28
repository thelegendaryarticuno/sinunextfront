import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

interface EventsBannerProps {
  eventData?: {
    prizes: {
      info: string;
    };
  };
}

const Prize: React.FC<EventsBannerProps> = ({ eventData }) => {
  const { theme } = useTheme();

  // Debugging: Log eventData to check if it has the expected structure
  useEffect(() => {
    console.log('EventData in Prize component:', eventData);

    if (!eventData) {
      console.warn('No eventData available');
    } else if (!eventData.prizes) {
      console.warn('No prizes data available in eventData');
    }
  }, [eventData]);

  return (
    <div>
      <p className={`text-center text-sm mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {eventData?.prizes.info || 'No prize information available'}
      </p>
    </div>
  );
};

export default Prize;
