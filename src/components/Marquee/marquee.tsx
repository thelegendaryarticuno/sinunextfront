import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: "/images/images1.png",
  },
  {
    img: "/images/images2.png",
  },
  {
    img: "/images/images6.png",
  },
  {
    img: "/images/images7.png",
  },
  {
    img: "/images/images5.png",
  },
  {
    img: "/images/images3.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-80 h-40 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="w-full h-full object-cover" alt="" src={img} />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
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
