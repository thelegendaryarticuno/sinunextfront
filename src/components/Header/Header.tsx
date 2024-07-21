// src/components/Header.tsx
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandBar, BrandLogo, NavLinks } from "./stylecomponents";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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
          {navLinkArray.map((navLink, idx) => (
            <Link key={`navlink_${idx}`} href={navLink.href}>
              <div className="p-2">{navLink.text}</div></Link>
          ))}
        </NavLinks>
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
    </header>
  );
};

export default Header;
