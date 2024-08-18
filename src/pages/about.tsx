// src/pages/about.tsx
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Our from "@/components/aboutwhoarewe/we";
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
    <AboutHero/>
    <AboutHistory/>
    <MeetTheTeam/>
    
    <Our/>
    </>
  );
};

export default About;
