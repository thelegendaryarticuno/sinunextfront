import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HyperText from "@/components/magicui/hyper-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import axios from "axios";

const Partnership: React.FC = () => {
  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    companyName: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setSubmitted(false);
    setFormData((prev) => ({ ...prev, [fieldName]: e?.target?.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    try {
      const response = await axios.post(
        "https://api.sinusoid.in/sponsorContact",
        formData
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setFormData(defaultFormData);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log({ formData });
  }, [formData]);

  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between w-full p-8 lg:p-16">
      {/* Vertical/Horizontal Text for siNUsoid */}
      <div className="lg:text-3xl dark:text-white text-black px-10 lg:[writing-mode:vertical-lr] lg:[text-orientation:mixed] hidden lg:block relative lg:-top-20">
        siNUsoid
      </div>

      {/* Content */}
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
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-bold text-xl`
                  )}
                >
                  GET IN TOUCH
                </span>
                <ChevronRight className="ml-1 size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              {/* {onSubmit} */}
              <DialogTitle>
                <HyperText
                  duration={1150}
                  className="text-4xl items-center font-bold text-black dark:text-white"
                  text="Sponsor Us Today!"
                />
              </DialogTitle>
              <DialogDescription>
                Please fill in the form to get in touch...
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="col-span-3"
                  value={formData?.name}
                  onChange={(e) => handleChange(e, "name")}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="Email" className="text-right">
                  Email
                </Label>
                <Input
                  id="Email"
                  placeholder="Enter your Email"
                  className="col-span-3"
                  value={formData?.email}
                  onChange={(e) => handleChange(e, "email")}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="col-span-3"
                  value={formData?.phone}
                  onChange={(e) => handleChange(e, "phone")}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="company" className="text-right">
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  className="col-span-3"
                  value={formData?.companyName}
                  onChange={(e) => handleChange(e, "companyName")}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : submitted ? (
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-3 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Submitted
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogFooter>
            <BorderBeam size={250} duration={11} delay={8} />
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
