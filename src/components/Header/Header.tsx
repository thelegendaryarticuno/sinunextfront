// src/components/Header.tsx
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandBar, BrandLogo, NavLinks } from "./stylecomponents";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkArray = [
    { href: "/about", text: "About" },
    { href: "/events", text: "Events" },
    { href: "/sponsors", text: "Sponsors" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-4 rounded-b-xl">
      <nav className="flex justify-between items-center ">
        <BrandBar>
          <BrandLogo href="/" className="pr-4">
            <div className="text-lg font-bold">siNUsoid</div>
          </BrandLogo>
        </BrandBar>
        <NavLinks>
          <div className={"hidden lg:flex space-x-4"}>
            {navLinkArray.map((navLink, idx) => (
              <Link key={`navlink_${idx}`} href={navLink?.href}>
                <div className="p-2">{navLink?.text}</div>
              </Link>
            ))}
          </div>
        </NavLinks>
        <div className="lg:hidden pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white bg-blue-500 p-2 rounded"
          >
            Menu
          </button>
        </div>
        <div className="space-x-4">
          <button
            className={
              "py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
            }
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌞" : "🌜"}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          {navLinkArray.map((navLink, idx) => (
            <Link key={`navlink_${idx}`} href={navLink.href}>
              <div className="block p-2 bg-gray-200 dark:bg-gray-800 rounded">
                {navLink.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
