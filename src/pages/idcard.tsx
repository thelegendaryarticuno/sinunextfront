import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="relative">
        {/* White lanyard strap */}
        <div className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-16 w-12 h-16 bg-white" />

        {/* Metal clip */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[4.5rem] w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full" />
        </div>

        {/* ID Card */}
        <Card
          className="w-[280px] h-[400px] text-white p-8 relative overflow-hidden"
          style={{
            background: `radial-gradient(circle at 70% 20%, rgb(37, 59, 128) 0%, rgb(37, 59, 128) 50%, rgb(28, 48, 107) 100%)`,
            backgroundSize: "400% 400%",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 space-y-1">
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45" />
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45 ml-1" />
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45 ml-2" />
          </div>
          <div className="absolute top-6 right-6">
            <div
              className="w-6 h-6 bg-[#c5f82a] rounded-full"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
          </div>

          {/* Content */}
          <div className="mt-24 space-y-1">
            <h1 className="text-2xl font-semibold tracking-wide">Javier</h1>
            <h1 className="text-2xl font-semibold tracking-wide">Kallenson</h1>
            <h1 className="text-2xl font-semibold tracking-wide">Andrew</h1>
            <div className="text-[#c5f82a] text-sm font-medium mt-2">
              Music Director
            </div>
          </div>

          {/* Photo area */}
          <div className="absolute bottom-24 right-8">
            <div
              className="w-16 h-16 rounded-full overflow-hidden bg-[#c5f82a]/90"
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            >
              <Image
                src="/placeholder.svg"
                alt="Profile photo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>

          {/* Placeholder text */}
          <div className="absolute bottom-12 left-8 right-8">
            <p className="text-[10px] text-gray-200/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          {/* Bottom decorative elements */}
          <div className="absolute bottom-6 right-6 space-y-1">
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45" />
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45 -ml-1" />
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45 -ml-2" />
          </div>
        </Card>
      </div>
    </div>
  );
}
