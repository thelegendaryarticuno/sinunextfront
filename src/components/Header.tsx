// src/components/Header.tsx
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function getThemeIcon() {
    return theme === "light" ? "🌞" : "🌜";
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">siNUsoid</div>
        </Link>
        <div className="space-x-4">
          <button
            className={
              "py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
            }
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {getThemeIcon()}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
