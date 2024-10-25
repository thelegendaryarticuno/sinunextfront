import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface ImageSliderProps {
  className?: string;
}
const ImageSlider = ({ className = "" }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();
  const { eventid } = router.query;
  const getImageUrl = (fileName: string) =>
    `https://storage.googleapis.com/sinusoidcms-2024.appspot.com/${fileName}`;
  
  useEffect(() => {
    const fetchEventData = async () => {
      if (eventid && typeof eventid === "string") {
        try {
          const response = await axios.get(`https://api.sinusoid.in/events/${eventid}`);
          const squareBanner = response.data?.imageAsset?.squareBanner?.imgUrl;
          if (squareBanner) {
            setImageUrl(getImageUrl(squareBanner));
          } else {
            setImageUrl(null);
          }
        } catch (error) {
          console.error("Error fetching event data:", error);
          setImageUrl(null);
        }
      }
    };
    fetchEventData();
  }, [eventid]);
  const fallbackImage = "/events/hackathon-35vh.jpg";
  const images = imageUrl ? [imageUrl] : [fallbackImage];
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);
  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }
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
};

export default ImageSlider;
