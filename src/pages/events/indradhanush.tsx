import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Indradhanush_Marquee/indradhanush_marquee";
import React from "react";
import Layout from "../../components/ui/Layout";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import Grid from "@/components/Grid/grid";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Grid 
        image1="/images/image.webp"
        image2="/images/image.webp"
        slogan1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        slogan2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      />
      <SponsorMarquee />
      <FaqSection />
    </Layout>
  );
};

export default Home;
