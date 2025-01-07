import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null); // Specify the type explicitly

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        // Play the video if it's in the viewport, otherwise pause it
        setIsPlaying(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="video-section">
      <div ref={videoRef} className="video-container">
        <ReactPlayer
          url="/Sanera_Portfolio_Intro.mp4"
          playing={isPlaying}
          controls={true}
          width="100%"
          height="auto"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default VideoSection;
