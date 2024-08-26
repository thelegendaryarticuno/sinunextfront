import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Rule: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`max-w-3xl mx-auto p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-4">Rules</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>A team can consist of 2-3 members, one of whom will be the team leader</li>
        <li>All members of the team have to register with their WhatsApp number</li>
        <li>
          All members of the team must register with their official university ID, in case you do not have one you can register with your Gmail ID.
        </li>
        <li>All members of a team should be from the same institute/university</li>
        <li>Cross-year and cross-specialization teams are allowed</li>
        <li>One student cannot be a part of more than one team</li>
      </ul>
      <p className="mt-4">
        In case of any query, <Link href="/contact" className="text-blue-500">Contact Us</Link>
      </p>
    </div>
  );
};

export default Rule;
