// components/Banner.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import ImageSlider from "./imageSlider"; // Ensure this path is correct
import Timer from "./timer"; // Ensure this path is correct
import { useTheme } from "next-themes";
import AnimatedGridPattern from "../ui/animated-grid-pattern"; // Ensure this path is correct
import { cn } from "@/lib/utils";

export default function Banner() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-200";

  const [images, setImages] = useState<{ src: string; link: string }[]>([]);
  const [ttl, setTtl] = useState(3000); // Default TTL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sinusoid.in/marketingComponents"
        );
        const { data } = response;

        // Map the API data to the format expected by ImageSlider
        const fetchedImages = data.map((item: any) => ({
          src: `https://storage.googleapis.com/sinusoidcms-2024.appspot.com/${item.imgSrcLink}`,
          link: item.redirectLink,
        }));

        setImages(fetchedImages);
        setTtl(data.ttl || 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`relative h-[30vh] w-full flex items-center justify-between p-4 gap-2`}
    >
      {/* Left Section - Image Slider (takes full width on md and below) */}
      <div className="relative w-full md:w-[60%] h-full rounded-lg overflow-hidden z-10">
        <ImageSlider imageFiles={images} slideInterval={ttl} />
      </div>

      {/* Right Section - Timer (hidden on md and below) */}
      <div className="relative w-[40%] h-full rounded-lg p-4 flex items-center justify-center ml-2 hidden md:flex z-10">
        <Timer />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
