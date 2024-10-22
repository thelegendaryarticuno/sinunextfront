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

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-br from-black to-gray-900"
      : "bg-gradient-to-br from-blue-400 to-blue-200";

  const handleNext = () => currentStep < 2 && setCurrentStep(currentStep + 1);
  const handlePrevious = () =>
    currentStep > 1 && setCurrentStep(currentStep - 1);

  const isStep1Valid = () =>
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.email &&
    formik.values.phone &&
    formik.values.universityName;

  const isStep2Valid = () =>
    formik.values.gender !== "" && formik.values.photoIdUrl;

  const isNextEnabled = () =>
    currentStep === 1 ? isStep1Valid() : isStep2Valid();

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
        }
      );
      formik.setFieldValue("photoIdUrl", response?.data?.fileName);
    } catch (error) {
      console.error("Image Upload Error:", error);
    }
  };

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
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        ...values,
        planId: planid,
        planName: "Accommodation",
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
      className={`flex flex-col flex-center w-95 min-h-full ${bgColor} my-16 py-16 pl-16 rounded-lg md:items-center justify-center overflow-x-hidden`}
    >
      <div className="flex-grow flex md:flex-row flex-col w-full overflow-hidden">
        {/* Gradient div instead of ImageSlider */}
        <div
          className={`p-8 rounded-md justify-center items-center mt-10 text-black ${planDetails.gradient} mb-8`}
        >
          <h2 className="text-3xl font-bold justify-center mb-2">{planDetails.name}</h2>
          <p className="text-xl mt-8">
            {planDetails.price}
          </p>
          <p className="text-lg font-medium my-4">{planDetails.duration}</p>
          <ul className="list-disc list-inside space-y-2">
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
                      <div className="flex space-x-4 mt-2">
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
                      {formik.touched.photoIdUrl &&
                        formik.errors.photoIdUrl && (
                          <p className="text-red-500 text-sm mt-1">
                            {formik.errors.photoIdUrl}
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
                    type={currentStep === 2 ? "submit" : "button"}
                    onClick={handleNext}
                    disabled={!isNextEnabled()}
                    className={`px-6 py-2 rounded-md text-white ${
                      currentStep === 2
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    } disabled:opacity-50`}
                  >
                    {currentStep === 2 ? "Submit" : "Next"}
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
