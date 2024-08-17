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
        <div className="relative w-full h-full max-w-md">
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

const Our: React.FC = () => {
  return (
    <We
      imageSrc="/images/we.png"  
      title="What we're all about:"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum massa nec augue facilisis, sed malesuada nulla dapibus. Quisque gravida, risus eget tincidunt sagittis, sapien velit iaculis orci, sed dictum ligula quam id nulla. Nulla facilisi. Curabitur vehicula ligula nec est cursus, a ullamcorper justo aliquet."
      principles={[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ]}
    />
  );
};

export default Our;
