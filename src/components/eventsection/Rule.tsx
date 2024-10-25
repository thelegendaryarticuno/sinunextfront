import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface RuleProps {
  eventData: {
    rules?: string[];
  };
}

const Rule: React.FC<RuleProps> = ({ eventData }) => {
  const { theme } = useTheme();

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
