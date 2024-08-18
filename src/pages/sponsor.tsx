import React from "react";
import { SponsorPageMarquee } from "@/components/SponsorPageMarquee/SponsorPageMarquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Image from "next/image";
import Link from "next/link";

const Sponsors: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Join us in celebrating the future of technology at Tech Fest, proudly supported by our incredible sponsors!"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "partnership",
          "collaboration",
          "benefits",
          "branding",
          "support",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Our Sponsors | siNUsoid v8"
      />
      <div className="w-full h-max p-0 m-0 mt-16">
        <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden">
          <video
            className="video-element"
            width={1500}
            autoPlay
            loop
            muted
            style={{ filter: "blur(8px)" }}
          >
            <source src="/sponsorBG/video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
            style={{ marginTop: "-50px" }}
          >
            <h1 className="text-6xl font-bold mb-8">Our Partners</h1>
          </div>
        </div>
        <SponsorPageMarquee />
        
        
        <div className="relative min-h-[50vh] dark:bg-black bg-white flex items-center justify-center p-4">
          <div className="max-w-4xl w-full dark:bg-zinc-900 bg-zinc-200 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-[30%] flex items-center justify-center md:justify-end p-4 md:border-r-2 border-zinc-400 dark:border-zinc-700">
              <div className="relative w-full h-[20vh] md:h-auto flex items-center justify-center">
                <Image 
                  src="/images/logo_red_mc.png" 
                  alt="siNUsoid Logo" 
                  width={150}
                  height={150}
                  className="object-contain p-4 z-20"
                />
              </div>
            </div>
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-between md:ml-4">
              <h1 className="dark:text-white text-black text-4xl md:text-5xl font-bold mb-6">
                About siNUsoid
              </h1>
              <h3 className="dark:text-white text-black mb-6 font-bold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam deserunt laudantium doloremque minima, iste corporis quaerat animi blanditiis, iure fugiat nostrum eius modi ipsam ex culpa, quasi odit commodi.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
