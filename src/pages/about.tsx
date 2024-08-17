// src/pages/about.tsx
import ICollab from "@/components/aboutcollab/collab";
import Grid from "@/components/aboutgrid/grid";
import YHero from "@/components/abouthero/hero";
import Our from "@/components/aboutwhoarewe/we";

import React from "react";

const About: React.FC = () => {
  return (
    <>
    <YHero/>
    <ICollab/>
    <Our/>
    <Grid/>
      
    </>
  );
};

export default About;
