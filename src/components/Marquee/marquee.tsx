import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  { img: "/sponsorLogo/BCH.webp" , alt:"BCH"},
  { img: "/sponsorLogo/CodeChef.webp", alt:"CodeChef" },
  { img: "/sponsorLogo/CodingNinjas.webp", alt:"CodingNinjas" },
  { img: "/sponsorLogo/Gigabyte.webp", alt:"Gigabyte" },
  { img: "/sponsorLogo/Jio.webp", alt:"Jio" },
  { img: "/sponsorLogo/Kaspersky.webp", alt:"Kaspersky" },
  { img: "/sponsorLogo/Microsoft.webp", alt:"Microsoft" }, 
  { img: "/sponsorLogo/MountainDew.webp", alt:"MountainDew" },
  { img: "/sponsorLogo/RedBull.webp", alt:"RedBull" },
  { img: "/sponsorLogo/RoyalEnfield.webp", alt:"RoyalEnfield" },
  { img: "/sponsorLogo/SKOAR.webp", alt:"SKOAR" },
  { img: "/sponsorLogo/TpLink.webp", alt:"TpLink" },
  { img: "/sponsorLogo/Ubon.webp", alt:"Ubon" },
  { img: "/sponsorLogo/Zomato.webp", alt:"Zomato" },
];

const firstRow = reviews.slice(0, 14);
const secondRow = [
  ...reviews.slice(6, 14),
  ...reviews.slice(0, 6),
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-80 h-60 cursor-pointer overflow-hidden rounded-xl border",
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

export function SponsorMarquee() {
  return (
    <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
