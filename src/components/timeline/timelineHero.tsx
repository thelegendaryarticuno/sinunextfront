import { useTheme } from "next-themes";

export default function Banner() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-center mt-12 -mb-14 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-2xl"
        src="../heroVideo/videoplayback (3).mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "bg-black/80" : "bg-black/50"
        }`}
      />

      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Event Timeline
        </h1>
      </div>
    </div>
  );
}
