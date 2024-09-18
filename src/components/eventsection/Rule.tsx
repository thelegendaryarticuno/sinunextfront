import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/components/Redux/store';
import { fetchEventData } from '@/components/Redux/eventSlice';
import { useTheme } from 'next-themes';

interface RuleProps {
  eventId: string;
}

const Rule: React.FC<RuleProps> = ({ eventId }) => {
  const dispatch: AppDispatch = useDispatch();
  const { eventData, loading, error } = useSelector(
    (state: RootState) => state.event
  );
  const { theme } = useTheme();

  useEffect(() => {
    if (!eventData) {
      dispatch(fetchEventData(eventId));
    }
  }, [dispatch, eventId, eventData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!eventData) return <p>No event data available.</p>;

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
