import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import ImageSlider from "@/components/imageSlider/imageSlider";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface ComponentProps {
  bannerImage?: string;
}

export default function Component({ bannerImage }: ComponentProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const { eventid } = router.query; // Extract event ID from query parameters

  const [loadingForms, setLoadingForms] = useState(true); // Loading state
  const [eventParticipant, setEventParticipant] = useState<string | null>(null); // Event participant type
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const [eventName, setEventName] = useState<string | null>(null); // Add this line


  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";

  const images = [
    "/images/light.jpg",
    "/images/lightBackground.png",
    "/images/dark.jpg",
  ];

  // Fetch event data from the API
  const fetchEventData = async (id: string) => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${id}`);
      const event = response.data;
      const participantType = event.eventParticipants; 
      setEventName(event.eventName);// Solo/Team
      setEventParticipant(participantType); // Update state with participant type
    } catch (error: any) {
      console.error("Error fetching event data:", error);
      setErrorMessage(error.response?.data?.message || "Failed to load event.");
    } finally {
      setLoadingForms(false); // Stop loading state
    }
  };

  // Trigger data fetch when router is ready and eventid is available
  useEffect(() => {
    if (router.isReady && eventid) {
      fetchEventData(eventid as string);
    }
  }, [router.isReady, eventid]);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    university: Yup.string().required("University Name is required"),
    isNiitStudent: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      university: "",
      isNiitStudent: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        eventId: eventid, // Use dynamic event ID from query params
        eventParticipants: eventParticipant, // Solo/Team based on fetched event data
        firstName: values.firstName,
        lastName: values.lastName,
        teamMembers: 1, // Empty array for solo participants
        email: values.email,
        phone: values.phone,
        universityName: values.university,
        isNiitStudent: values.isNiitStudent || false, // Explicitly set to false if unchecked
      };

      try {
        const response = await axios.post(
          "https://api.sinusoid.in/eventRegistrations",
          formData
        );
        alert("Registration Successful!");
        console.log("Registration Response:", response.data);
      } catch (error) {
        console.error("Registration Error:", error);
        alert("Registration failed. Please try again.");
      }
    },
  });
  // Automatically set university field if NIIT student checkbox is checked
  useEffect(() => {
    if (
      formik.values.isNiitStudent &&
      formik.values.university !== "NIIT University"
    ) {
      formik.setFieldValue("university", "NIIT University");
    }
  }, [formik.values.isNiitStudent]); // Only run when isNiitStudent changes

  return (
    <div className={`flex flex-col min-h-screen ${bgColor} md:items-center justify-center`}>
      {/* Form Section */}
      <div className="w-full min-w-screen px-4 mt-10 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Slider */}
          <div className="hidden md:block">
            <ImageSlider images={images} />
          </div>

          {/* Registration Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{eventName} Registration</h2>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
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
                    <p className="text-red-500 text-sm">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
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
                    <p className="text-red-500 text-sm">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              {/* Phone Number Input */}
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
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>

              {/* NIIT Student Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isNiitStudent"
                  name="isNiitStudent"
                  checked={formik.values.isNiitStudent}
                  onChange={(e) =>
                    formik.setFieldValue("isNiitStudent", e.target.checked)
                  }
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <Label htmlFor="isNiitStudent">
                  I am a student of NIIT University
                </Label>
              </div>

              {/* University Name Input */}
              <div className="space-y-1">
                <Label htmlFor="university">University Name</Label>
                <Input
                  id="university"
                  name="university"
                  placeholder="Enter your university name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.university}
                  disabled={formik.values.isNiitStudent}
                />
                {formik.touched.university && formik.errors.university && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.university}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
