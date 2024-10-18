import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import ImageSlider from "../imageSlider/imageSlider"; // Importing ImageSlider

export default function Component() {
  const { theme } = useTheme();
  const router = useRouter();
  const { eventid } = router.query;

  const [loadingForms, setLoadingForms] = useState(true);
  const [eventParticipant, setEventParticipant] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";

  const fetchEventData = async (id: string) => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${id}`);
      const event = response.data;
      setEventName(event.eventName);
      setEventParticipant(event.eventParticipants);
    } catch (error: any) {
      console.error("Error fetching event data:", error);
      setErrorMessage(error.response?.data?.message || "Failed to load event.");
    } finally {
      setLoadingForms(false);
    }
  };

  useEffect(() => {
    if (router.isReady && eventid) {
      fetchEventData(eventid as string);
    }
  }, [router.isReady, eventid]);

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
        eventId: eventid,
        eventParticipants: eventParticipant,
        firstName: values.firstName,
        lastName: values.lastName,
        teamMembers: 1,
        email: values.email,
        phone: values.phone,
        universityName: values.university,
        isNiitStudent: values.isNiitStudent || false,
      };

      try {
        await axios.post("https://api.sinusoid.in/eventRegistrations", formData);
        setSubmissionStatus("success");
      } catch (error) {
        console.error("Registration Error:", error);
        setSubmissionStatus("error");
      }
    },
  });

  useEffect(() => {
    if (formik.values.isNiitStudent) {
      formik.setFieldValue("university", "NIIT University");
    } else {
      formik.setFieldValue("university", "");
    }
  }, [formik.values.isNiitStudent]);

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
        formik.resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <div className={`flex flex-col h-full mt-12 ${bgColor} md:items-center justify-center`}>
      <div className="w-full min-w-screen px-4 py-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side: Image Slider */}
          <div className="h-full w-full">
            <ImageSlider />
          </div>

          {/* Right Side: Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{eventName} Registration</h2>

            {submissionStatus === "success" && (
              <div className="flex flex-col items-center my-16 space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                <p className="text-xl font-medium text-green-500">
                  Registration Successful!
                </p>
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="flex flex-col items-center my-16 space-y-4">
                <XCircle className="w-16 h-16 text-red-500 animate-bounce" />
                <p className="text-xl font-medium text-red-500">
                  Registration Unsuccessful. Please try again.
                </p>
              </div>
            )}

            {!submissionStatus && (
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                      <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
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
                      <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
                    )}
                  </div>
                </div>

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
                  <Label htmlFor="isNiitStudent">I am a student of NIIT University</Label>
                </div>

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
                    <p className="text-red-500 text-sm">{formik.errors.university}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <Button
                  type="submit"
                  className="max-w-60 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                  Submit Registration
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
