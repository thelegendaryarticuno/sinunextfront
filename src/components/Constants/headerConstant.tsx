import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaCalendarAlt,
  FaHandsHelping,
  FaShoppingCart,
} from "react-icons/fa";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";
// import SignIn from "../SignIn/signin";

export const navLinkArray = [
  { href: "/about", text: "About", icon: <FaInfoCircle /> },
  { href: "/events", text: "Events", icon: <FaCalendarAlt /> },
  {
    href: "/sponsor",
    text: "Sponsor",
    icon: <FaHandsHelping />,
    hoverCardSize: "w-24",
  },
  {
    href: "/merchandise",
    text: "Merchandise",
    icon: <FaShoppingCart />,
    hoverCardSize: "w-30",
  },
];

const iconClassName = "text-current";

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
          className={`${
            navLink.hoverCardSize ? navLink.hoverCardSize : "w-30"
          } bg-white dark:bg-black`}
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

export const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  setIsMenuOpen,
}) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

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

  return (
    <>
      <div className="lg:hidden mt-2 space-y-2">
        {navLinkArray.map((navLink, idx) => (
          <Link
            key={`navlink_${idx}`}
            href={navLink.href}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center p-3 bg-gray-200 dark:bg-gray-800 rounded">
              <div className={`mr-2 ${iconClassName} dark:text-[#FADAC1]`}>
                {navLink.icon}
              </div>
              <span className="text-black dark:text-[#FADAC1]">
                {navLink.text}
              </span>
            </div>
          </Link>
        ))}
        {/* <button
          onClick={() => setIsSignInOpen(true)} 
          className="flex items-center justify-center p-3 rounded bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-800 text-black dark:text-white w-full"
        >
          Sign In
        </button> */}
      </div>

      {/* {isSignInOpen && <SignIn setIsSignInOpen={setIsSignInOpen} />} */}
    </>
  );
};

export default NavLinks;
