import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Event, eventData } from "@/constants/timelineConstant";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Component() {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(
    dayjs().tz("Asia/Kolkata").format("DD/MM/YY")
  );
  const [currentTime, setCurrentTime] = useState(
    dayjs().tz("Asia/Kolkata").format("HH:mm")
  );
  const [selectedTab, setSelectedTab] = useState("Day-1");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(dayjs().tz("Asia/Kolkata").format("DD/MM/YY"));
      setCurrentTime(dayjs().tz("Asia/Kolkata").format("HH:mm"));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getEventStatus = (event: Event) => {
    const eventDate = event.date ?? "";
    const eventStart = event.startTime ?? "";
    const eventEnd = event.endTime ?? "";

    if (currentDate < eventDate) {
      return "upcoming";
    } else if (currentDate === eventDate) {
      if (currentTime < eventStart) {
        return "upcoming";
      } else if (currentTime >= eventStart && currentTime <= eventEnd) {
        return "ongoing";
      } else if (currentTime > eventEnd) {
        return "expired";
      }
    } else if (currentDate > eventDate) {
      return "expired";
    }
  };

  const getLineStyle = (status: string) => {
    switch (status) {
      case "upcoming":
        return theme === "dark" ? "bg-cyan-500" : "bg-cyan-600";
      case "ongoing":
        return theme === "dark" ? "bg-green-500" : "bg-green-600";
      case "expired":
        return theme === "dark" ? "bg-gray-500" : "bg-gray-400";
      default:
        return theme === "dark" ? "bg-gray-300" : "bg-gray-200";
    }
  };

  const formatHour = (hour: number) => {
    return hour.toString().padStart(2, "0") + ":00";
  };

  const TimelineContent = ({ day }: { day: string }) => {
    const sortedEvents = [...eventData[day]].sort((a, b) => {
      const timeA = a.startTime ?? "00:00";
      const timeB = b.startTime ?? "00:00";
      return timeA.localeCompare(timeB);
    });

    const groupedEvents = sortedEvents.reduce((acc, event) => {
      const startTime = event.startTime ?? "00:00";
      if (!acc[startTime]) {
        acc[startTime] = [];
      }
      acc[startTime].push(event);
      return acc;
    }, {} as Record<string, Event[]>);

    return (
      <div className="relative min-h-[800px] p-2 sm:p-4 md:p-6 lg:p-8">
        <div
          className={`absolute left-4 sm:left-8 md:left-16 lg:left-24 top-0 bottom-0 w-0.5 md:w-1 ${
            theme === "dark" ? "bg-white/20" : "bg-gray-300"
          }`}
        ></div>

        <div className="space-y-4">
          {Object.entries(groupedEvents).map(
            ([startTime, events], timeIndex) => {
              const hasOngoingEvent = events.some(
                (event) => getEventStatus(event) === "ongoing"
              );

              return (
                <div key={startTime} className="relative">
                  <div
                    className={`hidden lg:block absolute left-0 right-0 h-[1px] ${
                      theme === "dark" ? "bg-white/10" : "bg-gray-200"
                    }`}
                  ></div>

                  <div
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      timeIndex > 0 ? "mt-[15px]" : ""
                    }`}
                  >
                    <div
                      className={`absolute left-4 sm:left-8 md:left-16 lg:left-24 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 -ml-1.5 sm:-ml-2 md:-ml-2.5 rounded-full ${
                        hasOngoingEvent
                          ? "bg-red-600 animate-pulse shadow-lg shadow-red-500/50"
                          : theme === "dark"
                          ? "bg-white/40"
                          : "bg-gray-400"
                      }`}
                    ></div>

                    <div className="ml-8 sm:ml-12 md:ml-0 md:w-24 mb-2 md:mb-0 md:text-right md:pr-8">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-gray-600"
                        } text-xs md:text-sm`}
                      >
                        {startTime}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap gap-3 ml-8 sm:ml-12 md:ml-12 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-auto">
                      <AnimatePresence>
                        {events.map((event, index) => {
                          const status = getEventStatus(event);
                          const lineStyle = getLineStyle(status ?? "default");
                          const isLive = status === "ongoing";

                          return (
                            <motion.div
                              key={index}
                              className={`${lineStyle} rounded-lg p-2 sm:p-3 md:p-4 w-full md:w-[250px] lg:w-[300px] xl:w-[350px] break-words backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 shadow-lg relative ${
                                theme === "dark" ? "" : "bg-white shadow-md"
                              }`}
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              whileHover={{ scale: 1.02 }}
                              exit={{ x: 50, opacity: 0 }}
                            >
                              {isLive && (
                                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                  LIVE
                                </div>
                              )}
                              <h3
                                className={`${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-800"
                                } font-bold text-base sm:text-lg md:text-xl mb-2 tracking-wide border-b ${
                                  theme === "dark"
                                    ? "border-white/20"
                                    : "border-gray-200"
                                } pb-2`}
                              >
                                {event.name}
                              </h3>
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                  <svg
                                    className={`w-4 h-4 ${
                                      theme === "dark"
                                        ? "text-white/70"
                                        : "text-gray-600"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <p
                                    className={`${
                                      theme === "dark"
                                        ? "text-white/70"
                                        : "text-gray-600"
                                    } text-xs md:text-sm font-medium`}
                                  >
                                    {event.startTime} - {event.endTime}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {event.venue ? (
                                    <>
                                      <svg
                                        className={`w-4 h-4 ${
                                          theme === "dark"
                                            ? "text-white/70"
                                            : "text-gray-600"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                      <p
                                        className={`${
                                          theme === "dark"
                                            ? "text-white/70"
                                            : "text-gray-600"
                                        } text-xs md:text-sm font-medium`}
                                      >
                                        {event.venue}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <svg
                                        className={`w-4 h-4 ${
                                          theme === "dark"
                                            ? "text-white/70"
                                            : "text-gray-600"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                      </svg>
                                      <p
                                        className={`${
                                          theme === "dark"
                                            ? "text-white/70"
                                            : "text-gray-600"
                                        } text-xs md:text-sm font-medium`}
                                      >
                                        Online Event
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div
                                className={`h-1 ${lineStyle} mt-3 rounded-full opacity-70`}
                              ></div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-auto min-h-screen mt-16 text-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
      } p-2 sm:p-3 md:p-4 lg:p-6`}
    >
      <div className="max-w-full lg:max-w-7xl mx-auto">
        <header className="flex items-center justify-center mb-12 md:mb-12"></header>

        <Tabs
          defaultValue="Day-1"
          className="mb-4 sm:mb-6 md:mb-8"
          onValueChange={setSelectedTab}
        >
          <TabsList
            className={`grid w-full grid-cols-3 ${
              theme === "dark" ? "bg-slate-800/50" : "bg-gray-100"
            }`}
          >
            <TabsTrigger
              value="Day-1"
              className={`${
                theme === "dark" ? "text-white/70" : "text-gray-600"
              } text-xs sm:text-sm md:text-base`}
            >
              Day 1
            </TabsTrigger>
            <TabsTrigger
              value="Day-2"
              className={`${
                theme === "dark" ? "text-white/70" : "text-gray-600"
              } text-xs sm:text-sm md:text-base`}
            >
              Day 2
            </TabsTrigger>
            <TabsTrigger
              value="Day-3"
              className={`${
                theme === "dark" ? "text-white/70" : "text-gray-600"
              } text-xs sm:text-sm md:text-base`}
            >
              Day 3
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="Day-1" key="Day-1">
              <TimelineContent day="Day-1" />
            </TabsContent>
            <TabsContent value="Day-2" key="Day-2">
              <TimelineContent day="Day-2" />
            </TabsContent>
            <TabsContent value="Day-3" key="Day-3">
              <TimelineContent day="Day-3" />
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}
