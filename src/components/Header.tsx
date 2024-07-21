// src/components/Header.tsx
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">My Next.js Project</div>
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
