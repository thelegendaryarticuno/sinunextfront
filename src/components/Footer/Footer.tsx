import Link from "next/link";
import { useTheme } from "next-themes";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-300 dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-around">
        <div className="flex flex-col items-center justify-center md:items-center ">
          <Image
            src="/logo/textlogo.png"
            alt="siNUsoid Logo"
            width={300}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mt-0 mt-7">
          <h3 className="font-bold mb-2">
            <Link href="#" className="hover:text-slate-600 flex items-center">
              CONTACT US
              <ArrowRightIcon className="ml-2 h-4" />
            </Link>
          </h3>
          <ul className="space-y-1 text-center md:text-left">
            <li>
              <Link
                href="tel:+919311602436"
                className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              >
                Jatin Arora: +91 93116 02436
              </Link>
            </li>
            <li>
              <Link
                href="tel:+918898924889"
                className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              >
                Toril Jain: +91 88989 24889
              </Link>
            </li>
            <li>
              <Link
                href="mailto:sinusoid@st.niituniversity.in"
                className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
              >
                sinusoid@st.niituniversity.in
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-20 mt- md:mt-0 md:order-3">
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2">QUICK LINKS</h3>
            <ul className="space-y-1">
              {/* <li>
                <Link
                  href="sponsor"
                  className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                >
                  Sponsor
                </Link>
              </li> */}
              <li>
                <Link
                  href="events"
                  className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 ml-6">
        <div className="flex justify-center space-x-4 mb-4">
          <Link
            href="https://www.instagram.com/siNUsoid.nu/?hl=en"
            className="bg-gray-900 dark:bg-white rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
          >
            <InstagramIcon className="h-6 w-6 text-white dark:text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 overflow-visible" />
          </Link>
          <Link
            href="https://www.facebook.com/siNUsoidniit/"
            className="bg-gray-900 dark:bg-white rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
          >
            <FacebookIcon className="h-6 w-6 text-white dark:text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 overflow-visible" />
          </Link>
          <Link
            href="https://www.youtube.com/@siNUsoidTechFest"
            className="bg-gray-900 dark:bg-white rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
          >
            <YoutubeIcon className="h-6 w-6 text-white dark:text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 overflow-visible" />
          </Link>
          <Link
            href="https://in.linkedin.com/company/siNUsoid"
            className="bg-gray-900 dark:bg-white rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
          >
            <LinkedInIcon className="h-6 w-6 text-white dark:text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 overflow-visible" />
          </Link>
          <Link
            href="https://discord.com/invite/AXDe7xeduP"
            className="bg-gray-900 dark:bg-white rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
          >
            <DiscordIcon className="h-6 w-6 text-white dark:text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 overflow-visible" />
          </Link>
        </div>
        <div className="text-center text-sm mt-4">
          <p>© 2024 siNUsoid v8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function DiscordIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.961 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418Z" />
    </svg>
  );
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function LinkedInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.8 4.7C18.91 4 12 4 12 4s-6.91 0-8.8.7a2.78 2.78 0 0 0-1.74 1.72A29.07 29.07 0 0 0 1 12a29.07 29.07 0 0 0 .46 4.88 2.78 2.78 0 0 0 1.74 1.72c1.89.7 8.8.7 8.8.7s6.91 0 8.8-.7a2.78 2.78 0 0 0 1.74-1.72A29.07 29.07 0 0 0 23 12a29.07 29.07 0 0 0-.46-4.88Z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
