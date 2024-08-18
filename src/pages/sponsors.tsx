import React from "react";
import { SponsorPageMarquee } from "@/components/SponsorPageMarquee/SponsorPageMarquee";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Sponsors: React.FC = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Join us in celebrating the future of technology at Tech Fest, proudly supported by our incredible sponsors!"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "partnership",
          "collaboration",
          "benefits",
          "branding",
          "support",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Our Sponsors | siNUsoid v8"
      />
      <h1>COMING SOON...</h1>
    </>
  );
  return (
    <>
      <div className="w-full h-screen p-0 m-0 mt-16">
        <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden">
          <video
            className="video-element"
            width={1500}
            autoPlay
            loop
            muted
            style={{ filter: "blur(8px)" }}
          >
            <source src="/sponsorBG/video.mp4" type="video/mp4" />
          </video>

          {/* Text overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
            style={{ marginTop: "-50px" }}
          >
            <h1 className="text-6xl font-bold mb-8">Our Partners</h1>
            {/* <p className="max-w-2xl text-lg leading-relaxed">
              Sponsoring our event offers you a unique opportunity to showcase your brand to a wide and engaged audience.
              You will gain visibility and credibility within the industry, making meaningful connections with potential customers and partners.
              Our platform provides the perfect stage to launch new products or services.
              Be a part of something special, align your brand with innovation and creativity.
              Join us as a sponsor and take advantage of this exclusive opportunity to stand out from the competition.
            </p> */}
          </div>
        </div>
        <SponsorPageMarquee />
      </div>
    </>
  );
};

export default Sponsors;
