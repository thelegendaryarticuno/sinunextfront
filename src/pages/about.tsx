// src/pages/about.tsx
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Our from "@/components/aboutwhoarewe/principlesofSinuSoid";
import React from "react";
import AboutHistory from "@/components/abouthistory/collab";
import AboutHero from "@/components/abouthero/hero";
import MeetTheTeam from "@/components/aboutgrid/ProfileCard";

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
      {/* <AboutHero/> */}
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden mt-20">
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold"
          // style={{ marginTop: "-50px" }}
        >
          <h1 className="text-6xl font-bold mb-8">About Us</h1>
        </div>
      </div>
      {/* <div className="w-full h-[30vh] flex items-center justify-center relative ">
        <div className="flex justify-center items-center w-[90vw] h-[80%] rounded-lg bg-slate-300">
          dw
        </div>
      </div> */}
      <AboutHistory />
      <Our />
      <MeetTheTeam />
    </>
  );
};

export default About;
