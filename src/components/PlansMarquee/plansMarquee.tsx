import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const sponsorLogos = [
  { 
    img: "/events/Abstruse.webp", alt:"Abstruse" 
  },
  { 
    img: "/events/Argumental.webp", alt:"Argumental"
  },
  {
     img: "/events/Code_Jam.webp", alt:"CodeJam" 
    },
  {
     img: "/events/Design_dojo.webp" , alt:"DesignDojo" 
    },
  {
     img: "/events/Error_stack.webp" , alt:"ErrorStack"
    },
  {
     img: "/events/Murder_mystery.webp" , alt:"MurderMystery"
    },
  {
     img: "/events/Robo_rush.webp" , alt:"RoboRush"
    },
  {
     img: "/events/Tech_savvy.webp" , alt:"TechSavvy"
    },
  {
     img: "/events/Techtacular.webp" , alt:"Techtacular"
    },
  {
     img: "/events/Trade_off.webp" , alt:"TradeOff"
    },
];

// Limiting the sponsor logos to 11
const firstRow = sponsorLogos.slice(0, 11);

const ReviewCard = ({ img, alt }: { img: string, alt: string }) => {
  return (
    <figure
      className={cn(
        "relative w-96 h-72 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-slate-800/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-sky-100/[.8] dark:hover:bg-sky-50/[.9]",
        "group"
      )}
    >
      {/* Image with blur effect on hover */}
      <Image
        className="w-full h-full object-contain p-4 transition-all duration-300 group-hover:blur-sm"
        alt={alt}
        src={img}
        layout="fill"
        objectFit="contain"
      />

      {/* Overlay text, initially hidden */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        )}
      >
        <span className="text-white text-xl font-semibold">{alt}</span>
      </div>
    </figure>
  );
};

export function PlansMarquee() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} alt={review.alt} />
        ))}
      </Marquee>
    </div>
  );
}
