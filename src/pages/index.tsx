import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import React from "react";
import Layout from "../components/ui/Layout";
import { FaqSection } from "@/components/FaqSection/FaqSection";
import AboutSection from "@/components/AboutSection/AboutSection";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <SponsorMarquee />
      <FaqSection />
    </Layout>
  );
};

export default Home;
