import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/Redux/store";

interface ImageSliderProps {
  className?: string;
}

export default function ImageSlider({ className = "" }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const eventData = useSelector((state: RootState) => state.event.eventData);

  // Helper function to build the image URL
  const getImageUrl = (fileName: string) =>
    `https://storage.googleapis.com/sinusoidcms-2024.appspot.com/${fileName}`;

  // Extract the event image from Redux state
  const squareBannerUrl = eventData?.imageAsset?.squareBanner?.imgUrl
    ? getImageUrl(eventData.imageAsset.squareBanner.imgUrl)
    : null;

  // Fallback image if no event image is available
  const fallbackImage = "/events/hackathon-35vh.jpg";

  // Construct the array of images (either event image or fallback)
  const images = squareBannerUrl ? [squareBannerUrl] : [fallbackImage];

  // Handle image cycling every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]); // Rerun effect if images change

  // Increment the current image index
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Event image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
