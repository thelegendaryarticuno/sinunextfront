// imageSlider.tsx

import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[]; // Accept an array of images as props
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // 4-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Render only one image at a time with smooth transitions */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Event image ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
