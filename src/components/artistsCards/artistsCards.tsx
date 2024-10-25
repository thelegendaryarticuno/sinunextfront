import React, { useState } from "react";
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import { FaInstagram } from "react-icons/fa";

interface ArtistContainerProps {
  imageUrl: string;
  artistName: string;
  artistDescription: string;
  instagramLink?: string;
  instagramLink2?: string;
}

const ArtistContainer: React.FC<ArtistContainerProps> = ({
  imageUrl,
  artistName,
  artistDescription,
  instagramLink,
  instagramLink2,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 relative w-full md:w-[400px] h-[550px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BorderBeam />
      <div className="absolute inset-0 flex items-end">
        <Image
          src={imageUrl}
          alt="Artist"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Rectangle Container for Artist Name and Description */}
      <div
        className={`absolute ${
          imageUrl === "/images/vj_infinity.webp"
            ? "right-[120px] top-[370px] md:right-[-270px] md:top-[20px]"
            : "right-[120px] top-[370px] md:bottom-[50px] md:left-[-270px]"
        } bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-[220px] h-[150px] md:w-[300px] md:h-[160px]`}
      >
        <h3 className="text-lg font-bold text-black dark:text-white">
          {artistName}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {artistDescription}
        </p>

        {/* Social Media Box for Instagram */}
        <div className="mt-2 flex flex-col gap-2">
          {instagramLink && (
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                @vj.infinity
              </span>
            </a>
          )}
          {instagramLink2 && (
            <a
              href={instagramLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                @elina_chauhann
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Artists: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-96 p-8 justify-center">
      <ArtistContainer
        imageUrl="/images/vj_infinity.webp"
        artistName="Elina Chauhan & VJ Infinity"
        artistDescription=""
        instagramLink="https://www.instagram.com/vj.infinity/"
        instagramLink2="https://www.instagram.com/elina_chauhann/"
      />
      <ArtistContainer
        imageUrl="/images/unknown1.png"
        artistName="???"
        artistDescription="???"
      />
    </div>
  );
};

export default Artists;
