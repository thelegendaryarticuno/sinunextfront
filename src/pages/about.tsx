// src/pages/about.tsx
import Our from "@/components/aboutwhoarewe/we";
import React from "react";
import AboutHistory from "@/components/abouthistory/collab";
import AboutHero from "@/components/abouthero/hero";
import ImageCard from "@/components/aboutgrid/ProfileCard";
import MeetTheTeam from "@/components/aboutgrid/ProfileCard";

const About: React.FC = () => {
  return (
    <>
    <AboutHero/>
    <AboutHistory/>
    <MeetTheTeam/>
    <Our/>
    </>
  );
};

export default About;
