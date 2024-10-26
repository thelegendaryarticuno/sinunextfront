import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface ArtistContainerProps {
  imageUrl: string;
  artistName: string;
  artistDescription: string;
  instagramLink?: string;
  instagramLink2?: string;
  instagramLink3?: string;
  positionClass: string;
}

const ArtistContainer: React.FC<ArtistContainerProps> = ({
  imageUrl,
  artistName,
  artistDescription,
  instagramLink,
  instagramLink2,
  instagramLink3,
  positionClass,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-6 relative w-[280px] h-[500px] md:w-[400px] md:h-[550px] mx-auto md:mx-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BorderBeam />

      {/* Image Container */}
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
        className={`absolute ${positionClass} bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-[220px] h-[150px] md:w-[300px] md:h-[160px]`}
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
          {instagramLink3 && (
            <a
              href={instagramLink3}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                @???
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
    <div className="flex flex-col items-center p-8">
      <div className="flex items-center mb-8 group">
        {" "}
        {/* Added group class here */}
        <Link href="/artists" passHref>
          <h2 className="text-5xl font-bold cursor-pointer text-gray-800 dark:text-white group-hover:text-orange-600 transition duration-300">
            Performing Artists
          </h2>
        </Link>
        <Link href="/artists" passHref>
          <FaArrowRight className="ml-2 text-3xl cursor-pointer text-gray-800 dark:text-white group-hover:text-orange-600 transition duration-300" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-96 justify-center">
        <ArtistContainer
          imageUrl="/images/artist1.png"
          artistName="Elina Chauhan & VJ Infinity"
          artistDescription=""
          instagramLink="https://www.instagram.com/vj.infinity/"
          instagramLink2="https://www.instagram.com/elina_chauhann/"
          positionClass="left-1/2 transform -translate-x-1/2 bottom-[20px] md:top-[20px] md:left-[87%] md:translate-x-[0]"
        />
        <ArtistContainer
          imageUrl="/images/unknown1.png"
          artistName="???"
          artistDescription="???"
          positionClass="left-1/2 transform -translate-x-1/2 bottom-[20px] md:bottom-[20px] md:left-[-100px]"
          instagramLink3="#"
        />
      </div>
    </div>
  );
};

export default Artists;
