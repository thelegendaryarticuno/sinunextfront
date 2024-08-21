import React from "react";
import { SponsorPageMarquee } from "@/components/SponsorPageMarquee/SponsorPageMarquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";
import SponsorComp from "@/components/stylecomponent2/stylecomponent2";
import Partnership from "@/components/partnership/partnership";

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
        <div className="relative dark:bg-black bg-white flex items-center justify-center p-4">
          <ShineBorder
            className="max-w-4xl w-full dark:bg-zinc-900 bg-zinc-200 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="relative w-full lg:w-[7%] flex items-center justify-center p-4">
              <div className="text-sm md:text-base dark:text-white text-black lg:[writing-mode:vertical-lr] lg:[text-orientation:upright] font-black">
                TITLE SPONSOR
              </div>
            </div>
            <div className="relative w-full lg:w-[30%] flex flex-col items-center justify-center lg:border-l-4 border-zinc-50 dark:border-zinc-950">
              <div>
                <Image
                  src="/sponsorLogo/Ubon.webp"
                  alt="titleSponsorLogo"
                  width={150}
                  height={150}
                  className="object-contain p-4 z-20"
                />
              </div>
            </div>
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-between lg:ml-4">
              <div className="dark:text-white text-black text-4xl md:text-5xl font-bold mb-6">
                Title Sponsor
              </div>
              <div className="dark:text-white text-black mb-6 font-bold text-base">
                We are proud to have had UBON as the Title Sponsor for siNUsoid
                v7. Their support and collaboration were instrumental in the
                success of the event. As the leading name associated with our
                event, our Title Sponsor enjoys unparalleled visibility, and
                engagement with a tech-savvy audience eager to explore.
                (Previous Sponsor)
              </div>
            </div>
          </ShineBorder>
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
                We would also like to acknowledge Skoar. This partnership offers
                substantial branding opportunities, ensuring high exposure and
                connection with a diverse audience. As a Co-Sponsor, your brand
                will be prominently featured throughout the event, ensuring that
                you stand out in a competitive market. (Previous Sponsor)
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
