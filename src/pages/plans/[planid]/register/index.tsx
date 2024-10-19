import React from "react";
import PrForms from "@/components/prforms/prforms"; // Adjust the path if the file is located in a different folder

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-8">
        Welcome to the Registration Form
      </h1>
      <div className="flex justify-center mt-8">
        <PrForms />
      </div>
    </div>
  );
};

export default Page;
