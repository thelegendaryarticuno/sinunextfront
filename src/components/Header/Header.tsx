// src/components/Header.tsx
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NavbarBrandBar } from "./genericComponents";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-slate-100 dark:bg-black p-2 rounded-b-xl">
      <nav className="flex justify-between items-center pr-6">
        <NavbarBrandBar />
        {/* <div className="text-lg font-bold">siNUsoid</div> */}
        <div className="space-x-4">
          <button
            className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
