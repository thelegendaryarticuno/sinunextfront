import React, { useState } from 'react';
import OnFest from './onfest';
import PreFest from './prefest';

const EventOrganizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('onfest');

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center space-x-8 border-b-2 border-[#A52A2A] dark:border-gray-800 pb-4">
        <button
          className={`text-lg font-semibold pb-2 ${activeTab === 'onfest' ? 'text-black dark:text-white border-b-4 border-[#A52A2A] dark:border-green-500' : 'text-gray-500 dark:text-gray-500'}`}
          onClick={() => setActiveTab('onfest')}
        >
          Onfest Events
        </button>
        <button
          className={`text-lg font-semibold pb-2 ${activeTab === 'prefest' ? 'text-black dark:text-white border-b-4 border-[#A52A2A] dark:border-green-500' : 'text-gray-500 dark:text-gray-500'}`}
          onClick={() => setActiveTab('prefest')}
        >
          Prefest Events
        </button>
      </div>
      
      <div className="mt-8">
        {activeTab === 'onfest' ? <OnFest /> : <PreFest />}
      </div>
    </div>
  );
};

export default EventOrganizer;
