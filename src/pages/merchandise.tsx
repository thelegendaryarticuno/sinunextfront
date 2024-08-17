import Hero from "@/components/Hero/Hero";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React from "react";


const Home: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Welcome to our merchandise page! Explore our collection of branded products and show your support for siNUsoid techfest."
        PageKeywords={["sinusoid", "techfest", "merchandise", "branded products", "support", "niit university"]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Merchandise | siNUsoid v8"
      />
      <Hero />
    </>
  );
};

export default Home;
