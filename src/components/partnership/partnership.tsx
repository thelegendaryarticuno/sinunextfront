import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HyperText from "../magicui/hyper-text";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import axios from "axios";
import * as Yup from "yup";
import FormikForm from "@/components/formikform/formikform"; // Import your generic FormikForm component

const Partnership: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Define the initial values
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    companyName: "",
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    companyName: Yup.string().required("Company name is required"),
  });

  // Define the fields for the form
  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      validation: Yup.string().required("Name is required"),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter your phone number",
      validation: Yup.string().required("Phone number is required"),
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Enter your company name",
      validation: Yup.string().required("Company name is required"),
    },
  ];

  // Submit handler
  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.sinusoid.in/sponsorContact",
        values
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      resetForm();
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between w-full p-8 lg:p-16">
      <div className="lg:text-3xl dark:text-white text-black px-10 lg:[writing-mode:vertical-lr] lg:[text-orientation:mixed] hidden lg:block relative lg:-top-20">
        siNUsoid
      </div>

      <div className="lg:w-1/2 w-full lg:mr-16">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 lg:mb-12">
          BECOME A PARTNER
        </h1>

        {/* Image for smaller screens */}
        <div className="lg:hidden w-80% md:h-auto mb-8 lg:mb-12">
          <Image
            src="/images/sponsorPartnership2.png"
            alt="Partnership Image"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        <p className="text-xl lg:text-2xl my-8 md:mt-8">
          Partnering with us puts your brand before a dynamic audience of future
          leaders, offering a unique chance to connect, inspire, and make a
          lasting impact.
          <br />
          <br />
          PARTNER WITH US TO SHAPE THE FUTURE AND DRIVE POSITIVE CHANGE.
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <div className="lg:mt-16 text-lg lg:text-xl font-bold cursor-pointer">
              <AnimatedGradientText>
                <span
                  className={cn(
                    "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-bold text-xl"
                  )}
                >
                  GET IN TOUCH
                </span>
                <ChevronRight className="ml-1 size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px] sm:px-10">
            <DialogHeader>
              <DialogTitle>
                <HyperText
                  duration={1150}
                  className="text-2xl md:text-4xl items-center font-bold text-black dark:text-white"
                  text="Sponsor Us Today!"
                />
              </DialogTitle>
              <DialogDescription>
                Please fill in the form to get in touch...
              </DialogDescription>
            </DialogHeader>

            {/* Use the FormikForm component */}
            <FormikForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              fields={fields}
              submitButtonText={
                loading ? "Submitting..." : submitted ? "Submitted" : "Submit"
              }
            />

            <DialogFooter />
          </DialogContent>
        </Dialog>

        <Link href="#contact-partnerships"></Link>
      </div>

      {/* Image on large screens */}
      <div className="lg:block hidden lg:w-1/2 lg:h-50 mb-4">
        <Image
          src="/images/sponsorPartnership2.png"
          alt="Partnership Image"
          layout="responsive"
          width={400}
          height={200}
          className="object-cover mb-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Partnership;
