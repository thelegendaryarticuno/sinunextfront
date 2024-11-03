import React from "react";

type Status = "active" | "planned" | "inactive" | "today";

interface TimelineItem {
  label: string;
  status: Status;
  start: number;
  length: number;
}

const Structure = () => {
  const timelineData: TimelineItem[] = [
    { label: "Jan 16", status: "inactive", start: 1, length: 2 },
    { label: "Apr 16", status: "planned", start: 3, length: 5 },
    { label: "May 16", status: "active", start: 7, length: 3 },
    { label: "Jun 16", status: "active", start: 11, length: 2 },
    { label: "Aug 16", status: "today", start: 13, length: 1 },
    { label: "Oct 16", status: "planned", start: 15, length: 4 },
  ];

  const statusStyles: Record<Status, string> = {
    active: "bg-blue-500",
    planned: "bg-purple-500",
    inactive: "bg-red-500",
    today: "bg-cyan-500",
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Deals
        </h2>

        {/* Timeline */}
        <div className="relative w-full h-24">
          {/* Horizontal line */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-600"></div>

          {/* Time Labels */}
          <div className="absolute w-full flex justify-between text-gray-400 text-sm">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="mb-2">{item.label}</span>
                <div
                  className={`${statusStyles[item.status]} h-1.5 rounded-md`}
                  style={{
                    width: `${item.length * 8}%`,
                    left: `${item.start * 6}%`,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-around text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span>Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span>Inactive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
