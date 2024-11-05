"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component from the correct package

const Error404: React.FC = () => {
  const router = useRouter();

    function redirectToHome() {
      router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col justify-center text-center mb-8">
        <Image
          className="dark:bg-white rounded-3xl my-4"
          src="/error404.png"
          alt="404"
          width={400}
          height={400}
        />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
      </div>

      <p className="text-lg mb-4">{"Oops! Looks like you're lost."}</p>
      <p className="text-lg mb-4 mx-8 text-wrap text-center">
        {"The page you are looking for does not exist or may have been moved."}
      </p>
      <Button onClick={redirectToHome} className="flex bg-black text-white dark:bg-white dark:text-black items-center justify-center my-4">
        <span className="ml-2">Go back to Home</span>
      </Button>
    </div>
  );
};

export default Error404;
