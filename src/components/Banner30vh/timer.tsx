// components/Timer.tsx
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC = () => {
  const theme = useTheme();
  const [time, setTime] = useState<Time | null>(null);
  const [partyStarted, setPartyStarted] = useState(false);

  const bgColor =
    theme.theme === "dark"
      ? "bg-gradient-to-b from-purple-800 to-black"
      : "bg-gradient-to-r from-purple-500 to-blue-500";

  useEffect(() => {
    const targetDate = new Date("2024-11-08T18:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setPartyStarted(true);
        setTime(null);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTime({ days, hours, minutes, seconds });
      }
    };

    updateCountdown(); // Initial call to set the time immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div
      className={`flex flex-col items-center justify-center h-full w-full ${bgColor} rounded-lg text-white shadow-lg space-y-4`}
    >
      {partyStarted ? (
        <h2 className="text-2xl font-bold uppercase">Party is liveee!</h2>
      ) : (
        <>
          <h2 className="text-lg font-semibold uppercase">
            The Final Countdown
          </h2>
          <div className="flex space-x-2">
            {["days", "hours", "minutes", "seconds"].map((label, index) => (
              <div key={label} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg text-3xl font-bold text-white">
                  {time
                    ? label === "days"
                      ? formatNumber(time.days)
                      : label === "hours"
                      ? formatNumber(time.hours)
                      : label === "minutes"
                      ? formatNumber(time.minutes)
                      : formatNumber(time.seconds)
                    : "00"}
                </div>
                <span className="mt-1 text-xs uppercase">{label}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
