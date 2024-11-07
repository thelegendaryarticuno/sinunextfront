import { useState } from "react";
import { Menu } from "@headlessui/react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaShare,
} from "react-icons/fa";

interface ShareButtonProps {
  imageUrl: string;
}

const ShareButton = ({ imageUrl }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareToWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(imageUrl)}`,
      "_blank"
    );
  };

  const shareToInstagram = () => {
    window.open("https://instagram.com", "_blank");
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        imageUrl
      )}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}`,
      "_blank"
    );
  };

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <FaShare />
          Share
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }: { active: any }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700`}
                onClick={shareToWhatsApp}
              >
                <FaWhatsapp className="text-green-500 text-lg" />
                WhatsApp
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: any }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700`}
                onClick={shareToInstagram}
              >
                <FaInstagram className="text-pink-500 text-lg" />
                Instagram
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: any }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700`}
                onClick={shareToFacebook}
              >
                <FaFacebook className="text-blue-600 text-lg" />
                Facebook
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: any }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : ""
                } flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700`}
                onClick={shareToTwitter}
              >
                <FaTwitter className="text-blue-400 text-lg" />
                Twitter
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ShareButton;
