import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Card } from "@/components/ui/card";
import VanillaTilt from "vanilla-tilt";

interface IdCardProps {
  firstName: string;
  lastName: string;
  qrData: string;
}

export default function IdCard({ firstName, lastName, qrData }: IdCardProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 1,
          color: {
            dark: "#FFFFFF",
            light: "#00000000",
          },
        });
        setQrCodeUrl(url);
      } catch (err) {
        console.error("Error generating QR code:", err);
      }
    };
    generateQR();

    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 7,
        speed: 100,
        glare: true,
        "max-glare": 0.15,
        reverse: true,
      });
    }

    return () => {
      if (cardRef.current) {
        const vanillaTiltInstance = (cardRef.current as any).vanillaTilt;
        if (vanillaTiltInstance) {
          vanillaTiltInstance.destroy();
        }
      }
    };
  }, [qrData]);

  return (
    <Card
      ref={cardRef}
      className="w-[400px] h-[600px] bg-gradient-to-b mt-20 from-zinc-950 to-sky-950 p-8 relative overflow-hidden mb-10"
    >
      <div className="w-32 h-32 relative">
        <img
          src="/logo/Logo_TrendsStyled_light.png"
          alt="Company Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-4 top-0 bottom-0 flex items-center">
        <img
          src="/logo/345.png"
          alt="Vertical Text"
          className="h-[85%] w-[90%]"
        />
      </div>
      <div className="mt-24 mb-6">
        <h1 className="text-white text-5xl font-bold">{firstName}</h1>
        <h2 className="text-white text-3xl mt-2">{lastName}</h2>
      </div>
      {qrCodeUrl && (
        <div className="w-48 h-48 mt-6">
          <img src={qrCodeUrl} alt="QR Code" className="w-full h-full" />
        </div>
      )}
    </Card>
  );
}
