import SEOComponent from "@/components/SEOComponent/SEOComponent";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import "react-medium-image-zoom/dist/styles.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import axios from "axios";

const Merchandise: React.FC = () => {
  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setSubmitted(false);
    setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    try {
      const response = await axios.post(
        "https://api.sinusoid.in/merchandiseOrder",
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

  const { resolvedTheme } = useTheme();
  const logoSrc =
    resolvedTheme === "dark" ? "/events/dark.svg" : "/events/light.svg";
  const merch = "/images/front.png";
  const merchfront = "/images/logo-merch.png";
  const merchside = "/images/side.png";
  const merchotherside = "/images/otherside.png";
  const hero =
    resolvedTheme === "dark"
      ? "/heroVideo/0001-0160.mkv"
      : "/heroVideo/0001-0160.mkv";

  const [mainImage, setMainImage] = useState(merch);
  const [smallImages, setSmallImages] = useState([
    { id: 1, src: merchfront },
    { id: 2, src: merchside },
    { id: 3, src: merchotherside },
  ]);

  const sizechart =
    resolvedTheme === "dark"
      ? "/images/sizechart.png"
      : "/images/sizechart.png";

  const handleImageClick = (clickedImage: string, index: number) => {
    if (clickedImage !== mainImage) {
      const newSmallImages = smallImages.map((img, idx) =>
        idx === index ? { ...img, src: mainImage } : img
      );
      setSmallImages(newSmallImages);
      setMainImage(clickedImage);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const zoomedImage = e.currentTarget.querySelector(
      ".zoomed-image"
    ) as HTMLElement;
    if (zoomedImage) {
      zoomedImage.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  return (
    <>
      <SEOComponent
        PageDescription="Welcome to our merchandise page! Explore our collection of branded products and show your support for siNUsoid techfest."
        PageKeywords={[
          "sinusoid",
          "techfest",
          "merchandise",
          "branded products",
          "support",
          "niit university",
        ]}
        PageOGLImage="/logo/logo.png"
        PageTitle="Merchandise | siNUsoid v8"
      />

      <div className="bg-black w-full md:h-[70vh] h-[40vh] flex items-center justify-center relative overflow-hidden mt-20">
        <div className="flex justify-center w-[30vw] h-screen px-52 py-20">
          <video
            src={hero}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 font-bold">
          <h1 className="hidden lg:flex text-6xl font-bold mb-8 z-[10]">
            Merchandise
          </h1>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-full h-[30vh] mt-2">
        <Image
          src={logoSrc}
          alt="Theme Specific Logo"
          layout="fill"
          objectFit="fill"
          className="p-0"
        />
      </div>

      <div className="relative w-full h-auto mt-8 flex flex-col md:flex-row items-center justify-center gap-16 p-4 dark:bg-black bg-gray-200">
        <div
          className="relative w-4/5 h-[40vh] md:h-[60vh] md:w-[60vh] overflow-hidden border-2 dark:border-gray-800 border-gray-100 rounded-md shadow-xl"
          onMouseMove={handleMouseMove}
        >
          <div className="relative w-full h-full cursor-zoom-in">
            <Image
              src={mainImage}
              alt="Merchandise Main View"
              layout="fill"
              objectFit="cover"
              className="rounded-md transition-transform duration-300 ease-in-out transform zoomed-image scale-100 hover:scale-150"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-4">
            {smallImages.map((img, index) => (
              <div
                key={img.id}
                className="w-[10vh] h-[10vh] md:w-[10vw] md:h-[10vw] relative cursor-pointer border-2 dark:border-gray-800 border-gray-100 rounded-md shadow-lg"
                onClick={() => handleImageClick(img.src, index)}
              >
                <Image
                  src={img.src}
                  alt={`Merchandise View ${img.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="md:mt-12 mt-6">
            <div className="bg-orange-900 text-white px-8 md:py-5 py-2 rounded-md font-bold text-2xl shadow-lg text-center">
              SOLD OUT!
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="underline px-8 py-2 mt-4 dark:text-white text-black font-bold text-2xl rounded-md">
                  Notify Me!
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-w-[400px] sm:px-10">
                <DialogHeader>
                  <DialogTitle>
                    <HyperText
                      duration={1150}
                      className="text-2xl md:text-4xl items-center font-bold text-black dark:text-white"
                      text="Get Notified!"
                    />
                  </DialogTitle>
                  <DialogDescription>
                    Please fill in your details to get notified when this
                    product is back in stock.
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
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
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
          </div>
        </div>
      </div>

      <div className="relative dark:bg-black bg-white flex items-start justify-center p-4 mt-4"></div>

      <div className="relative dark:bg-black bg-white flex items-start justify-center p-4">
        <div className="max-w-6xl w-full dark:bg-zinc-900 bg-gray-300 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row gap-8">
          <div className="flex-1 p-4 md:p-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="additional-info">
                <AccordionTrigger>Product Description</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Material.</span>
                    <span>GSM 200. 100% Breathable Cotton</span>
                    <svg
                      className="w-6 h-6 text-green-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Comfort.</span>
                    <span>Designed to Keep You Cool and Comfortable</span>
                    <svg
                      className="w-6 h-6 text-blue-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2L15 10"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Fit.</span>
                    <span>Tailored Fit for Everyday Wear</span>
                    <svg
                      className="w-6 h-6 text-yellow-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m-9 0a9 9 0 118 0H6z"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Eco-Friendly.</span>
                    <span>Sustainable and Durable Fabric</span>
                    <svg
                      className="w-6 h-6 text-green-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.581L3 8.67a7 7 0 1011.164 7.404m2.628-4.674a7 7 0 00-8.795 1.882"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Care.</span>
                    <span>Machine Washable for Easy Maintenance</span>
                    <svg
                      className="w-6 h-6 text-teal-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7h18M5 7l2 10h10l2-10m-9 0V4a3 3 0 016 0v3"
                      />
                    </svg>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="relative dark:bg-black bg-white flex items-start justify-center p-4">
        <div className="max-w-6xl w-full dark:bg-zinc-900 bg-gray-300 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row gap-8">
          <div className="flex-1 p-4 md:p-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="additional-info">
                <AccordionTrigger>Show Size Chart</AccordionTrigger>
                <AccordionContent>
                  <div className="relative w-full h-auto flex justify-center items-center">
                    <Image
                      src={sizechart}
                      alt="Sizechart"
                      width={500}
                      height={300}
                      objectFit="cover"
                      className="rounded-md shadow-lg"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merchandise;
