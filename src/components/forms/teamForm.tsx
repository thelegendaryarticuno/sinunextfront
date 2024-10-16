import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox
import { useTheme } from "next-themes";
import ImageSlider from "@/components/imageSlider/imageSlider";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// Validation Schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  universityName: Yup.string().required("University Name is required"),
  teamMembers: Yup.number()
    .min(1, "At least one team member is required")
    .required("Team members are required"),
});

export default function TeamForm() {
  const { theme } = useTheme();
  const [isNiitStudent, setIsNIITStudent] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [teamMembers, setTeamMembers] = useState<number>(0);
  const router = useRouter();
  const { eventid } = router.query; // Extract event ID from query parameters

  const [loadingForms, setLoadingForms] = useState(true); // Loading state
  const [eventParticipant, setEventParticipant] = useState<string | null>(null); // Event participant type
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const [eventName, setEventName] = useState<string | null>(null); // Add this line

  const fetchEventData = async (id: string) => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${id}`);
      const event = response.data;
      const participantType = event.eventParticipants;
      setEventName(event.eventName);
      setEventParticipant(participantType); // Update state with participant type
    } catch (error: any) {
      console.error("Error fetching event data:", error);
      setErrorMessage(error.response?.data?.message || "Failed to load event.");
    } finally {
      setLoadingForms(false); // Stop loading state
    }
  };
  useEffect(() => {
    if (router.isReady && eventid) {
      fetchEventData(eventid as string);
    }
  }, [router.isReady, eventid]);

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";

  const images = [
    "/images/light.jpg",
    "/images/lightBackground.png",
    "/images/dark.jpg",
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStep1Valid = () =>
    formik.values.firstName && formik.values.lastName && formik.values.email;
  const isStep2Valid = () =>
    formik.values.phone && formik.values.universityName;
  const isStep3Valid = () => teamMembers && teamMembers > 0;
  const isStep4Valid = () =>
    formik.values.teamDetails.every(
      (member) => member.teamMemberName && member.teamMemberEmail
    );

  const isNextEnabled = () => {
    if (currentStep === 1) return isStep1Valid();
    if (currentStep === 2) return isStep2Valid();
    if (currentStep === 3) return isStep3Valid();
    if (currentStep === 4) return isStep4Valid();
    return false;
  };

  useEffect(() => {
    if (currentStep === 3 && teamMembers) {
      formik.setFieldValue(
        "teamDetails",
        Array.from({ length: teamMembers }, () => ({
          teamMemberName: "",
          teamMemberEmail: "",
        }))
      );
    }
  }, [teamMembers, currentStep]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      universityName: "",
      isNiitStudent: false,
      teamMembers: 0,
      teamDetails: [] as { teamMemberName: string; teamMemberEmail: string }[],
    },

    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        eventId: eventid, // Use dynamic event ID from query params
        eventParticipants: eventParticipant, // Solo/Team based on fetched event data
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        universityName: values.universityName,
        isNiitStudent: values.isNiitStudent || false, // Explicitly set to false if unchecked
        teamMembers: values.teamMembers,
        teamDetails: values.teamDetails,
      };
      try {
        const response = await axios.post(
          "https://api.sinusoid.in/eventRegistrations",
          formData
        );
        alert("Registration Successful!");
      } catch (error) {
        console.error("Registration Error:", error);
        alert("Registration failed. Please try again.");
      }
    },
  });
  // Automatically set universityName field if NIIT student is checked
  useEffect(() => {
    if (formik.values.isNiitStudent) {
      formik.setFieldValue("university", "NIIT University");
    } else {
      formik.setFieldValue("university", ""); // Clear the university name when unchecked
    }
  }, [formik.values.isNiitStudent]);

  return (
    <div
      className={`flex flex-col h-screen ${bgColor} md:items-center justify-center`}
    >
      {/* Main Content */}
      <div className="flex-grow flex md:flex-row flex-col">
        {/* Left Split - Image Slider */}
        <div className="hidden md:flex w-[50vw] items-center justify-center">
          <div className="w-4/5 h-4/5">
            <ImageSlider images={images} />
          </div>
        </div>

        {/* Right Split - Registration Form */}
        <div className="w-full md:w-[40vw] flex items-center justify-center p-4">
          <div className="w-full">
            <h2 className="text-2xl my-8 font-semibold mb-4 md:items-center text-center md:mt-0 md:flex md:justify-center md:items-center">
              {eventName} Registration
            </h2>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isNiitStudent"
                      checked={isNiitStudent}
                      onCheckedChange={(checked) => setIsNIITStudent(!!checked)}
                    />
                    <Label htmlFor="isNiitStudent">
                      Are you an NIIT Student?
                    </Label>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="universityName">University</Label>
                    <Input
                      id="universityName"
                      name="universityName"
                      placeholder="Enter your universityName name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.universityName}
                      disabled={isNiitStudent}
                    />
                  </div>
                </>
              )}

              {/* Remaining Steps */}
              {/* Step 3 and Step 4 remain unchanged */}
              {/* Step 3: Team Members */}
              {currentStep === 3 && (
                <div className="space-y-1">
                  <Label htmlFor="teamMembers">
                    Number of Team Members (Including Team Leader)
                  </Label>
                  <Input
                    id="teamMembers"
                    type="number"
                    placeholder="Enter number of team members"
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setTeamMembers(value);
                      formik.setFieldValue("teamMembers", value);
                    }}
                    value={teamMembers ?? ""}
                    min={1}
                  />
                </div>
              )}

              {/* Step 4: Team Details */}
              {currentStep === 4 && (
                <>
                  {formik.values.teamDetails.map((_, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {index === 0 ? "Team Leader" : `Member ${index + 1}`}
                      </h3>
                      <div className="space-y-1">
                        <Label>Name</Label>
                        <Input
                          name={`teamDetails[${index}].teamMemberName`}
                          placeholder="Enter name"
                          onChange={formik.handleChange}
                          value={
                            formik.values.teamDetails[index]?.teamMemberName ||
                            ""
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label>Email</Label>
                        <Input
                          name={`teamDetails[${index}].teamMemberEmail`}
                          type="email"
                          placeholder="Enter email"
                          onChange={formik.handleChange}
                          value={
                            formik.values.teamDetails[index]?.teamMemberEmail ||
                            ""
                          }
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}

              <div className="flex justify-between">
                {currentStep > 1 && (
                  <Button type="button" onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
                <Button
                  type={currentStep === 4 ? "submit" : "button"}
                  onClick={currentStep === 4 ? undefined : handleNext}
                  disabled={!isNextEnabled()}
                  className="bg-blue-500 text-white"
                >
                  {currentStep === 4 ? "Submit" : "Next"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
