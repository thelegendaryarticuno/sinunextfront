import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { BrandBar, BrandLogo } from "./stylecomponents";
import { ModeToggle } from "../ui/modetoggle";
import NavLinks, { MobileNavLinks } from "../Constants/proheaderConstant";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ProtectiveHeader: React.FC = () => {
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
          <BrandLogo href="/" className="pr-4 flex items-center">
            <Image src="/logo/logo.png" alt="siNUsoid Logo" width={40} height={40} />
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
          <HoverCard>
            <HoverCardTrigger>
              <Avatar className="hidden md:block">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent
              className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg w-64 mt-2"
              align="center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 relative">
                  <Image
                    src="/logo/logo.png"
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-col space-y-4">
                    <div className="bg-gray-300 w-full h-8 rounded-md flex items-center px-4 text-gray-800">
                      Name:
                    </div>
                    <div className="bg-gray-300 w-full h-8 rounded-md flex items-center px-4 text-gray-800">
                      Name:
                    </div>
                    <div className="bg-gray-300 w-full h-8 rounded-md flex items-center px-4 text-gray-800">
                      Name:
                    </div>
                    <button className="flex items-center justify-center p-3 rounded bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-black dark:text-white">
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <ModeToggle />
        </div>

        <div className="lg:hidden pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-[#000] dark:text-[#FADAC1] p-2 rounded`}
          >
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </button>
        </div>
      </nav>
      {isMenuOpen && <MobileNavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};

export default ProtectiveHeader;
