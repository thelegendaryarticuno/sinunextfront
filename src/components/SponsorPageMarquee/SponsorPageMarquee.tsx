import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const sponsorLogos = [
  { 
    img: "/images/HiveVerticalLogo.png", alt:"Hive" 
  },
  { 
    img: "/sponsorLogo/Trends.webp", alt:"Trends"
  },
  {
     img: "/sponsorLogo/2Oh.png", alt:"2Oh" 
    },
  {
     img: "/sponsorLogo/BaskinRobins.webp" , alt:"BaskinRobins" 
    },
  {
     img: "/sponsorLogo/NYNAEVE.png" , alt:"NYNAEVE"
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
     img: "/sponsorLogo/RoyalEnfield.webp" , alt:"RoyalEnfield"
    },
  {
     img: "/sponsorLogo/Bustro.webp" , alt:"Bustro"
    },
  {
     img: "/sponsorLogo/Trikon.png" , alt:"Trikon"
    },
  {
     img: "/sponsorLogo/MemoryBlaze.webp" , alt:"MemoryBlaze"
    },
  {
     img: "/sponsorLogo/studCops.png" , alt:"StudCops"
    },
  {
     img: "/sponsorLogo/Ramada.webp" , alt:"Ramada"
    },
  {
     img: "/sponsorLogo/DayNeemrana.webp" , alt:"DayNeemrana"
    },
  {
     img: "/sponsorLogo/BCH.webp" , alt:"BCH"
    },
  {
     img: "/sponsorLogo/infinix.webp" , alt:"infinix"
    },
  {
     img: "/sponsorLogo/MetaSoilVerse.webp" , alt:"MetaSoilVerse"
    },
  {
     img: "/sponsorLogo/KGEN2.png" , alt:"KGEN"
    },
];

const firstRow = sponsorLogos.slice(0, 20);

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
