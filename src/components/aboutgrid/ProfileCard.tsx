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

const ImageCard: React.FC<ImageCardProps> = ({ profileImgSrc, name, position, instagramLink="#", linkedinLink="#" }) => {
  const { theme } = useTheme();

  const containerBgColor = theme === "dark" ? "#1d313c" : "#a44c4c";
  const innerBgColor = theme === "dark" ? "#FADAC1" : "#FADAC1";
  const innerTextColor = theme === "dark" ? "#ffffff" : "#000000";
  const innerLogoColor = theme === "dark" ? "#50a3ab" : "#000000";

  return (
    <div
      className="rounded-2xl px-8 py-8"
      style={{
        backgroundColor: containerBgColor,
        width: "395px",
        height: "440px",
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
          <div className="text-[#00000] font-bold text-4xl">v8</div>
        </div>
      </div>
      <div className="mt-2 text-right pr-4">
        <h2 style={{ color: innerTextColor }} className="text-2xl font-bold">
          {name}
        </h2>
        <p style={{ color: innerTextColor }} className="font-bold text-sm mt-2">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 md: items-center justify-center py-4 gap-10 lg:gap-10">
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
        <ImageCard
          name="Abhyas"
          position="PR and Marketing Core"
          profileImgSrc="/images/profile.jpg"
          instagramLink="#"
          linkedinLink="#"

        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
