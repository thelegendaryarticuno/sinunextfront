import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HyperText from "@/components/magicui/hyper-text";

const Partnership: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between w-full p-8 lg:p-16">
      {/* Vertical/Horizontal Text for siNUsoid */}
      <div className="lg:text-3xl md:hidden dark:text-white text-black px-8 lg:[writing-mode:vertical-lr] lg:[text-orientation:mixed]">
        siNUsoid
      </div>

      {/* Content */}
      <div className="lg:w-1/2 w-full lg:mr-16">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 lg:mb-12">
          BECOME A PARTNER
        </h1>

        {/* Image */}
        <div className="lg:hidden w-80% md:h-auto mb-8 lg:mb-12">
          <Image
            src="/CoreProfilePic/AlishaaSultana.png"
            alt="Partnership Image"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        <p className="text-xl lg:text-2xl my-8 md:mt-8">
          WE ARE SEARCHING FOR NEW WAYS TO LEAD GAMING CULTURE WITH BRANDS WHO SHARE THE SAME VALUES.
          <br />
          <br />
          JOIN US ON OUR MISSION TO GIVE GAMERS AND OUR COMMUNITY SOMETHING TO BE PROUD OF.
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <div className="lg:mt-16 text-lg lg:text-xl font-bold underline cursor-pointer ">
              GET IN TOUCH
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                <HyperText className="text-4xl items-center font-bold text-black dark:text-white" text="Sponsor Us Today!" />
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
                <Input id="name" placeholder="Enter your name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="Email" className="text-right">
                  Email
                </Label>
                <Input id="Email" placeholder="Enter your Email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <Input id="phone" placeholder="Enter your phone number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="company" className="text-right">
                  Company Name
                </Label>
                <Input id="company" placeholder="Enter your company name" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Link href="#contact-partnerships"></Link>
      </div>

      {/* Image on large screens */}
      <div className="lg:block hidden lg:w-1/2 lg:h-50 mb-4">
        <Image
          src="/CoreProfilePic/AlishaaSultana.png"
          alt="Partnership Image"
          layout="responsive"
          width={400}
          height={200}
          className="object-cover mb-4"
        />
      </div>
    </div>
  );
};

export default Partnership;
