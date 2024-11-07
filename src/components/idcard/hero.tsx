import React, { useState, useEffect } from "react";
import { FaIdCard } from "react-icons/fa";
import IDCardForm from "./form";
import { useTheme } from "next-themes";

const IDCardHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  const isDarkTheme = theme === "dark" || resolvedTheme === "dark";

  return (
    <section
      className={`relative ${
        isDarkTheme
          ? "bg-gradient-to-r from-gray-900 to-black text-white"
          : "bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800"
      } h-[70vh] flex items-center justify-center p-6 md:p-10`}
    >
      <div className="flex flex-col items-center space-y-8 text-center w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4">
          <FaIdCard
            className={`text-6xl md:text-7xl ${
              isDarkTheme ? "text-orange-500" : "text-orange-400"
            }`}
          />
          <h2
            className={`text-4xl md:text-6xl font-extrabold ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            ID Card Registration
          </h2>
        </div>
        <p
          className={`text-xl ${
            isDarkTheme ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Do not miss out on getting your personalized ID card. Register today!
        </p>
        <p
          className={`text-base ${
            isDarkTheme ? "text-gray-400" : "text-gray-800"
          } max-w-xl`}
        >
          Your ID card is essential for accessing exclusive areas, events, and
          discounts. Fill out the form to get yours now and start enjoying the
          perks!
        </p>
        <button
          className={`w-48 h-16 md:w-64 md:h-20 ${
            isDarkTheme
              ? "bg-orange-600 hover:bg-orange-700 text-white"
              : "bg-orange-400 hover:bg-orange-500 text-black"
          } font-semibold rounded-2xl transition-all text-lg md:text-xl`}
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
          <div
            className={`${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } rounded-lg p-10 w-[90%] max-w-lg shadow-lg relative`}
          >
            <IDCardForm />
            <button
              className={`absolute top-4 right-4 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              } text-2xl`}
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
