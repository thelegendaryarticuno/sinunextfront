import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the icons

const ProfileCard = () => {
  return (
    <div className="max-w-xs bg-[#1D313C] rounded-lg shadow-lg p-8">
      <div className="bg-[#FADAC1] p-4 rounded-lg">
        <Image
          src="/images/profile.jpg" // replace with your image path
          alt="Profile Image"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className='mt-4'>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 justify-center">
              <Link href="https://google.com" passHref>
                <FaInstagram className="w-5 h-5 text-[#50A3AB]" />
              </Link>
              <Link href="https://linkedin.com" passHref>
                <FaLinkedin className="w-5 h-5 text-[#50A3AB]" />
              </Link>
            </div>
            <div className="text-white text-lg">V8</div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-white">
        <div className="text-xl font-bold text-[#FADAC1]  text-right">ABHYAS</div>
        <div className="text-md text-right">PR AND MARKETING</div>
      </div>
    </div>
  );
};

export default ProfileCard;
