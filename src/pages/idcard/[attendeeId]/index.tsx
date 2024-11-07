import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IdCard from "@/components/idcard/id";
import { Loader2 } from "lucide-react";

const IDValidation = () => {
  const router = useRouter();
  const { attendeeId } = router.query;
  const [loading, setLoading] = useState(true);
  const [attendeeData, setAttendeeData] = useState<any>(null);
  const [qrToken, setQrToken] = useState<string>("");

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-lg">Loading your ID card...</p>
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
      <div className="min-h-screen flex items-center justify-center">
        <IdCard
          firstName={attendeeData.firstName}
          lastName={attendeeData.lastName}
          qrData={qrToken} // Using the token string directly
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-red-500">
        Unable to load ID card. Invalid or missing data.
      </p>
    </div>
  );
};

export default IDValidation;
