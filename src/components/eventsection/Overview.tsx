import React from "react";

interface OverviewProps {
  eventData: {
    eventName: string;
    longDesc?: string;
  };
}

const Overview: React.FC<OverviewProps> = ({ eventData }) => {
  if (!eventData) {
    return <p>No event data available in the Overview.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{eventData.eventName}</h2>
      <p>{eventData.longDesc || "No detailed description available."}</p>
    </div>
  );
};

export default Overview;
