import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

interface SignInProps {
  setIsSignInOpen: (open: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setIsSignInOpen }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } flex items-center justify-center`}
    >
      <button
        onClick={() => setIsSignInOpen(false)}
        className={`absolute top-4 right-4 ${
          theme === "dark" ? "text-white" : "text-black"
        } hover:text-orange-500`}
      >
        <FaTimes size={24} />
      </button>

      <div
        className={`flex flex-col md:flex-row max-w-6xl w-4/5 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
        } rounded-lg shadow-lg`}
      >
        <div
          className={`hidden md:flex w-1/2 flex-col items-center justify-center ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-100"
          } p-8 rounded-lg`}
        >
          <Image src="/logo/logo.png" alt="Logo" width={150} height={150} />
          <h1
            className={`text-4xl ${
              theme === "dark" ? "text-white" : "text-black"
            } font-bold mt-6`}
          >
            siNUsoid V8
          </h1>
          <p
            className={`text-center mt-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {
              "Your journey to a better experience starts here. Let's get started!"
            }
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <p
            className={`text-center mb-8 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            New here?
            <Link
              href="/onboarding"
              passHref
              onClick={() => setIsSignInOpen(false)}
            >
              <span
                className={`cursor-pointer text-center ${
                  theme === "dark" ? "text-orange-600" : "text-orange-600"
                } hover:underline`}
              >
                Get Onboard with Us.
              </span>
            </Link>
          </p>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`mt-1 w-full px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                } rounded-lg border-gray-600`}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`mt-1 w-full px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                } rounded-lg border-gray-600`}
              />
            </div>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="w-full h-[1px] bg-gray-400 dark:bg-gray-600" />
            <span className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              OR
            </span>
            <div className="w-full h-[1px] bg-gray-400 dark:bg-gray-600" />
          </div>
          <button
            className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => console.log("Google Sign-In")}
          >
            <FcGoogle size={24} className="mr-2" />
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-medium`}
            >
              Sign in with Google
            </span>
          </button>
          <br />
          <div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
