import React, { useEffect, useState } from "react";
import axios from "axios";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import { useRouter } from "next/router";
import SingleForm from "@/components/forms/singleForm";
import TeamForm from "@/components/forms/teamForm";

const Register: React.FC = () => {
  const router = useRouter();
  const { eventid } = router.query; // Get event ID from the query parameters

  const [loadingForms, setLoadingForms] = useState(true); // Loading state for forms
  const [eventParticipant, setEventParticipant] = useState<string | null>(null); // To hold participant type
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // To hold error messages

  // Function to fetch event data
  const fetchEventData = async (id: string) => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${id}`);
      const event = response.data; // Get the event object
      const participantType = event.eventParticipants; // Store participant type (solo/team)
      console.log(participantType); // Print participant type to console

      setEventParticipant(participantType); // Set the state with participant type
    } catch (error: any) {
      console.error("Error fetching event data:", error);
      setErrorMessage(error.response?.data?.message || "Failed to load event.");
    } finally {
      setLoadingForms(false); // Stop loading state
    }
  };

  // Trigger data fetch when the router is ready and eventid is available
  useEffect(() => {
    if (router.isReady && eventid) {
      fetchEventData(eventid as string); // Fetch data based on event ID
    }
  }, [router.isReady, eventid]);

  return (
    <>
      <SEOComponent
        PageDescription="Are you prepared to redefine technology? Your launching pad is our Tech Fest! Discover the newest styles, take part in hackathons, respawn, and a lot more. Don't miss out!"
        PageKeywords={[
          "sinusoid",
          "techfest",
          "tech",
          "network",
          "learn",
          "register",
          "coding",
          "hackathon",
          "gaming",
        ]}
        PageOGLImage="/images/dark.jpg"
        PageTitle="Events Registration | siNUsoid v8"
      />
      <div className="flex flex-col h-full my-4 ">
        {/* Show loading state or appropriate form */}
        {loadingForms || !eventParticipant ? (
          <p className="text-center mt-16 mb-4 text-lg font-semibold">
            Form loading...
          </p>
        ) : (
          <div className="mt-8 md:justify-center items-center w-full md:w-auto">
            {eventParticipant === "solo" ? (
              <SingleForm />
            ) : eventParticipant === "team" ? (
              <TeamForm />
            ) : (
              <p className="text-center text-lg font-semibold">
                Event participation type not recognized.
              </p>
            )}
          </div>
        )}

        {/* Handle the case where the event is not found or an error occurs */}
        {!loadingForms && errorMessage && (
          <p className="text-center text-lg font-semibold">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Register;
