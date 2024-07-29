import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import React from "react";
import Layout from "../components/Layout";
import { AccordionFAQ } from "@/components/Accordion/accordion";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <SponsorMarquee />
      <AccordionFAQ />
    </Layout>
  );
};

export default Home;
