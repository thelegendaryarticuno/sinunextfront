import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  { 
    img: "/sponsorLogo/BCH.webp", alt:"BCH" 
  },
  { 
    img: "/sponsorLogo/KGEN2.png", alt:"KGEN"
  },
  {
     img: "/sponsorLogo/trikon3.png", alt:"Trikon" 
    },
  {
     img: "/sponsorLogo/Gigabyte.webp" , alt:"Gigabyte" 
    },
  {
     img: "/sponsorLogo/Jio.webp" , alt:"Jio"
    },
  {
     img: "/sponsorLogo/7.png" , alt:"perfectKoncerts"
    },
  {
     img: "/sponsorLogo/GDX.png" , alt:"GDX"
    },
  {
     img: "/sponsorLogo/FLYJONE.png" , alt:"FLYJONE"
    },
  {
     img: "/sponsorLogo/RedBull.webp" , alt:"RedBull"
    },
  {
     img: "/sponsorLogo/denver.png" , alt:"DENVER"
    },
  {
     img: "/sponsorLogo/NYNAEVE.png" , alt:"NYNAEVE"
    },
  {
     img: "/sponsorLogo/2Oh.png" , alt:"2Oh"
    },
  {
     img: "/sponsorLogo/Ubon.webp" , alt:"Ubon"
    },
  {
     img: "/sponsorLogo/studCops.png" , alt:"StudCops"
    },
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
