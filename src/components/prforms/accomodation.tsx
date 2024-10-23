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
import plans from "@/constants/plansConstant";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import QRCode from "react-qr-code";
import React from "react";

type PlanKey = keyof typeof plans;
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
  healthComplications: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  photoIdUrl: Yup.mixed().required("College ID is required"),
  paymentProofUrl: Yup.mixed().required("Payment Proof is required"),
});

export default function PrForm() {
  const { theme } = useTheme();
  const router = useRouter();
  const { planid } = router.query;
  const planKey = Array.isArray(planid)
    ? planid[0]?.toLowerCase()
    : planid?.toLowerCase() || "silver";
  const normalizedPlanId = Array.isArray(planid)
    ? planid[0]?.toLowerCase()
    : planid?.toLowerCase();
  const planDetails =
    (normalizedPlanId && plans[normalizedPlanId as PlanKey]) || plans.silver;
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload percentage
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";

  const handleNext = () => {
    if (isNextEnabled()) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () =>
    currentStep > 1 && setCurrentStep(currentStep - 1);

  const isStep1Valid = () =>
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.email &&
    formik.values.phone &&
    formik.values.universityName;

  const isStep2Valid = () => formik.values.gender && formik.values.photoIdUrl;

  const isStep3Valid = () => formik.values.paymentProofUrl;

  const isNextEnabled = () => {
    if (currentStep === 1) return isStep1Valid();
    if (currentStep === 2) return isStep2Valid();
    if (currentStep === 3) return isStep3Valid();
    return false;
  };
  const handleImageUpload = async (event: any) => {
    const file = event?.target?.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const imageFormData = new FormData();
    imageFormData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.sinusoid.in/upload",
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent: any) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent?.total
            );
            setUploadProgress(percentCompleted); // Update progress state
          },
        }
      );
      formik.setFieldValue("photoIdUrl", response?.data?.fileName);
      setUploadProgress(0);
    } catch (error) {
      console.error("Image Upload Error:", error);
      setUploadProgress(0);
    }
  };
  const handlePaymentUpload = async (event: any) => {
    const file = event?.target?.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const imageFormData = new FormData();
    imageFormData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.sinusoid.in/upload",
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      formik.setFieldValue("paymentProofUrl", response?.data?.fileName);
      console.log(response?.data?.fileName);
      console.log(formik.values.paymentProofUrl);
    } catch (error) {
      console.error("Image Upload Error:", error);
    }
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Only handle one file
    setUploadedFile(file);
    handlePaymentUpload({ target: { files: acceptedFiles } }); // Trigger upload
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
        router.push(`/plans/${planid}`);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      universityName: "",
      healthComplications: "",
      gender: "",
      photoIdUrl: "",
      paymentProofUrl: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        ...values,
        planId: planid,
        planName: planDetails.name,
      };
      try {
        await axios.post("https://api.sinusoid.in/plan", formData);
        setSubmissionStatus("success");
      } catch (error) {
        console.error("Submission Error:", error);
        setSubmissionStatus("error");
      }
    },
  });

  return (
    <div
      className={`flex flex-col flex-center w-95 min-h-full ${bgColor} px-4 py-8 items-center justify-center rounded-lg lg:mt-16 lg:px-16 lg:py-16 overflow-x-hidden `}
    >
      <div className="flex-grow flex md:flex-row flex-col w-full overflow-hidden">
        {/* Gradient div instead of ImageSlider */}
        <div
          className={`p-8 rounded-md justify-center items-center mt-10 text-black ${planDetails.gradient} mb-8 sm:mt-0`}
        >
          <h2 className="text-3xl font-bold justify-center mb-2">
            {planDetails.name}
          </h2>
          <p className="text-xl mt-8">{planDetails.price}</p>
          <p className="text-lg font-bold my-4">{planDetails.duration}</p>
          <ul className="list-disc font-bold list-inside space-y-2">
            {planDetails.description.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[50vw] flex items-center justify-center p-4">
          <div className="w-full max-w-screen-md">
            <h2 className="text-2xl my-8 font-semibold mb-4 text-center">
              Accommodation Registration Form
            </h2>

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
              <form
                className="space-y-4  items-center justify-center"
                onSubmit={formik.handleSubmit}
              >
                {currentStep === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder="Enter your first name"
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        placeholder="Enter your last name"
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Enter your email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            formik.setFieldValue("phone", value);
                          }
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder="Enter your phone number"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="universityName">University Name</Label>
                      <Input
                        id="universityName"
                        name="universityName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.universityName}
                        placeholder="Enter your university name"
                      />
                      {formik.touched.universityName &&
                        formik.errors.universityName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.universityName}
                          </p>
                        )}
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {" "}
                    {/* Increased spacing between sections */}
                    <div>
                      <Label>Gender</Label>
                      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2 ml-2">
                        {["Male", "Female", "Other", "Prefer Not to say"].map(
                          (option) => (
                            <label
                              key={option}
                              className="flex items-center space-x-4"
                            >
                              <input
                                type="radio"
                                name="gender"
                                value={option}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.gender === option}
                                className="form-radio"
                              />
                              <span>{option}</span>
                            </label>
                          )
                        )}
                      </div>
                      {formik.touched.gender && formik.errors.gender && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.gender}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="healthComplications">
                        Health Complications
                      </Label>
                      <Input
                        id="healthComplications"
                        name="healthComplications"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.healthComplications}
                        placeholder="Enter any health complications"
                      />
                      {formik.touched.healthComplications &&
                        formik.errors.healthComplications && (
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.healthComplications}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label htmlFor="photoIdUrl">Upload College ID</Label>
                      <Input
                        id="photoIdUrl"
                        type="file"
                        name="photoIdUrl"
                        onChange={handleImageUpload}
                        className="w-full border-2 border-gray-300 p-2 rounded-md"
                      />
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="mt-2">
                          <p className="text-gray-500 text-sm">
                            Uploading: {uploadProgress}%
                          </p>
                          <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
                            <div
                              className="bg-blue-500 h-2.5 rounded-full"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {formik.touched.photoIdUrl &&
                        formik.errors.photoIdUrl && (
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.photoIdUrl}
                          </p>
                        )}
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* QR Code Section */}
                    <div className="flex flex-col items-center w-full md:w-auto">
                      <h3 className="text-xl font-semibold mb-4">
                        Scan the QR
                      </h3>
                      <div
                        style={{
                          height: "auto",
                          margin: "0 auto",
                          maxWidth: 200,
                          width: "100%",
                          backgroundColor: "white",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                      >
                        <QRCode
                          size={256}
                          style={{
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                          value={planDetails.link}
                          viewBox={`0 0 256 256`}
                        />
                      </div>
                      <div className="flex md:hidden">
                        <Button
                          type="button"
                          onClick={() =>
                            window.open(planDetails.link, "_blank")
                          }
                          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                          Pay Now
                        </Button>
                      </div>
                    </div>

                    {/* Image Uploader Section */}
                    <div className="flex flex-col items-center w-full md:w-auto">
                      <h3 className="text-xl font-semibold mb-4">
                        Upload the payment proof
                      </h3>
                      <div
                        {...getRootProps()}
                        className={`w-full border-2 border-dashed rounded-md p-8 text-center cursor-pointer 
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                      >
                        <input
                          {...getInputProps()}
                          name="paymentProofUrl"
                          id="paymentProofUrl"
                        />
                        {!uploadedFile ? (
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <svg
                              className="w-12 h-12 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                              ></path>
                            </svg>
                            <p className="text-gray-500">
                              Drag and drop an image here, or click to select a
                              file
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center space-y-2">
                            <img
                              src={URL.createObjectURL(uploadedFile)}
                              alt="Uploaded file preview"
                              className="w-40 h-40 object-cover rounded-md border border-gray-300"
                            />
                          </div>
                        )}
                      </div>
                      {formik.touched.paymentProofUrl &&
                        formik.errors.paymentProofUrl && (
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.paymentProofUrl}
                          </p>
                        )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button type="button" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  <Button
                    type={currentStep === 3 ? "submit" : "button"}
                    onClick={currentStep < 3 ? handleNext : undefined}
                    disabled={!isNextEnabled()}
                    className={`px-6 py-2 rounded-md text-white ${
                      currentStep === 3
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    } disabled:opacity-50`}
                  >
                    {currentStep === 3 ? "Submit" : "Next"}
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
