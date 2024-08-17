// src/pages/about.tsx
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="siNUsoid had its maiden appearance in 2016. Rooted in the legacy of innovation, each edition delves deeper into groundbreaking themes, pushing the boundaries of tech exploration. Join us at siNUsoid to experience a journey from learning to real-world application, where history meets the future."
        PageKeywords={[
          "sinusoid",
          "techfest",
          "about",
          "team",
          "niit university",
          "legacy",
          "innovation",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="About Us | siNUsoid v8"
      />
      <h1 className="min-h-[64vh]">COMING SOON...</h1>
    </>
  );
};

export default About;
