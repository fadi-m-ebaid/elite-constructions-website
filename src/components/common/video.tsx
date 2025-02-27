import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  srcMp4?: string;
  srcWebm?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  srcMp4,
  srcWebm,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play();
        } else {
          setIsVisible(false);
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={`${className} ${isVisible ? "loaded" : "loading"}`}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      autoPlay={isVisible}
      preload="auto"
      poster={poster}
    >
      {srcWebm && <source src={srcWebm} type="video/webm" />}
      {srcMp4 && <source src={srcMp4} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
