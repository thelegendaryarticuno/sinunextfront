import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const sponsors = [
  "/images/HiveVerticalLogo.png",
  "/sponsorLogo/Trends.webp",
  "/sponsorLogo/2Oh.png",
  "/sponsorLogo/BaskinRobins.webp",
  "/sponsorLogo/7.png",
  "/sponsorLogo/NYNAEVE.png",
  "/sponsorLogo/Trikon.png",
  "/sponsorLogo/RedBull.webp",
  "/sponsorLogo/studCops.webp",
  "/sponsorLogo/MetaSoilVerse.webp",
  "/sponsorLogo/infinix.webp",
  "/sponsorLogo/flyjone2.png",
  "/sponsorLogo/BCH.webp",
  "/sponsorLogo/DayNeemrana.webp",
  "/sponsorLogo/Ramada.webp",
  "/sponsorLogo/GDX.png",
  "/sponsorLogo/MemoryBlaze.webp",
  "/sponsorLogo/Bustro.webp",
  "/sponsorLogo/KGEN.png",
  "/sponsorLogo/RoyalEnfield.webp"
];

const SponsorComp: React.FC = () => {
  const { theme } = useTheme();
  // const partnersColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="w-full px-5 bg-primary text-white py-16">
      <h2 className="text-center text-6xl font-bold mb-12 dark:text-white text-black">
        PARTNERS
      </h2>
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center">
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
