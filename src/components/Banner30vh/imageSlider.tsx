import Link from "next/link";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  imageFiles: { src: string; link: string }[];
  autoSlide?: boolean; // Optional: Auto-slide feature
  slideInterval?: number; // Optional: Interval for auto-slide in ms
}

export default function ImageSlider({
  imageFiles = [], // Default to an empty array if no imageFiles are provided
  autoSlide = true,
  slideInterval = 3000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageFiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageFiles.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoSlide || imageFiles.length === 0) return;
    const interval = setInterval(goToNextImage, slideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval, imageFiles.length]);

  if (imageFiles.length === 0) {
    return <div>Loading images...</div>; // Show a loading message or placeholder
  }

  return (
    <div className="w-full h-full relative overflow-hidden group flex items-center justify-center">
      {/* Image */}
      <Link href={imageFiles[currentIndex].link}>
        <img
          src={imageFiles[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-lg object-cover cursor-pointer transition duration-700 ease-in-out md:w-full md:h-full lg:w-[60vw] h-[23vh]"
        />
      </Link>

      {/* Left Navigation Button */}
      <button
        onClick={goToPrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500/70 text-white px-3 py-1 rounded-full lg:hover:bg-gray-700 opacity-100 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100"
      >
        ❮
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={goToNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500/70 text-white px-3 py-1 rounded-full hover:bg-gray-700 opacity-100 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100"
      >
        ❯
      </button>
    </div>
  );
}
