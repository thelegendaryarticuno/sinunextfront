import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const Grid = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState('#1D313C');

  useEffect(() => {
    if (theme === 'light') {
      setBgColor('#F0F0F0'); // Light theme background color
    } else {
      setBgColor('#0000'); // Dark theme background color
    }
  }, [theme]);

  return (
    <div className="flex justify-center items-center min-h-screen my-4" style={{ backgroundColor: bgColor }}>
      <div className="w-[80%]">
        <div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
          style={{
            boxShadow: theme === 'light' ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 10px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h2 className="text-center text-5xl font-semibold mb-10 mt-4 text-gray-900 dark:text-gray-100">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-[3rem]">
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className="w-full md:w-full lg:w-1/4 flex justify-center mb-3 lg:mb-[3rem]">
                <ProfileCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
