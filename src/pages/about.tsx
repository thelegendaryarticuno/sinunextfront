// src/pages/about.tsx
import Grid from "@/components/aboutgrid/grid";
import Our from "@/components/aboutwhoarewe/we";
import React from "react";
import AboutHistory from "@/components/abouthistory/collab";
import AboutHero from "@/components/abouthero/hero";





const About: React.FC = () => {
  return (
    <>
    <AboutHero/>
    <AboutHistory/>
    
    <Our/>
    <Grid/>
      
    </>
  );
};

export default About;
