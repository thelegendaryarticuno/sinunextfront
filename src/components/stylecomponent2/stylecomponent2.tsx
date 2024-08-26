import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const sponsors = [
  "/sponsorLogo/Jio.webp",
  "/sponsorLogo/Microsoft.webp",
  "/sponsorLogo/MountainDew.webp",
  "/sponsorLogo/Kaspersky.webp",
  "/sponsorLogo/RoyalEnfield.webp",
  "/sponsorLogo/bewakoof.webp",
  "/sponsorLogo/sbi.webp",
  "/sponsorLogo/ramada.webp",
  "/sponsorLogo/zomato.webp",
  "/sponsorLogo/Gigabyte.webp"
];

const SponsorComp: React.FC = () => {
  const { theme } = useTheme();
  // const partnersColor = theme === "dark" ? "#ffffff" : "#000000";  // Corrected color codes

  return (
    <div className="w-full px-5 bg-primary text-white py-16">
      <h2 className="text-center text-6xl font-bold mb-12 dark:text-white text-black">
        PARTNERS
      </h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorComp;
