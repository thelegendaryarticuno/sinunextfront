// components/ImageSlider.tsx
import { useState, useEffect } from "react";

interface ImageSliderProps {
  imageFiles: { src: string; link: string }[];
  autoSlide?: boolean; // Optional: Auto-slide feature
  slideInterval?: number; // Optional: Interval for auto-slide in ms
}

export default function ImageSlider({
  imageFiles,
  autoSlide = true,
  slideInterval = 3000, // 3 seconds by default
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageFiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous image
  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageFiles.length - 1 : prevIndex - 1
    );
  };

  // Redirect to the link of the current image
  const goToImageLink = () => {
    const currentImage = imageFiles[currentIndex];
    if (currentImage.link) {
      window.location.href = currentImage.link;
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return; // If auto-slide is disabled, exit early
    const interval = setInterval(goToNextImage, slideInterval);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, autoSlide, slideInterval]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Image */}
      <img
        src={imageFiles[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover cursor-pointer transition duration-700 ease-in-out"
        onClick={goToImageLink} // Navigate on click
      />

      {/* Left Navigation Button */}
      <button
        onClick={goToPrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500/70 text-white px-3 py-1 rounded-full hover:bg-gray-700"
      >
        ❮
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={goToNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500/70 text-white px-3 py-1 rounded-full hover:bg-gray-700"
      >
        ❯
      </button>

      {/* Dots/Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imageFiles.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            } cursor-pointer transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
}
