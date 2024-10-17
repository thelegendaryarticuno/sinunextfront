// // imageSlider.tsx

// import { useState, useEffect } from "react";

// interface ImageSliderProps {
//   images: string[]; // Accept an array of images as props
// }

// export default function ImageSlider({ images }: ImageSliderProps) {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Function to cycle images every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 4000); // 4-second interval

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {/* Render only one image at a time with smooth transitions */}
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt={`Event image ${index + 1}`}
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
//             index === currentImage ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/Redux/store";

interface ImageSliderProps {
  defaultImages: string[]; // Accept an array of default images as props
}

export default function ImageSlider({ defaultImages = [] }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const eventData = useSelector((state: RootState) => state.event.eventData);

  // Function to get the image URL from the API or use default images
  const getImageUrl = (fileName: string) =>
    `https://storage.googleapis.com/sinusoidcms-2024.appspot.com/${fileName}`;

  // Extract the square banner image from Redux state or use default images
  const squareBannerUrl = eventData?.imageAsset?.squareBanner?.imgUrl
    ? getImageUrl(eventData.imageAsset.squareBanner.imgUrl)
    : null;

  // Fallback image to be used if no other images are available
  const fallbackImage = "/events/hackathon-35vh.jpg";

  // Construct the final images array
  const images = squareBannerUrl
    ? [squareBannerUrl]
    : defaultImages.length > 0
    ? defaultImages
    : [fallbackImage];

  // Function to cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // 4-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }
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
