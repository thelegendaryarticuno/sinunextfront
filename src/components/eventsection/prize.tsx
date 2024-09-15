import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/components/Redux/store';
import { useTheme } from 'next-themes';

const Prize: React.FC = () => {
  const { theme } = useTheme();
  const eventData = useSelector((state: RootState) => state.event.eventData); // Fetch eventData from Redux

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
        {eventData?.prizes?.length ? eventData.prizes.join(', ') : 'No prize information available'}
      </p>
    </div>
  );
};

export default Prize;
