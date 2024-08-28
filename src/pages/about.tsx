import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Our from "@/components/aboutwhoarewe/principlesofSinuSoid";
import React from "react";
import AboutHistory from "@/components/abouthistory/collab";
import AboutHero from "@/components/abouthero/hero";
import MeetTheTeam from "@/components/aboutgrid/ProfileCard";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="siNUsoid had its maiden appearance in 2016. Rooted in the legacy of innovation, each edition delves deeper into groundbreaking themes, pushing the boundaries of tech exploration. Join us at siNUsoid to experience a journey from learning to real-world application, where history meets the future."
        PageKeywords={[
          "sinusoid",
          "techfest",
          "about",
          "team",
          "niit university",
          "legacy",
          "innovation",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="About Us | siNUsoid v8"
      />
      {/* Video Section */}
      <div className="w-full md:h-[70vh] h-[40vh] flex items-center justify-center relative overflow-hidden mt-20">
        <video
          className="video-element w-full"
          width={1500}
          autoPlay
          loop
          muted
          style={{ filter: "blur(8px)" }}
        >
          <source src="/sponsorBG/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold">
          <h1 className="text-6xl font-bold mb-8">About Us</h1>
        </div>
      </div>

      {/* GIF Section */}
      <div className="w-[80%] h-[25vh] mx-auto rounded-2xl justify-center items-center relative py-4 my-4">
        <Image
          src="/images/sinuVersionText.gif" // replace with the actual path to your GIF
          alt="About Us GIF"
          layout="fill"
          objectFit="contain"
          className="p-2 my-2 justify-center items-center w-[80%] bg-zinc-600 rounded-3xl"
        />
      </div>
      <AboutHistory />
      <Our />
      <MeetTheTeam />
    </>
  );
};

export default About;
