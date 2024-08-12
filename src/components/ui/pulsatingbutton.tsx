"use client";

import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  const { theme } = useTheme();
  
  const buttonColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const pulseThemeColor = theme === "dark" ? "#838282" : "#eeeeee"; // Adjust according to your dark/light theme colors

  return (
    <button
      className={cn(
        `relative text-center cursor-pointer flex justify-center items-center rounded-lg ${textColor} ${buttonColor} px-9 py-2`,
        className,
      )}
      style={
        {
          "--pulse-color": pulseThemeColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">Register</div>
      <div className="absolute top-1/2 left-1/2 w-full h-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
