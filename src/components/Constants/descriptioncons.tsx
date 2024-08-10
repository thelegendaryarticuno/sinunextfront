import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Overview from '../eventsection/Overview'; 

export const tabsArray = [
  { value: "event-overview", text: "Event Overview", component: <Overview  /> },
  { value: "detailed-description", text: "Detailed Description", component: "Detailed Description" },
  { value: "rules-and-regulations", text: "Rules and Regulations", component: "Rules and Regulations" },
  { value: "event-timeline", text: "Event Timeline", component: "Event Timeline" },
  { value: "prizes-and-incentives", text: "Prizes and Incentives", component: "Prizes and Incentives" },
  { value: "contact-information", text: "Contact Information", component: "Contact Information" },
  { value: "registration-link", text: "Registration Link", component: "Registration Link" },
];

export const TabsComponent: React.FC = () => {
  return (
    
    <div className="w-[80%] mx-auto my-10 mt-20">
      <Tabs defaultValue="event-overview" className="w-full">
        <div className="tabs-triggers bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-x-auto scrollbar-hidden">
          <TabsList className="flex space-x-2 md:space-x-4 lg:space-x-6 min-w-max">
            {tabsArray.map((tab, idx) => (
              <TabsTrigger key={`tab_${idx}`} value={tab.value} className="whitespace-nowrap min-w-max">
                {tab.text}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="tabs-contents p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          {tabsArray.map((tab, idx) => (
            <TabsContent key={`content_${idx}`} value={tab.value}>
              {tab.component}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
