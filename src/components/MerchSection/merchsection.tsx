import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Image from "next/image";
import "react-medium-image-zoom/dist/styles.css";

const MerchSection: React.FC = () => {
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
      await axios.post("https://api.sinusoid.in/merchandiseOrder", formData);
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

  const merch = "/images/front.png";
  const merchfront = "/images/logo-merch.png";
  const merchside = "/images/side.png";
  const merchotherside = "/images/otherside.png";

  const [mainImage, setMainImage] = useState(merch);
  const [smallImages, setSmallImages] = useState([
    { id: 1, src: merchfront },
    { id: 2, src: merchside },
    { id: 3, src: merchotherside },
  ]);

  const handleImageClick = (clickedImage: string, index: number) => {
    if (clickedImage !== mainImage) {
      const newSmallImages = smallImages.map((img, idx) =>
        idx === index ? { ...img, src: mainImage } : img
      );
      setSmallImages(newSmallImages);
      setMainImage(clickedImage);
    }
  };

  return (
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
                  Please fill in your details to get notified when this product
                  is back in stock.
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
        </div>
      </div>
    </div>
  );
};

export default MerchSection;
