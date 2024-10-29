import React from "react";
import { SponsorPageMarquee } from "@/components/SponsorPageMarquee/SponsorPageMarquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";
import SponsorComp from "@/components/stylecomponent2/stylecomponent2";
import Partnership from "@/components/partnership/partnership";
import { useState } from "react";
import { X } from "lucide-react";

const Sponsors: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
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
        <div className="w-full md:h-[70vh] h-[30vh] flex items-center justify-center relative overflow-hidden">
          <video
            className="video-element w-full"
            autoPlay
            loop
            muted
            style={{ filter: "blur(6px)" }}
          >
            <source src="/sponsorBG/video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
            style={{ marginTop: "-50px" }}
          >
            <h1 className="mt-10 md:mt-0 text-4xl md:text-6xl font-bold">
              Our Partners
            </h1>
          </div>
        </div>
        <SponsorPageMarquee />
        <div className="relative dark:bg-black bg-white flex items-center justify-center p-4 ">
          <ShineBorder
            className="max-w-4xl w-full dark:bg-[url('/hanging-flex02-bg.png')] rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="relative w-full lg:w-[7%] flex items-center justify-center p-4">
              <div className="text-sm md:text-base dark:text-white text-black lg:[writing-mode:vertical-lr] lg:[text-orientation:upright] font-black">
                TITLE SPONSOR
              </div>
            </div>

            <div className="relative w-full lg:w-[30%] flex flex-col items-center justify-center lg:border-l-4 border-zinc-50 dark:border-zinc-950">
              <Image
                src="/images/Hive.png"
                alt="titleSponsorLogo"
                width={250}
                height={250}
                className="object-contain p-4 z-20"
              />

              {/* Learn More Button to Open Dialog */}
              <button
                onClick={openDialog}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
              >
                Learn More
              </button>
            </div>

            {/* Right Text Section */}
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-between lg:ml-4">
              <div className="dark:text-white text-black text-4xl md:text-5xl font-bold mb-6 space-y-2">
                <span>Fast.</span>
                <br />
                <span>Scalable.</span>
                <br />
                <span>Powerful.</span>
              </div>

              <div className="dark:text-white text-black text-lg md:text-xl font-semibold mt-2">
                The Blockchain for Web3
              </div>
            </div>
          </ShineBorder>

          {/* Dialog Box Overlay */}
          {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-xl w-full h-[80vh] max-w-4xl max-h-[80vh] flex flex-col justify-between relative">
                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
                  Hive - The Blockchain for Web3
                </h2>

                <video
                  className="w-full flex-1 object-cover rounded-md mb-4"
                  controls
                >
                  <source src="/sponsorBG/Hive_video.mp4" type="video/mp4" />
                </video>

                {/* Cross Icon for Close */}
                <X
                  onClick={closeDialog}
                  className="absolute top-4 right-4 w-6 h-6 cursor-pointer text-black dark:text-white hover:text-red-500 transition"
                />
              </div>
            </div>
          )}
        </div>
        <div className="relative dark:bg-black bg-white flex items-center justify-center p-4">
          <ShineBorder
            className="max-w-4xl w-full dark:bg-zinc-900 bg-zinc-200 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row-reverse"
            color={["#00DBDE", "#FC00FF", "#50CC7F"]}
          >
            <div className="relative w-full lg:w-[7%] flex items-center justify-center p-4">
              <div className="text-sm md:text-base dark:text-white text-black lg:[writing-mode:vertical-lr] lg:[text-orientation:upright] font-black">
                CO SPONSOR
              </div>
            </div>
            <div className="relative w-full lg:w-[30%] flex flex-col items-center justify-center lg:border-r-4 border-zinc-50 dark:border-zinc-950">
              <Image
                src="/sponsorLogo/SKOAR.webp"
                alt="coSponsorLogo"
                width={150}
                height={150}
                className="object-contain p-4 z-20"
              />
            </div>
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-between lg:mr-4">
              <div className="dark:text-white text-black text-4xl md:text-5xl font-bold mb-6">
                Co Sponsor
              </div>
              <div className="dark:text-white text-black mb-6 font-bold text-base">
                {
                  "We would also like to acknowledge Skoar. This partnership offers substantial branding opportunities, ensuring high exposure and connection with a diverse audience. As a Co-Sponsor, your brand will be prominently featured throughout the event, ensuring that you stand out in a competitive market. (Previous Sponsor)"
                }
              </div>
            </div>
          </ShineBorder>
        </div>
      </div>
      <SponsorComp />
      <Partnership />
    </>
  );
};

export default Sponsors;
