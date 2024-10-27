import React from "react";
import PrForms from "@/components/prforms/accomodation";
import { useTheme } from "next-themes";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Page = () => {
  const { theme } = useTheme(); // <-- Move this inside the component body
  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-800 via-gray-800 to-orange-700 "
      : "bg-gradient-to-r from-purple-200 via-pink-300 to-red-200";

  return (
    <>
      <SEOComponent
        PageDescription="Join us at siNUsoid v8! Choose from Silver, Gold, and Platinum plans for an exclusive tech fest experience. Enjoy full event access, accommodation, DJ nights, and more. Register now!"
        PageKeywords={[
          "siNUsoid v8",
          "techfest",
          "accommodation registration",
          "silver plan",
          "gold plan",
          "platinum plan",
          "tech events",
          "hackathons",
          "coding competitions",
          "DJ night",
          "campus stay",
          "meals",
          "gaming",
          "accomodation",
        ]}
        PageOGLImage="https://sinusoid.in/socialLogo.jpg"
        PageTitle="Accommodation Registration | siNUsoid v8"
      />
      <div>
        <div className={`flex justify-center ${bgColor} mt-8`}>
          <PrForms />
        </div>
      </div>
    </>
  );
};

export default Page;
