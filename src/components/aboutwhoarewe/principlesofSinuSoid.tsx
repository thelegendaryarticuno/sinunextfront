import React from 'react';
import Image from 'next/image';

type WeProps = {
  imageSrc: string;
  title: string;
  description: string;
  principles: string[];
};

const We: React.FC<WeProps> = ({ imageSrc, title, description, principles }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full h-full max-w-[32rem]">
        <Image
            src={imageSrc}
            alt="Group of people"
            layout="responsive"
            width={800}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="md:w-[40%] mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">{title}</h1>
        <p className="text-lg mt-4  text-gray-700 dark:text-gray-300">{description}</p>
        <h2 className="text-2xl font-bold mt-6 text-black dark:text-white">Our Principles:</h2>
        <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          {principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PrinciplesofSinuSoid: React.FC = () => {
  return (
    <We
      imageSrc="/images/weTeamImg.jpg"
      title="What we're all about:"
      description="siNUsoid is far from your average tech fest. It's a wild ride through the coolest corners of technology, bringing together future innovators, tech geeks and those seeking knowledge. We celebrate technological advancements with the help of mind-blowing pre-fest events and thrilling on-fest events, all under the theme for each year's edition. And believe us when we say, there's something for everyone here. So why wait? Come explore the awesome world of tech and create truly amazing memories together with siNUsoid v8."
      principles={[
        "Embrace every fail; it's not the end of the world",
        "Celebrate the nerds; if we don't, who will?",
        "Dream big; shoot for the stars!",
        "Boring is banned; we're here to have a good time!",
        "Peace, love and plants ☘️ <3",
        "Inclusivity is key, we definitely support everyone (>.<)",
        "Touch grass, feel the air on your face!",
      ]}
    />
  );
};

export default PrinciplesofSinuSoid;
