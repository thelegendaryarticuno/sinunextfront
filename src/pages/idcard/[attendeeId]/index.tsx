import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import IdCard from "@/components/idcard/id";
import { Loader2 } from "lucide-react";
import PlansMarquee from "@/components/PlansMarquee/plansMarquee";
import { useTheme } from "next-themes";
import { FaIdCard, FaMusic } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdEvent } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import ShareButton from "@/components/idcard/shareButton";
import html2canvas from "html2canvas";

const IDValidation = () => {
  const router = useRouter();
  const { attendeeId } = router.query;
  const [loading, setLoading] = useState(true);
  const [attendeeData, setAttendeeData] = useState<any>(null);
  const [qrToken, setQrToken] = useState<string>("");
  const [cardImage, setCardImage] = useState<string>("");
  const { theme, resolvedTheme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!attendeeId) return;

      try {
        // Fetch attendee data
        const attendeeResponse = await fetch(
          `https://api.sinusoid.in/attendee/${attendeeId}`
        );
        if (!attendeeResponse.ok) {
          throw new Error("Failed to fetch attendee data");
        }
        const attendeeData = await attendeeResponse.json();

        // Fetch ID card token
        const idCardResponse = await fetch(
          `https://api.sinusoid.in/idCard/${attendeeId}`
        );
        if (!idCardResponse.ok) {
          throw new Error("Failed to fetch ID card data");
        }
        const idCardData = await idCardResponse.json();

        // Only set data if both first and last name exist
        if (attendeeData.firstName && attendeeData.lastName) {
          setAttendeeData(attendeeData);
          // Use the token string directly as QR data
          setQrToken(idCardData.token);
        } else {
          console.error(
            "Incomplete attendee data: Missing first name or last name"
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [attendeeId]);

  useEffect(() => {
    // Generate card image after card is rendered
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas:any) => {
        setCardImage(canvas.toDataURL('image/png'));
      });
    }
  }, [qrToken, attendeeData]);

  const isDarkTheme = theme === "dark" || resolvedTheme === "dark";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin" />
          <p className="text-xl">Loading your ID card...</p>
        </div>
      </div>
    );
  }

  if (
    attendeeData &&
    attendeeData.firstName &&
    attendeeData.lastName &&
    qrToken
  ) {
    return (
      <>
        <div
          className={`relative min-h-screen ${
            isDarkTheme
              ? "bg-gradient-to-r from-gray-900 to-black text-white"
              : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800"
          } flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 border-4 border-opacity-30 ${
            isDarkTheme ? "border-gray-700" : "border-gray-400"
          }`}
        >
          <div className="w-full max-w-7xl flex flex-col items-center md:flex-row md:items-center md:justify-between px-6 gap-12">
            {/* Left content section */}
            <div className="w-full md:w-3/5 flex flex-col items-center md:items-start space-y-8 order-2 md:order-1">
              <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <FaIdCard className="text-7xl sm:text-8xl text-orange-400" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Your VIP Pass to the Ultimate Event Experience
                  </h2>
                </div>

                <p className="text-2xl sm:text-3xl font-light">
                  Your Gateway to Unforgettable Moments
                </p>
              </div>

              <div
                className={`w-full max-w-lg mx-auto md:mx-0 flex items-center space-x-5 ${
                  isDarkTheme ? "bg-gray-700" : "bg-slate-300"
                } bg-opacity-20 p-5 rounded-lg`}
              >
                <FiCheckCircle className="text-green-400 text-2xl sm:text-3xl flex-shrink-0" />
                <p
                  className={`text-lg sm:text-lG ${
                    isDarkTheme ? "text-green-300" : "text-green-600"
                  } font-semibold md:whitespace-nowrap`}
                >
                  Mandatory ID Card for All Event Access
                </p>
              </div>

              <div
                className={`${
                  isDarkTheme ? "bg-gray-800" : "bg-white"
                } p-8 rounded-lg shadow-md w-full max-w-lg mx-auto md:mx-0`}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                  Exclusive Event Access
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <GiTicket className="text-orange-400 mr-5 text-2xl" />
                    <span className="text-lg">VIP Entry & Perks</span>
                  </li>
                  <li className="flex items-center">
                    <MdEvent className="text-orange-400 mr-5 text-2xl" />
                    <span className="text-lg">
                      Engage in Interactive Events
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaMusic className="text-orange-400 mr-5 text-2xl" />
                    <span className="text-lg">
                      Feel the Rhythm of Live Performances
                    </span>
                    {cardImage && <ShareButton imageUrl={cardImage} />}
                  </li>
                </ul>
              </div>
            </div>

            {/* ID Card section */}
            <div className="w-full md:w-auto flex justify-center order-1 md:order-2">
              <div ref={cardRef} className="w-[400px] transform scale-105 hover:scale-110 transition-transform duration-300 mx-auto">
                <IdCard
                  firstName={attendeeData.firstName}
                  lastName={attendeeData.lastName}
                  qrData={qrToken}
                />
              </div>
            </div>
          </div>
        </div>
        <PlansMarquee />
      </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-red-500">
        Unable to load ID card. Invalid or missing data.
      </p>
    </div>
  );
};

export default IDValidation;
