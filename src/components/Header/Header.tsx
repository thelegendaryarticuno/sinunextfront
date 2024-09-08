import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { BrandBar, BrandLogo } from "./stylecomponents";
import { ModeToggle } from "../ui/modetoggle";
import NavLinks, { MobileNavLinks } from "../Constants/headerConstant";
import Image from "next/image";
// import SignIn from "../SignIn/signin";
import Link from "next/link";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSignInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSignInOpen]);

  if (!mounted) return null;

  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 p-[10px] rounded-b-xl fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center">
          <BrandBar>
            <BrandLogo href="/" className="pr-4 flex items-center">
              <Image
                src="/logo/logo.png"
                alt="siNUsoid Logo"
                width={40}
                height={40}
              />
              <Image
                src="/logo/textlogo.png"
                alt="siNUsoid Logo"
                width={150}
                height={50}
                className="ml-2"
              />
            </BrandLogo>
            <NavLinks />
          </BrandBar>

          <div className="flex space-x-4 items-center">
            {/* <button
              onClick={() => setIsSignInOpen(true)}
              className="hidden md:block w-24 text-center p-2 rounded bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-800 text-black dark:text-white"
            >
              Sign In
            </button> */}
            <ModeToggle />
          </div>

          <div className="lg:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-[#000] dark:text-[#FADAC1] p-2 rounded`}
            >
              <FaBars />
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <MobileNavLinks
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </header>

      {/* {isSignInOpen && <SignIn setIsSignInOpen={setIsSignInOpen} />} */}
    </>
  );
};

export default Header;
