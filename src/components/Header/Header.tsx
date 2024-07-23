// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaBars, FaHome, FaInfoCircle, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { BrandBar, BrandLogo, NavLinks } from "./stylecomponents";
import { ModeToggle } from "../ui/modetoggle";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkArray = [
    { href: "/", text: "Home", icon: <FaHome /> },
    { href: "/about", text: "About", icon: <FaInfoCircle /> },
    { href: "/events", text: "Events", icon: <FaCalendarAlt /> },
    { href: "/sponsors", text: "Sponsors", icon: <FaHandsHelping />, hoverCardSize: "w-24" }, // Adjust hover card size here
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconClassName = "text-current"; // This will make the color dynamic

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-[10px] rounded-b-xl">
      <nav className="flex justify-between items-center">
        <BrandBar>
          <BrandLogo href="/" className="pr-4">
            <div className="text-lg font-bold">siNUsoid</div>
          </BrandLogo>
        </BrandBar>
        <NavLinks>
          <div className="hidden lg:flex space-x-4">
            {navLinkArray.map((navLink, idx) => (
              <HoverCard key={`navlink_${idx}`}>
                <HoverCardTrigger asChild>
                  <Link href={navLink.href}>
                    <div className={`p-2 ${iconClassName} dark:text-[#FADAC1]`}>
                      {navLink.icon}
                    </div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className={navLink.hoverCardSize ? navLink.hoverCardSize : "w-20"}>
                  <div className="text-center">{navLink.text}</div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </NavLinks>
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
      {isMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          {navLinkArray.map((navLink, idx) => (
            <Link key={`navlink_${idx}`} href={navLink.href}>
              <div className="flex items-center p-3 bg-gray-200 dark:bg-gray-800 rounded">
                <div className={`mr-2 ${iconClassName} dark:text-[#FADAC1]`}>{navLink.icon}</div>
                <span className="text-black dark:text-[#FADAC1]">{navLink.text}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
