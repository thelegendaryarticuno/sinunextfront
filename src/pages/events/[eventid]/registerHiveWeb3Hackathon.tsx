import {
  EmailPhoneNumber,
  FirstNameLastName,
  TeamDeatils,
  TeamMembers,
  TeamMembersNumber,
  UniversityName,
} from "@/components/hiveWeb3Hackathon/formFields";
import { ThankyouComponent } from "@/components/hiveWeb3Hackathon/thankyouComponent";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import { HackathonSchema } from "@/constants/hackathonConstant";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RegisterHiveWeb3Hackathon: React.FC = () => {
  const [section, setSection] = useState(0);
  const [hackathonForm, setHackathonForm] = useState(HackathonSchema);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  
  async function submitFormHandler() {
    try {
      await axios.post("https://api.sinusoid.in/hackathon", hackathonForm);
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error submitting data: ", error);
    }
  }

  return (
    <>
      <SEOComponent
        PageTitle="Register for Hive Web3 Hackathon"
        PageDescription="Register for Hive Web3 Hackathon"
        PageKeywords={["Hive", "Web3", "Hackathon"]}
        PageOGLImage="/logo/logo.png"
        PageURL="sinusoid.in"
      />
      <div className="flex w-full h-lvh">
        {isFormSubmitted === true ? (
          <ThankyouComponent />
        ) : (
          <div className="flex flex-row justify-center items-center mx-10 gap-5 w-full">
            {/* Show Img Div */}
            <div className="hidden md:flex flex-col justify-center items-center w-[50%]">
              <Image
                className="rounded-lg"
                src="/images/hiveHackathon.jpg"
                alt="Hackathon"
                width={500}
                height={500}
              />
            </div>

            {/* Form Div */}
            <div className="flex flex-col justify-center w-[50%] mr-10 ">
              <h1 className="text-lg lg:text-2xl font-bold text-center my-10">
                Register for Hive Web3 Hackathon
              </h1>
              <div className="flex flex-col gap-4 justify-start">
                {section === 0 && (
                  <FirstNameLastName
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                  />
                )}
                {section === 1 && (
                  <EmailPhoneNumber
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                  />
                )}
                {section === 2 && (
                  <UniversityName
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                  />
                )}
                {section === 3 && (
                  <TeamDeatils
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                  />
                )}
                {section === 4 && (
                  <TeamMembersNumber
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                  />
                )}
                {section === 5 && (
                  <TeamMembers
                    setSection={setSection}
                    hackathonForm={hackathonForm}
                    setHackathonForm={setHackathonForm}
                    submitForm={submitFormHandler}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default RegisterHiveWeb3Hackathon;
