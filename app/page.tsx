'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Landing() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay to simulate the image loading after the blank screen
    const timeout = setTimeout(() => setIsLoaded(true), 500); // 0.5s delay before image appears
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  const handleImageClick = () => {
    router.push("/home");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div>
        <button onClick={handleImageClick}>
          <Image
            src="/Sanera.png"
            alt="OG Sanera"
            width={250}
            height={250}
            priority
            className={`rounded-full shadow-sm shadow-purple-400 transform ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            } image-hover-effect`}  // Add hover effect class
          />
        </button>
      </div>
    </div>
  );
}
