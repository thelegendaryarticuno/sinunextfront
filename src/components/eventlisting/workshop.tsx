import React, { useEffect, useState } from 'react';
import WorkshopCard from './workshopcard';
import axios from 'axios';

const Workshop: React.FC = () => {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  const fetchAllWorkshops = async () => {
    try {
      const response = await axios.get('https://api.sinusoid.in/workshops/');
      const publishedWorkshops = response?.data.filter((workshop: any) => workshop?.published === true);
      setFetchedData(publishedWorkshops);
    } catch (error) {
      console.error("Error fetching workshops:", error);
      setFetchedData([]);
    }
  };

  useEffect(() => {
    fetchAllWorkshops();
  }, []);

  useEffect(() => {
    const formattedWorkshops = fetchedData.map((workshop: any) => {
      // Extract the first collaborator's data if it exists
      const firstCollaboration = workshop?.collaboration?.[0] || {};

      // Extract the start date from the schedule object
      const workshopStartDate = workshop?.schedule?.workshopStart || null;

      return {
        imageSrc: "/images/light.jpg",
        altText: workshop?.workshopName || "Workshop Image",
        workshopName: workshop?.workshopName,
        workshopTagLine: workshop?.workshopTagline,
        workshopStartDate: workshopStartDate, // Use the extracted start date
        workshopStartTime: workshop?.workshopStartTime,
        collaborationLogo: firstCollaboration?.logoSrc || "/logo/defaultLogo.png", // Provide a default logo if none is found
        collaborationName: firstCollaboration?.name || "Collaborator",
        workshopId: workshop?.workshopId,
      };
    });
    setWorkshops(formattedWorkshops);
  }, [fetchedData]);

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-16 mb-4 px-4">
      {workshops.map((workshop, index) => (
        <div
          key={index}
          className="w-full md:w-2/3 lg:w-1/3 flex justify-center mb-4 px-2"
        >
          <WorkshopCard
            imageSrc={workshop?.imageSrc}
            altText={workshop?.altText}
            workshopName={workshop?.workshopName}
            workshopTagLine={workshop?.workshopTagLine}
            workshopStartDate={workshop?.workshopStartDate}
            workshopStartTime={workshop?.workshopStartTime}
            collaborationLogo={workshop?.collaborationLogo}
            collaborationName={workshop?.collaborationName}
            workshopId={workshop?.workshopId}
          />
        </div>
      ))}
    </div>
  );
};

export default Workshop;
