// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { BrandBar, BrandLogo } from "./stylecomponents";
import { ModeToggle } from "../ui/modetoggle";
import NavLinks, { MobileNavLinks } from "../Constants/headerConstant";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-[10px] rounded-b-xl fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center">
        <BrandBar>
          <BrandLogo href="/" className="pr-4">
            <div className="text-lg font-bold">siNUsoid</div>
          </BrandLogo>
        </BrandBar>
        <NavLinks />
        <div className="lg:hidden pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-[#000] dark:text-[#FADAC1] p-2 rounded`}
          >
            <FaBars />
          </button>
        </div>
        <div className="space-x-4">
          <ModeToggle />
        </div>
      </nav>
      {isMenuOpen && <MobileNavLinks />}
    </header>
  );
};

export default Header;
