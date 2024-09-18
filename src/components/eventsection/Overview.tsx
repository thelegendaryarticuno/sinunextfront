import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/Redux/store";

const Overview: React.FC = () => {
  const eventData = useSelector((state: RootState) => state.event.eventData);

  if (!eventData) {
    return <p>No event data available in the Overview.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{eventData?.eventName}</h2>
      <p>{eventData?.longDesc || "No detailed description available."}</p>
    </div>
  );
};

export default Overview;
