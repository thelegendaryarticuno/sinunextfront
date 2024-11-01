import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";

interface Artist {
  imageUrl: string;
  artistName: string;
  artistDescription: string;
  instagramLinks: string[];
}

const artistsData: Artist[] = [
  {
    imageUrl: "/images/artist1.png",
    artistName: "Elina Chauhan & VJ Infinity",
    artistDescription:
      "Elina Chauhan is a visionary artist, renowned for her stunning visual storytelling that fuses traditional and modern aesthetics. VJ Infinity is a pioneer in the visual arts scene, crafting mesmerizing audiovisual experiences that transform spaces into immersive journeys.",
    instagramLinks: [
      "https://www.instagram.com/elina_chauhann/",
      "https://www.instagram.com/vj.infinity/",
    ],
  },
  {
    imageUrl: "/images/unknown1.png",
    artistName: "???",
    artistDescription:
      "This mystery artist leaves audiences guessing with enigmatic performances and stunning visuals that intrigue and captivate.",
    instagramLinks: ["https://www.instagram.com/third_link/"],
  },
];

const ArtistsMain: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 w-[100%] mx-auto px-4 md:px-16 z-10 mb-12">
      {artistsData.map((artist, index) => (
        <ArtistContainer key={index} {...artist} />
      ))}
    </div>
  );
};

interface ArtistContainerProps extends Artist {}

const ArtistContainer: React.FC<ArtistContainerProps> = ({
  imageUrl,
  artistName,
  artistDescription,
  instagramLinks,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleHover = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div
      className={`relative w-full md:w-[35%] h-[480px] md:h-[700px] group rounded-lg shadow-lg bg-white dark:bg-gray-800 z-[100] overflow-visible transition-transform duration-500 ease-in-out ${
        isHovered
          ? "scale-110 rotate-2 shadow-2xl rounded"
          : "scale-100 rotate-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggleHover} // For mobile
    >
      <BorderBeam />

      {/* Main Artist Image */}
      <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={artistName}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* New Hover Layer */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered
            ? "opacity-100 bg-gradient-to-r from-purple-500 to-orange-500"
            : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 z-20 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{artistName}</h3>
        <p className="text-center text-sm">{artistDescription}</p>
        <div className="mt-4 flex flex-col gap-2">
          {instagramLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram className="h-6 w-6 text-white animate-bounce" />
              <span className="ml-2 text-sm">
                {link.includes("elina_chauhann")
                  ? "@elina_chauhann"
                  : link.includes("vj.infinity")
                  ? "@vj.infinity"
                  : "@???"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsMain;
