import React from "react";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Artists from "@/components/artistsCards/artistsCards";

const Sponsors: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="#"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "artists",
          "djnight",
          "music",
          "branding",
          "support",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Artists | siNUsoid v8"
      />
      <div className="mt-32 flex justify-center mb-28">
        <div className="scale-125 w-[80%] mt-28 mb-10 md:mt-0 md:mb-0 max-w-6xl">
          <Artists />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
