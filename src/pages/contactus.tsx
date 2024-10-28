import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react"; // Import icons

const ContactUs = () => {
  const { theme } = useTheme();

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Reset the submission status after 5-10 seconds
  useEffect(() => {
    if (submissionStatus !== "idle") {
      const timeout = setTimeout(() => setSubmissionStatus("idle"), 7000); // 7 seconds
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [submissionStatus]);

  // Dynamic Styles based on Theme
  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";
  const textColor = theme === "dark" ? "text-gray-100" : "text-black";
  const inputBorderColor =
    theme === "dark" ? "border-gray-600" : "border-black";
  const buttonBgColor = theme === "dark" ? "bg-slate-600" : "bg-blue-500";

  // Formik Form Handling
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      query: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      query: Yup.string().required("Please ask your query"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://api.sinusoid.in/contactUs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the form.");
        }

        setSubmissionStatus("success"); // Set success status
        resetForm(); // Reset the form fields
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus("error"); // Set error status
      }
    },
  });

  // Render Success or Error Message
  if (submissionStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
          <p className="text-xl font-semibold mt-4 text-green-500">
            Form Submitted Successfully!
          </p>
        </div>
      </div>
    );
  }

  if (submissionStatus === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <XCircle className="text-red-500 w-16 h-16 mx-auto" />
          <p className="text-xl font-semibold mt-4 text-red-500">
            Form Not Submitted. Please try again.
          </p>
        </div>
      </div>
    );
  }

  // Main Form UI
  return (
    <div
      className={`min-h-screen ${bgColor} flex flex-col mt-16 md:flex-row items-center justify-center p-6 md:space-x-24 space-y-8 md:space-y-0`}
    >
      {/* Image Section */}
      <div className="w-full max-w-md flex items-center justify-center hidden md:block">
        <Image
          src="/images/contactus.jpg"
          alt="Contact Us Image"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-md">
        <h2 className={`text-4xl font-bold mb-6 text-center ${textColor}`}>
          Contact Us
        </h2>
        <p className={`text-md mb-8 text-center ${textColor}`}>
          Use the form below to get in touch with us.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className={`w-full p-3 border ${inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={`w-full p-3 border ${inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={`w-full p-3 border ${inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}

          <textarea
            id="query"
            name="query"
            placeholder="Ask your query"
            className={`w-full p-3 border ${inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 h-32`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.query}
          />
          {formik.touched.query && formik.errors.query && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.query}
            </div>
          )}

          <button
            type="submit"
            className={`${buttonBgColor} text-white px-6 py-3 rounded-md w-full hover:bg-blue-600 transition-all duration-300`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
