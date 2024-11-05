import React from "react";
import HyperText from "../magicui/hyper-text";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  universityName: Yup.string().required("University name is required"),
});

const IDCardForm = () => {
  const [isNIITStudent, setIsNIITStudent] = React.useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    universityName: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    // Handle form submission
  };

  const handleCheckboxChange = (e: any, setFieldValue: any) => {
    const isChecked = e.target.checked;
    setIsNIITStudent(isChecked);
    setFieldValue("universityName", isChecked ? "NIIT University" : "");
  };

  return (
    <div className="max-w-2xl ite mx-auto p-4">
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
        {({ errors, touched, setFieldValue }) => (
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
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`w-full p-2 border rounded ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isNIITStudent"
                checked={isNIITStudent}
                onChange={(e) => handleCheckboxChange(e, setFieldValue)}
                className="h-4 w-4"
              />
              <label htmlFor="isNIITStudent">
                Are you a student of NIIT University?
              </label>
            </div>

            <div>
              <label htmlFor="universityName" className="block mb-1">
                University Name
              </label>
              <Field
                type="text"
                id="universityName"
                name="universityName"
                disabled={isNIITStudent}
                className={`w-full p-2 border rounded ${
                  errors.universityName && touched.universityName
                    ? "border-red-500"
                    : ""
                } ${isNIITStudent ? "bg-gray-800" : ""}`}
              />
              {errors.universityName && touched.universityName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.universityName}
                </div>
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
