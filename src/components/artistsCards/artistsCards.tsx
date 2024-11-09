import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

interface ArtistContainerProps {
  imageUrl: string;
  artistName: string;
  artistDescription: string;
  instagramHandle1?: string;
  instagramLink1?: string;
  instagramHandle2?: string;
  instagramLink2?: string;
  position?: "left" | "right"; // New prop to control position of side boxes
}

const ArtistContainer: React.FC<ArtistContainerProps> = ({
  imageUrl,
  artistName,
  artistDescription,
  instagramHandle1,
  instagramLink1,
  instagramHandle2,
  instagramLink2,
  position = "right", // Default to right if position is not provided
}) => {
  return (
    <div className="relative w-full max-w-[90vw] h-[70vh] bg-gray-100 dark:bg-gray-900 md:max-w-[400px] md:h-[75vh] md:rounded-lg md:shadow-lg mb-0 mx-auto">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={artistName}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="md:rounded-lg"
        />
        <div className="absolute inset-0 bg-white opacity-20 md:hidden"></div>
      </div>
      <div className="md:hidden flex flex-col justify-end h-full p-0 bg-black bg-opacity-50 text-white z-10">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-4xl font-bold text-center mb-4 z-20">{artistName}</h2>
          <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 w-full px-4">
            <div className="flex-shrink-0 w-full snap-center bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-lg text-center">
              <h4 className="font-semibold text-lg mb-2">Instagram</h4>
              {instagramLink1 && instagramHandle1 && (
                <a
                  href={instagramLink1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-2"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="ml-2 text-sm">{instagramHandle1}</span>
                </a>
              )}
              {instagramLink2 && instagramHandle2 && (
                <a
                  href={instagramLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-2"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="ml-2 text-sm">{instagramHandle2}</span>
                </a>
              )}
            </div>
            <div className="flex-shrink-0 w-full snap-center bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-lg text-center">
              <h4 className="font-semibold text-lg mb-2">About</h4>
              <p className="text-sm">{artistDescription || "No description available"}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:flex flex-col h-full p-8 bg-opacity-50 bg-gray-900 text-gray-900 ${
          position === "left" ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`absolute top-10 ${
            position === "left" ? "left-[-150px] md:left-[-175px]" : "right-[-150px] md:right-[-175px]"
          } z-20 flex flex-col gap-4`}
        >
          <div className="bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-lg w-[200px] h-[120px] text-center">
            <h4 className="font-semibold text-lg mb-2">Instagram</h4>
            {instagramLink1 && instagramHandle1 && (
              <a
                href={instagramLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-2"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="ml-2 text-sm">{instagramHandle1}</span>
              </a>
            )}
            {instagramLink2 && instagramHandle2 && (
              <a
                href={instagramLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-2"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="ml-2 text-sm">{instagramHandle2}</span>
              </a>
            )}
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-lg w-[200px] h-[120px] text-center mt-20">
            <h4 className="font-semibold text-lg mb-2">About</h4>
            <p className="text-sm">{artistDescription || "No description available"}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-auto">
          <h2 className="text-2xl font-bold text-center mb-6">{artistName}</h2>
        </div>
      </div>
    </div>
  );
};

const Artists: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-4 md:pt-48 pb-40 px-4 md:px-8">
      <div>
        <ArtistContainer
          imageUrl="/images/vj_infinity.webp"
          artistName="VJ Infinity"
          artistDescription="Dynamic musical duo bringing you electrifying performances."
          instagramHandle1="@vj.infinity"
          instagramLink1="https://www.instagram.com/vj.infinity/"
          position="left"
        />
      </div>
      <div>
        <ArtistContainer
          imageUrl="/images/elina.webp"
          artistName="Elina Chauhan"
          artistDescription="An enigmatic presence with captivating tunes."
          instagramHandle1="@elina_chauhann"
          instagramLink1="https://www.instagram.com/elina_chauhann/"
        />
      </div>
      <div className="md:col-span-2">
        <ArtistContainer
          imageUrl="/images/unknown1.png"
          artistName="DJ Shadow"
          artistDescription="A journey through sound and rhythm with the iconic DJ Shadow."
          instagramHandle1="@dj_shadow"
          instagramLink1="https://www.instagram.com/dj_shadow/"
        />
      </div>
    </div>
  );
};

export default Artists;
