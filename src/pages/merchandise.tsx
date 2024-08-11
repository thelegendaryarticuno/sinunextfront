import Hero from "@/components/Hero/Hero";
import React from "react";
import Layout from "../components/ui/Layout";
import MerchBanner from "@/components/MerchBanner/MerchBanner";


const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
