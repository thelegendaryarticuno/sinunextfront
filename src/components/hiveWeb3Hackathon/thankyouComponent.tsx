import Image from "next/image";

export const ThankyouComponent: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-lvh">
        <div className="flex flex-row justify-center items-center mx-10 gap-5 w-full">
          <div className="hidden md:flex flex-col justify-center items-center w-[50%]">
            <Image
              className="rounded-lg"
              src="/events/hackathon-35vh.jpg"
              alt="Hackathon"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center w-[50%] mr-10 ">
            <h1 className="text-lg lg:text-2xl font-bold text-center my-10">
              Thank you for registering for Hive Web3 Hackathon
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
