import React from "react";
import ArtistsMain from "@/components/artistsPageCard/artistsPageCard";

const ArtistsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen mt-24">
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white text-center py-2 text-2xl font-bold shadow-lg mb-10">
        NOW PLAYING
      </div>
      <div className="h-6 md:h-8"></div>

      <ArtistsMain />
    </div>
  );
};

export default ArtistsPage;
