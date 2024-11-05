import React, { useState, useEffect } from "react";
import { FaIdCard } from "react-icons/fa";
import IDCardForm from "./form";
import { useTheme } from "next-themes";

const IDCardHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { theme } = useTheme();
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-400 via-slate-500 to-slate-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black h-[80vh] flex items-center justify-center text-white rounded-lg shadow-xl p-10">
      <div className="flex flex-col items-center space-y-8 text-center w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4">
          <FaIdCard className={`text-7xl ${theme === 'dark' ? 'text-orange-500' : 'text-orange-400'}`} />
          <h2 className={`text-6xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>ID Card Registration</h2>
        </div>
        <p className={`text-xl ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          Don't miss out on getting your personalized ID card. Register today!
        </p>
        <p className="text-base text-gray-300 dark:text-gray-400 max-w-xl">
          Your ID card is essential for accessing exclusive areas, events, and
          discounts. Fill out the form to get yours now and start enjoying the
          perks!
        </p>
        <button
          className="w-64 h-20 bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-black dark:text-white font-semibold rounded-2xl transition-all text-xl"
          onClick={openDialog}
        >
          Get Yours Now!
        </button>
      </div>

      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className={`${theme === 'dark' ? 'bg-[#1a1a2e]' : 'bg-white'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg p-10 w-[90%] max-w-lg shadow-lg relative`}>
            <IDCardForm />
            <button
              className={`absolute top-4 right-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-2xl`}
              onClick={closeDialog}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default IDCardHero;
