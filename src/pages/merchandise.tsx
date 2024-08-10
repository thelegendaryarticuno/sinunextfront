import Hero from "@/components/Hero/Hero";
import React from "react";
import Layout from "../components/ui/Layout";
import { FaqSection } from "@/components/FaqSection/FaqSection";


const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FaqSection />
    </Layout>
  );
};

export default Home;
