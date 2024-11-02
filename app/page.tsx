'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Landing() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay the image load to simulate a blank screen before the animation
    const timeout = setTimeout(() => setIsLoaded(true), 500); // 0.5s delay before image appears
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
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
            className={`rounded-full shadow-sm shadow-purple-400 transition-transform duration-300 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            } image-hover-effect`}  // Add hover effect class
          />
        </button>
      </div>
    </div>
  );
}
