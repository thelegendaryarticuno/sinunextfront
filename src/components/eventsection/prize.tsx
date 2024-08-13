import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const prizes = [
  { title: 'Macbook Air', subtitle: '1st Prize', image: '/images/macbook.jpeg' },
  { title: 'Ipad Air', subtitle: '2nd Prize', image: '/images/ipad.jpg' },
  { title: 'PPIs & Internships', subtitle: 'Top 50 Participants' },
  { title: 'Goodie bag from Adobe', subtitle: 'National Finalists' },
  { title: 'Present Solutions on-site at Adobe Office', subtitle: 'National Finalists' },
  { title: 'Adobe Creative Cloud License worth INR 90,000', subtitle: 'National Finalists' },
  { title: 'Certificates from Adobe', subtitle: 'Shortlisted Teams' },
];

const Prize: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h2 className="text-center text-2xl font-bold mb-6">Prizes</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-purple-900 p-4 rounded-lg"
            style={{ height: '25vh', width: '30vh' }}
          >
            {prize.image && (
              <Image src={prize.image} alt={prize.title} width={100} height={100} className="mb-4" />
            )}
            <h3 className="text-xl font-bold text-center">{prize.title}</h3>
            <p className="text-blue-400 mt-2 text-center">{prize.subtitle}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm mt-4">
        Note: Only 2026 batch is eligible for PPIs for an Internship.
      </p>
    </div>
  );
};

export default Prize;
