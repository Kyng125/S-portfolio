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
      <div className="flex flex-col lg:flex-row items-center gap-5 p-5 lg:p-0" onClick={handleImageClick}>
        <button>
          <Image
            src="/Sanera.png"
            alt="OG Sanera"
            width={250}
            height={250}
            priority
            className={`lg:p-10 rounded-full transition-transform duration-300 ${
              isLoaded ? "flicker-in-1" : "opacity-0"
            } image-hover-effect`}  // Add hover effect class
          />
        </button>
        <p className={`text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r via-pink1 from-electricPurple to-amber ${
              isLoaded ? "tracking-in-expand" : "opacity-0"
            } image-hover-effect`}>SANERA</p>
      </div>
    </div>
  );
}
