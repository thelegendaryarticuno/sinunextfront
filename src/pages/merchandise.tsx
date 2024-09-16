import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import MerchAccordion from "@/components/MerchAccordian/merchaccordian";
import MerchSection from "@/components/MerchSection/merchsection";

const Merchandise: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const logoSrc = isDark
    ? "/events/Dark30vh.png" // Dark mode logo
    : "/events/Light30vh.png"; // Light mode logo

  const hero =
    resolvedTheme === "dark"
      ? "/heroVideo/0001-0160.mkv"
      : "/heroVideo/0001-0160.mkv";

  return (
    <>
      <SEOComponent
        PageDescription="Welcome to our merchandise page! Explore our collection of branded products and show your support for siNUsoid techfest."
        PageKeywords={[
          "sinusoid",
          "techfest",
          "merchandise",
          "branded products",
          "support",
          "niit university",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Merchandise | siNUsoid v8"
      />

      <div className="bg-black w-full md:h-[70vh] h-[40vh] flex items-center justify-center relative overflow-hidden mt-20">
        <div className="flex justify-center w-[30vw] h-screen px-52 py-20">
          <video
            src={hero}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold">
          <h1 className="hidden lg:flex text-6xl font-bold mb-8 z-[10]">
            Merchandise
          </h1>
        </div>
      </div>

      <Link href="/events/hiveweb3hackathon">
        <div className="relative flex justify-center items-center w-full h-[30vh] mt-2">
          <Image
            src={logoSrc}
            alt="Theme Specific Logo"
            layout="fill"
            objectFit="fill"
            className="p-0"
          />
        </div>
      </Link>

      <MerchSection />
      <MerchAccordion />
    </>
  );
};

export default Merchandise;
