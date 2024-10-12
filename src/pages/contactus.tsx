import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";
import Image from "next/image"; // Import Image component

const SplitSection = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const leftSplitColor = theme === "dark" ? "bg-white" : "bg-slate-800";
  const rightSplitColor = theme === "dark" ? "bg-slate-800" : "bg-white";

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      query: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      query: Yup.string().required("Please ask your query"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen mt-16">
      <div
        className={`hidden md:block w-1/2 ${leftSplitColor} p-12 flex flex-col justify-center items-center`}
      >
        {/* Replacing the text with an image */}
        <Image
          src="/images/query.png" // Path to the image in the public/images folder
          alt="Descriptive alt text for the image"
          width={500} // Adjust the width and height as per your design
          height={500}
          className="object-contain"
        />
      </div>

      <div
        className={`w-full md:w-1/2 ${rightSplitColor} p-6 md:p-12 flex flex-col justify-center md:h-auto overflow-auto`}
      >
        <h2
          className={`text-3xl text-center  md:text-4xl font-bold mb-4 ${textColor}`}
        >
          Contact Us
        </h2>
        <p className="text-base md:text-lg mb-6">
          {" "}
          Use the form below to get in touch.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full mb-4 md:mb-0">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="w-full mb-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="w-full mb-4">
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 text-sm">
                {formik.errors.subject}
              </div>
            ) : null}
          </div>

          <textarea
            id="query"
            name="query"
            placeholder="Ask your query"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none h-32"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.query}
          />
          {formik.touched.query && formik.errors.query ? (
            <div className="text-red-500 text-sm">{formik.errors.query}</div>
          ) : null}

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SplitSection;
