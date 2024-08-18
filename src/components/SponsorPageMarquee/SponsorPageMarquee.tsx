import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const sponsorLogos = [
  { 
    img: "/sponsorLogo/BCH.webp" 
  },
  { 
    img: "/sponsorLogo/CodeChef.webp" 
  },
  {
     img: "/sponsorLogo/CodingNinjas.webp" 
    },
  {
     img: "/sponsorLogo/Gigabyte.webp" 
    },
  {
     img: "/sponsorLogo/Jio.webp" 
    },
  {
     img: "/sponsorLogo/Kaspersky.webp" 
    },
  {
     img: "/sponsorLogo/Microsoft.webp" 
    },
  {
     img: "/sponsorLogo/MountainDew.webp" 
    },
  {
     img: "/sponsorLogo/RedBull.webp" 
    },
  {
     img: "/sponsorLogo/RoyalEnfield.webp" 
    },
  {
     img: "/sponsorLogo/SKOAR.webp" 
    },
  {
     img: "/sponsorLogo/TpLink.webp" 
    },
  {
     img: "/sponsorLogo/Ubon.webp" 
    },
  {
     img: "/sponsorLogo/Zomato.webp" 
    },
];

const firstRow = sponsorLogos.slice(0, 14);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-60 h-40 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-slate-800/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-sky-100/[.8] dark:hover:bg-sky-50/[.9]"
      )}
    >
      <Image className="w-full h-full object-contain p-4" alt="" src={img} layout="fill" objectFit="contain" />
    </figure>
  );
};

export function SponsorPageMarquee() {
  return (
    <div className="relative flex h-[225px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
