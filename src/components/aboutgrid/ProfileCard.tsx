import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// Arrays of image details
const profileImages = [
  { src: "/CoreProfilePic/TorilJain.png", alt: "Toril Jain" },
  { src: "/CoreProfilePic/KaustavKaran.png", alt: "Kaustav Karan" },
  { src: "/CoreProfilePic/AayushDutta.png", alt: "Aayush Dutta" },
  { src: "/CoreProfilePic/AlishaaSultana.png", alt: "Alisha Sultana" },
  { src: "/CoreProfilePic/AnanyaGupta.png", alt: "Ananya Gupta" },
  { src: "/CoreProfilePic/JatinArora.png", alt: "Jatin Arora" },
  { src: "/CoreProfilePic/YaswanthY.png", alt: "Yashwanth Yalavali" },
  { src: "/CoreProfilePic/RiteshV.png", alt: "Ritesh V. Reddy" },
  { src: "/CoreProfilePic/AyushRanjan.png", alt: "Aayush Ranjan" },
];

const instagramLinks = [
  "https://www.instagram.com/torilneedshelplmao/",
  "https://www.instagram.com/k2.pvt?igsh=enF4cmhtZzBxcTV4",
  "https://www.instagram.com/theazapto?igsh=MXBwN3B0MGVydGJjcQ==",
  "https://www.instagram.com/alishaxz_313?igsh=MThqdmg1eTJ4bmhndQ==",
  "https://www.instagram.com/ananyaa1029?igsh=MWlmanhjeWsydDR4dA==",
  "https://www.instagram.com/jatinnxarora?igsh=YWV4NzhzNHhwbGxr",
  "https://www.instagram.com/yashwanth_yalavali?igsh=MW45c3U1bGFvMTh3cg==",
  "#",
  "https://www.instagram.com/ranjan_ayushh?igsh=MXNxaW5xMWxwNGs4Nw==",
];

const linkedinLinks = [
  "https://www.linkedin.com/in/toril-jain-2a6a12244",
  "https://www.linkedin.com/in/kaustav-karan-0b5562219",
  "#",
  "https://www.linkedin.com/in/alisha-sultana-300801251",
  "#",
  "https://www.linkedin.com/in/jatin-arora-337a39251",
  "https://www.linkedin.com/in/yashwanth-yalavali-802908252",
  "#",
  "https://www.linkedin.com/in/ayush-ranjan-228b30203",
];

interface ImageCardProps {
  name: string;
  position: string;
  profileImgIndex: number;
  instagramLinkIndex: number;
  linkedinLinkIndex: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  profileImgIndex,
  name,
  position,
  instagramLinkIndex,
  linkedinLinkIndex,
}) => {
  const { theme } = useTheme();

  const containerBgColor = theme === "dark" ? "#1d313c" : "#a44c4c";
  const innerBgColor = theme === "dark" ? "#FADAC1" : "#FADAC1";
  const innerTextColor = theme === "dark" ? "#ffffff" : "#000000";
  const innerLogoColor = theme === "dark" ? "#50a3ab" : "#000000";
  const v8Color = theme === "dark" ? "#000000" : "#560b0b";

  return (
    <div
      className="rounded-2xl px-8 py-8 lg:w-[24vw]"
      style={{
        backgroundColor: containerBgColor,
        maxWidth: "395px",
        maxHeight: "485px",
      }}
    >
      <div
        className="rounded-md p-4"
        style={{
          backgroundColor: innerBgColor,
          paddingBottom: "20px",
        }}
      >
        <Image
          src={profileImages[profileImgIndex].src}
          alt={profileImages[profileImgIndex].alt}
          width={324}
          height={162}
          className="object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            <Link href={linkedinLinks[linkedinLinkIndex]}>
              <FaLinkedin
                style={{ color: innerLogoColor }}
                className="w-5 h-5"
              />
            </Link>
            <Link href={instagramLinks[instagramLinkIndex]}>
              <FaInstagram
                style={{ color: innerLogoColor }}
                className="w-5 h-5"
              />
            </Link>
          </div>
          <div className="text-4xl font-bold" style={{ color: v8Color }}>
            v8
          </div>
        </div>
      </div>
      <div className="mt-2 text-right pr-4">
        <h2 style={{ color: innerTextColor }} className="text-2xl font-bold">
          {name}
        </h2>
        <p style={{ color: innerTextColor }} className="font-bold text-sm mt-0.5">
          {position}
        </p>
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Toril Jain",
      position: "Executive Head and Event C. Core",
      profileImgIndex: 0,
      instagramLinkIndex: 0,
      linkedinLinkIndex: 0,
    },
    {
      name: "Kaustav Karan",
      position: "Technical Core",
      profileImgIndex: 1,
      instagramLinkIndex: 1,
      linkedinLinkIndex: 1,
    },
    {
      name: "Aayush Dutta",
      position: "Digital Design Core",
      profileImgIndex: 2,
      instagramLinkIndex: 2,
      linkedinLinkIndex: 2,
    },
    {
      name: "Alisha Sultana",
      position: "Sponsorship Core",
      profileImgIndex: 3,
      instagramLinkIndex: 3,
      linkedinLinkIndex: 3,
    },
    {
      name: "Ananya Gupta",
      position: "Content Core",
      profileImgIndex: 4,
      instagramLinkIndex: 4,
      linkedinLinkIndex: 4,
    },
    {
      name: "Jatin Arora",
      position: "PR and Marketing Core",
      profileImgIndex: 5,
      instagramLinkIndex: 5,
      linkedinLinkIndex: 5,
    },
    {
      name: "Yashwanth Yalavali",
      position: "Creative Core",
      profileImgIndex: 6,
      instagramLinkIndex: 6,
      linkedinLinkIndex: 6,
    },
    {
      name: "Ritesh V. Reddy",
      position: "Operations Core",
      profileImgIndex: 7,
      instagramLinkIndex: 7,
      linkedinLinkIndex: 7,
    },
    {
      name: "Aayush Ranjan",
      position: "Capture Core",
      profileImgIndex: 8,
      instagramLinkIndex: 8,
      linkedinLinkIndex: 8,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:items-center justify-center py-4 gap-10 lg:gap-10">
        {teamMembers.map((member, index) => (
          <ImageCard
            key={index}
            name={member.name}
            position={member.position}
            profileImgIndex={member.profileImgIndex}
            instagramLinkIndex={member.instagramLinkIndex}
            linkedinLinkIndex={member.linkedinLinkIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
