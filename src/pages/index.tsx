import Hero from "@/components/Hero/Hero";
import { MarqueeDemo } from "@/components/Marquee/marquee";
import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MarqueeDemo />
    </Layout>
  );
};

export default Home;
