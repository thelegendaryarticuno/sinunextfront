import React from 'react';

interface MerchBannerProps {
  Banner?: string;
}

const MerchBanner: React.FC<MerchBannerProps> = ({ Banner = '/images/merchbanner.png' }) => {
  const bannerImage = Banner;

  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative w-full h-screen p-0 m-0 overflow-hidden dark:bg-black bg-white">
      <div
        className="w-[80%] h-[30vh] flex flex-col justify-center pr-12 text-right relative mx-auto rounded-lg overflow-hidden"
        style={bannerStyle}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
        
        <div className="relative p-4 w-full h-full flex flex-col justify-center items-end">
          <h1 className="md:text-6xl text-3xl font-bold text-white mb-2">Merchandise</h1>
          <h2 className="md:text-6xl text-3xl font-bold text-white mb-2">lorem</h2>
          <h2 className="md:text-6xl text-3xl font-bold text-white mb-2">ipsum</h2>
          <h2 className="md:text-6xl text-3xl font-bold text-white mb-2">qberha</h2>
        </div>
      </div>
    </div>
  );
};

export default MerchBanner;
