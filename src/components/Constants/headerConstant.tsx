import React from "react";
import Link from "next/link";
import { FaInfoCircle, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export const navLinkArray = [
  { href: "/about", text: "About", icon: <FaInfoCircle /> },
  { href: "/events", text: "Events", icon: <FaCalendarAlt /> },
  { href: "/sponsor", text: "Sponsor", icon: <FaHandsHelping />, hoverCardSize: "w-24" },
];

const iconClassName = "text-current"; // This will make the color dynamic

export const NavLinks: React.FC = () => (
  <div className="hidden lg:flex space-x-4 px-4 items-center">
    {navLinkArray.map((navLink, idx) => (
      <HoverCard key={`navlink_${idx}`}>
        <HoverCardTrigger asChild>
          <Link href={navLink.href}>
            <div
              className={`flex flex-row gap-1 items-center p-2 ${iconClassName} dark:text-[#FADAC1]`}
            >
              {navLink.icon}
              {navLink.text}
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent
          className={`${navLink.hoverCardSize ? navLink.hoverCardSize : "w-20"} bg-white dark:bg-black`}
        >
          <div className="text-center">{navLink.text}</div>
        </HoverCardContent>
      </HoverCard>
    ))}
  </div>
);

interface MobileNavLinksProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ setIsMenuOpen }) => (
  <div className="lg:hidden mt-2 space-y-2">
    {navLinkArray.map((navLink, idx) => (
      <Link key={`navlink_${idx}`} href={navLink.href} onClick={() => setIsMenuOpen(false)}>
        <div className="flex items-center p-3 bg-gray-200 dark:bg-gray-800 rounded">
          <div className={`mr-2 ${iconClassName} dark:text-[#FADAC1]`}>{navLink.icon}</div>
          <span className="text-black dark:text-[#FADAC1]">{navLink.text}</span>
        </div>
      </Link>
    ))}
    {/* <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
      <div className="flex items-center justify-center p-3 rounded bg-orange-400 dark:bg-orange-600 hover:bg-orange-800 dark:hover:bg-orange-800 text-black dark:text-white">
        Sign In
      </div>
    </Link> */}
  </div>
);

export default NavLinks;
