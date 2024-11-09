import { useState } from "react";

interface ShareButtonProps {
  imageUrl: string;
}

const ShareButton = ({ imageUrl }: ShareButtonProps) => {
  const [shareError, setShareError] = useState<string | null>(null);

  // Function to convert DataURL to a File object
  const dataURLtoFile = (dataurl: string, filename: string) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleShare = async () => {
    try {
      if (!navigator.canShare) {
        setShareError("Sharing is not supported in this browser.");
        return;
      }

      // Wait longer for QR code and all images to fully render
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create a temporary img element to ensure image is loaded
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      // Convert data URL to File after ensuring image is loaded
      const file = dataURLtoFile(imageUrl, "IDCard.png");

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Your ID Card",
          text: "Check out my event ID card!",
        });
      } else {
        setShareError("This device doesn't support sharing files.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      setShareError("An error occurred while trying to share.");
    }
  };

  return (
    <div>
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Share ID Card
      </button>
      {shareError && <p className="text-red-500 mt-2">{shareError}</p>}
    </div>
  );
};

export default ShareButton;
