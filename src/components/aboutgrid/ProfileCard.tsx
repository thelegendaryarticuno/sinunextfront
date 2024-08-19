import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";

interface ImageCardProps {
  name: string;
  position: string;
  profileImgSrc: string;
  linkedinLink: string;
  instagramLink: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ profileImgSrc, name, position, instagramLink = "#", linkedinLink = "#" }) => {
  const { theme } = useTheme();

  const containerBgColor = theme === "dark" ? "#1d313c" : "#a44c4c";
  const innerBgColor = theme === "dark" ? "#FADAC1" : "#FADAC1";
  const innerTextColor = theme === "dark" ? "#ffffff" : "#000000";
  const innerLogoColor = theme === "dark" ? "#50a3ab" : "#000000";
  const v8Color = theme === "dark" ? "#000000" : "#560b0b";

  return (
    <div
      className="rounded-2xl px-8 py-8"
      style={{
        backgroundColor: containerBgColor,
        width: "395px",
        height: "485px",
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
          src={profileImgSrc || "/images/profile.png"}
          alt={name}
          width={324}
          height={162}
          className="object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            <Link href={linkedinLink}>
              <FaLinkedin
                style={{ color: innerLogoColor }}
                className="w-5 h-5"
              />
            </Link>
            <Link href={instagramLink}>
              <FaInstagram
                style={{ color: innerLogoColor }}
                className="w-5 h-5"
              />
            </Link>
          </div>
          <div className="text-4xl font-bold" style={{ color: v8Color }}>v8</div>
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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:items-center justify-center py-4 gap-10 lg:gap-10">
        <ImageCard
          name="Toril Jain"
          position="Executive Head and Event C. Core"
          profileImgSrc="/CoreProfilePic/TorilJain.png"
          instagramLink="https://www.instagram.com/torilneedshelplmao/"
          linkedinLink="https://www.linkedin.com/in/toril-jain-2a6a12244"
        />
        <ImageCard
          name="Kaustav Karan"
          position="Technical Core"
          profileImgSrc="/CoreProfilePic/KaustavKaran.png"
          instagramLink="https://www.instagram.com/k2.pvt?igsh=enF4cmhtZzBxcTV4"
          linkedinLink="https://www.linkedin.com/in/kaustav-karan-0b5562219"
        />
        <ImageCard
          name="Aayush Dutta"
          position="Digital Design Core"
          profileImgSrc="/CoreProfilePic/AayushDutta.png"
          instagramLink="https://www.instagram.com/theazapto?igsh=MXBwN3B0MGVydGJjcQ=="
          linkedinLink="#"
        />
        <ImageCard
          name="Alisha Sultana"
          position="Sponsorship Core"
          profileImgSrc="/CoreProfilePic/AlishaaSultana.png"
          instagramLink="https://www.instagram.com/alishaxz_313?igsh=MThqdmg1eTJ4bmhndQ=="
          linkedinLink="https://www.linkedin.com/in/alisha-sultana-300801251"
        />
        <ImageCard
          name="Ananya Gupta"
          position="Content Core"
          profileImgSrc="/CoreProfilePic/AnanyaGupta.png"
          instagramLink="https://www.instagram.com/ananyaa1029?igsh=MWlmanhjeWsydDR4dA=="
          linkedinLink="#"
        />
        <ImageCard
          name="Jatin Arora"
          position="PR and Marketing Core"
          profileImgSrc="/CoreProfilePic/JatinArora.png"
          instagramLink="https://www.instagram.com/jatinnxarora?igsh=YWV4NzhzNHhwbGxr"
          linkedinLink="https://www.linkedin.com/in/jatin-arora-337a39251"
        />
        <ImageCard
          name="Yashwanth Yalavali"
          position="Creative Core"
          profileImgSrc="/CoreProfilePic/YaswanthY.png"
          instagramLink="https://www.instagram.com/yashwanth_yalavali?igsh=MW45c3U1bGFvMTh3cg=="
          linkedinLink="https://www.linkedin.com/in/yashwanth-yalavali-802908252"
        />
        <ImageCard
          name="Ritesh V. Reddy"
          position="Operations Core"
          profileImgSrc="/CoreProfilePic/RiteshV.png"
          instagramLink="#"
          linkedinLink="#"
        />
        <ImageCard
          name="Aayush Ranjan"
          position="Capture Core"
          profileImgSrc="/CoreProfilePic/AyushRanjan.png"
          instagramLink="https://www.instagram.com/ranjan_ayushh?igsh=MXNxaW5xMWxwNGs4Nw=="
          linkedinLink="https://www.linkedin.com/in/ayush-ranjan-228b30203"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
