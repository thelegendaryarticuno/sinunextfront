import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "../eventsection/Overview";
import Sponsor from "../eventsection/sponsor";
import dayjs from "dayjs";

interface EventsBannerProps {
  eventData?: {
    eventName: string;
    longDesc: string;
    overview: string;
    rules: string[];
    prizes: string[];
    eventStructure: string[];
    schedule: {
      eventStart: string;
      eventEnd: string;
      registrationStart: string;
      registrationEnd: string;
      submissionStart: string;
      submissionEnd: string;
    };
  };
}

export const TabsComponent: React.FC<EventsBannerProps> = ({ eventData }) => {
  const tabsArray = [
    {
      value: "event-overview",
      text: "Event Overview",
      component: <Overview eventData={eventData} />,
    },
    {
      value: "timeline",
      text: "Events Timeline",
      component: "Events Timeline",
    },
    {
      value: "rules-and-regulations",
      text: "Rules and Regulations",
      component: (
        <div>
          <ul className="list-disc list-inside space-y-3">
            {eventData?.rules?.map((rule, idx) => (
              <li key={idx} className="mb-3">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      value: "prizes",
      text: "Prizes",
      component: (
        <div>
          {eventData?.prizes?.map((prize, idx) => (
            <p key={idx} className="mb-2">
              {prize}
            </p>
          ))}
        </div>
      ),
    },
    {
      value: "event-structure",
      text: "Event Structure",
      component: (
        <div>
          {eventData?.eventStructure?.map((structure, idx) => (
            <p key={idx} className="mb-2">
              {structure}
            </p>
          ))}
        </div>
      ),
    },
    { value: "about-sponsor", text: "Our Sponsors", component: <Sponsor /> },
  ];

  useEffect(() => {
    console.log("EventData in TabsComponent:", eventData);

    if (!eventData) {
      console.warn("No event data available");
    } else if (!eventData.schedule) {
      console.warn("No schedule data available in eventData");
    }
  }, [eventData]);

  return (
    <div className="w-[80%] mx-auto">
      <Tabs defaultValue="event-overview" className="w-full">
        <div className="tabs-triggers bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-x-auto scrollbar-hidden">
          <TabsList className="flex space-x-2 md:space-x-4 lg:space-x-6 min-w-max">
            {tabsArray.map((tab, idx) => (
              <TabsTrigger
                key={`tab_${idx}`}
                value={tab?.value}
                className="whitespace-nowrap min-w-max"
              >
                {tab?.text}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="tabs-contents p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          {tabsArray.map((tab, idx) => (
            <TabsContent key={`content_${idx}`} value={tab?.value}>
              {tab?.value === "timeline" && eventData?.schedule ? (
                <>
                  <p>
                    Event Start:{" "}
                    {dayjs(eventData?.schedule?.eventStart).format(
                      "MMMM D, YYYY"
                    )}
                  </p>
                  <p>
                    Event End:{" "}
                    {dayjs(eventData.schedule.eventEnd).format("MMMM D, YYYY")}
                  </p>
                  <p>
                    Registration Start:{" "}
                    {dayjs(eventData.schedule.registrationStart).format(
                      "MMMM D, YYYY"
                    )}
                  </p>
                  <p>
                    Submission Start:{" "}
                    {dayjs(eventData.schedule.submissionStart).format(
                      "MMMM D, YYYY"
                    )}
                  </p>
                  <p>
                    Submission End:{" "}
                    {dayjs(eventData.schedule.submissionEnd).format(
                      "MMMM D, YYYY"
                    )}
                  </p>
                </>
              ) : (
                tab?.component
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
