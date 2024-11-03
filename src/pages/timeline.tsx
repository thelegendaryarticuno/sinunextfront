// page.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Event, eventData } from "@/constants/timelineConstant";
import { motion } from "framer-motion"; // Import Framer Motion

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Component() {
  // Get current date and time in IST (Indian Standard Time)
  const [currentDate, setCurrentDate] = useState(
    dayjs().tz("Asia/Kolkata").format("DD/MM/YY")
  );
  const [currentTime, setCurrentTime] = useState(
    dayjs().tz("Asia/Kolkata").format("HH:mm")
  );

  useEffect(() => {
    // Update current date and time every minute
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
        return "bg-cyan-500";
      case "ongoing":
        return "bg-green-500";
      case "expired":
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  };

  const formatHour = (hour: number) => {
    return hour.toString().padStart(2, "0") + ":00";
  };

  const TimelineContent = ({ day }: { day: string }) => (
    <div className=" h-full relative mb-8">
      {/* Timeline markers */}
      <div className="flex justify-between mb-16">
        {Array.from({ length: 13 }, (_, i) => i * 2).map((hour) => (
          <div key={hour} className="flex flex-col items-center">
            <div className="w-2 h-2 bg-white/20 rounded-full mb-2" />
            <span className="text-white/50 text-xs origin-top-left">
              {formatHour(hour)}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {eventData[day].map((event, index) => {
          const startHour = parseInt(event.startTime?.split(":")[0] ?? "0");
          const endHour = parseInt(event.endTime?.split(":")[0] ?? "0");
          const status = getEventStatus(event);
          const lineStyle = getLineStyle(status ?? "default");

          return (
            <div
              key={index}
              className="relative group"
              style={{
                marginLeft: `${(startHour / 24) * 100}%`,
                width: `${((endHour - startHour) / 24) * 100}%`,
              }}
            >
              <motion.div
                className={`h-1 rounded-full ${lineStyle}`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2, // Delay to stagger the animations
                }}
              />
              <div className="absolute top-2 left-0 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {event.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-auto h-full mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="text-white/90 text-2xl font-light">
              Event Timeline
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white"
            >
            </Button>
          </div>
        </header>

        <Tabs defaultValue="Day-1" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
            <TabsTrigger value="Day-1" className="text-white/70">
              Day 1
            </TabsTrigger>
            <TabsTrigger value="Day-2" className="text-white/70">
              Day 2
            </TabsTrigger>
            <TabsTrigger value="Day-3" className="text-white/70">
              Day 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Day-1">
            <TimelineContent day="Day-1" />
          </TabsContent>
          <TabsContent value="Day-2">
            <TimelineContent day="Day-2" />
          </TabsContent>
          <TabsContent value="Day-3">
            <TimelineContent day="Day-3" />
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-white/70 text-sm">Upcoming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-white/70 text-sm">Ongoing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="text-white/70 text-sm">Expired</span>
          </div>
        </div>
      </div>
    </div>
  );
}
