import React, { useState } from "react";
import HyperText from "../magicui/hyper-text";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const IDCardForm = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      setSubmissionStatus('loading');
      const response = await fetch('https://api.sinusoid.in/attendee/internal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        setSubmissionStatus('error');
        setTimeout(() => setSubmissionStatus('idle'), 2000);
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      setSubmissionStatus('success');
      
      // Wait for success animation
      setTimeout(() => {
        setSubmissionStatus('loading');
        // Show generating message for 1.5s
        setTimeout(() => {
          router.push(`/idcard/${data.attendeeId}`);
        }, 1500);
      }, 1000);

    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus('idle'), 2000);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-center">
        <HyperText
          duration={1150}
          className="text-2xl font-bold mb-6 text-center"
          text="GRAB YOUR ID CARD TODAY!"
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-1">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`w-full p-2 border rounded ${
                    errors.firstName && touched.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {errors.firstName && touched.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-1">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`w-full p-2 border rounded ${
                    errors.lastName && touched.lastName ? "border-red-500" : ""
                  }`}
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="emailId" className="block mb-1">
                Email
              </label>
              <Field
                type="email"
                id="emailId"
                name="emailId"
                className={`w-full p-2 border rounded ${
                  errors.emailId && touched.emailId ? "border-red-500" : ""
                }`}
              />
              {errors.emailId && touched.emailId && (
                <div className="text-red-500 text-sm mt-1">{errors.emailId}</div>
              )}
            </div>

            <div className="relative">
              <button
                type="submit"
                disabled={submissionStatus !== 'idle'}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit
              </button>
              
              {submissionStatus === 'success' && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 rounded animate-fade-in">
                  <FaCheckCircle className="text-white text-2xl animate-bounce" />
                  <span className="ml-2 text-white">Form Submitted Successfully!</span>
                </div>
              )}
              
              {submissionStatus === 'error' && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-red-500 rounded animate-fade-in">
                  <FaTimesCircle className="text-white text-2xl animate-bounce" />
                  <span className="ml-2 text-white">Form Submission Failed</span>
                </div>
              )}
              
              {submissionStatus === 'loading' && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 rounded animate-fade-in">
                  <Loader2 className="text-white text-2xl animate-spin" />
                  <span className="ml-2 text-white">Generating Your ID Card...</span>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IDCardForm;
