// components/Banner.tsx
import ImageSlider from "./imageSlider";

export default function Banner() {
  const images = [
    { src: "/events/hackathon-35vh.jpg", link: "/plans" },
    { src: "/events/1.png", link: "/events" },
    { src: "/events/Light30vh.png", link: "/contactus" },
  ];

  return (
    <div className="h-[30vh] w-full flex items-center justify-center p-4">
      {/* Left Section */}
      <div className="w-[60vw] h-full bg-gray-200 rounded-lg p-4 mr-4">
        <h1 className="text-3xl text-black font-bold mb-2">
          Welcome to the Banner
        </h1>
        <p className="text-lg text-black">
          This is the left section where you can place any content or text.
        </p>
      </div>

      {/* Right Section with Image Slider */}
      <div className="w-[40vw] h-full bg-white rounded-lg overflow-hidden">
        <ImageSlider imageFiles={images} />
      </div>
    </div>
  );
}
