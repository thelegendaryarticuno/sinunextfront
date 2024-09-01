import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface EventsBannerProps {
  eventData?: {
    rules: string[];
  };
}

const Rule: React.FC<EventsBannerProps> = ({ eventData }) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('EventData in Rule component:', eventData);

    if (!eventData) {
      console.warn('No eventData available');
    } else if (!eventData.rules) {
      console.warn('No rules data available in eventData');
    }
  }, [eventData]);

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg shadow-md ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Rules</h1>
      <ul className="list-disc list-inside space-y-2">
        {eventData?.rules?.length ? (
          eventData.rules.map((rule, index) => <li key={index}>{rule}</li>)
        ) : (
          <li>No rules available</li>
        )}
      </ul>
      <p className="mt-4">
        In case of any query,{' '}
        <Link href="/about" className="text-blue-500">
          Contact Us
        </Link>
      </p>
    </div>
  );
};

export default Rule;
