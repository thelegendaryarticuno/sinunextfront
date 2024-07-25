import Hero from "@/components/Hero/Hero";
import { SponsorMarquee } from "@/components/Marquee/marquee";
import React from "react";
import Layout from "../components/Layout";
import lightBanner from '../../public/images/light.jpg';
import darkBanner from '../../public/images/dark.jpg';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero  lightImage={lightBanner.src}
            darkImage={darkBanner.src}/>
      <SponsorMarquee />
    </Layout>
  );
};

export default Home;
