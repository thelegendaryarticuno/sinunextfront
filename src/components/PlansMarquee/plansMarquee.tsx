import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import axios from "axios";
import { get } from "http";

const ReviewCard = ({
  img,
  alt,
  eventName,
  eventTagline,
}: {
  img: string;
  alt: string;
  eventName: string | undefined;
  eventTagline: string | undefined;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 h-72 cursor-pointer overflow-hidden rounded-xl border",
        "border-gray-950/[.1] bg-slate-800/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-sky-100/[.8] dark:hover:bg-sky-50/[.9]",
        "group"
      )}
    >
      <Image
        className="w-full h-full object-contain p-4 transition-all duration-300 group-hover:blur-sm"
        alt={alt}
        src={img}
        layout="fill"
        objectFit="contain"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        )}
      >
        {eventName && (
          <div className="text-white text-xl font-semibold text-center">
            <p>{eventName}</p>
            <p>{eventTagline}</p>
          </div>
        )}
      </div>
    </figure>
  );
};

export function PlansMarquee() {
  const [eventData, setEventData] = useState<any[]>([]);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get("https://api.sinusoid.in/events");
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  function getImageUrl(fileName: string) {
    return `https://api.sinusoid.in/images/${fileName}`;
  }

  useEffect(() => {
    fetchAllEvents().then((data) => {
      setEventData(data);
    });
  }, []);

  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {eventData.map((event, index) => {
          // Construct image source
          const imageSrc = getImageUrl(event?.imageAsset?.eventBannerComponent?.imgUrl);
          return (
            <ReviewCard
              key={`key-${event?.eventName}`}
              img={imageSrc}
              alt={event?.eventName || "Event Image"}
              eventName={event?.eventName}
              eventTagline={event?.eventTagline}
            />
          );
        })}
      </Marquee>
    </div>
  );
}
