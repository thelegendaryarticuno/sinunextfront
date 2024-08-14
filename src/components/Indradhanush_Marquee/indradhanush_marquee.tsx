import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/images/Indradhanush/images/250x180/6.jpg",
  },
  {
    img: "/images/Indradhanush/images/250x180/7.jpg",
  },
  {
    img: "/images/Indradhanush/images/250x180/17.jpg",
  },
  {
    img: "/images/Indradhanush/images/250x180/27.jpg",
  },
  {
    img: "/images/Indradhanush/images/250x180/28.jpg",
  },
  {
    img: "/images/Indradhanush/images/250x180/1.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-96 h-60 cursor-pointer overflow-hidden rounded-xl",
        // light styles
        "border-gray-950/[.1] bg-slate-800/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-sky-100/[.8] dark:hover:bg-sky-50/[.9]"
      )}
    >
      <Image
        className="w-full h-full object-cover"
        alt=""
        src={img}
        fill
      />
    </figure>
  );
};

export function IndradhanushMarquee() {
  return (
    <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
