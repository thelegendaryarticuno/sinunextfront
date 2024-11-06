import React from "react";
import HyperText from "../magicui/hyper-text";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const IDCardForm = () => {
  const { theme } = useTheme();
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch('https://api.sinusoid.in/attendee/internal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        alert('Form submission failed. Please try again.');
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      // Handle success (maybe show a success message)
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed. Please try again.');
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IDCardForm;
