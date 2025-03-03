"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  srcMp4?: string;
  srcWebm?: string;
  srcWebp?: string;
  mobSrcMp4?: string;
  mobSrcWebm?: string;
  mobSrcWebp?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  mobPoster?: string;
  category?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  srcMp4,
  srcWebm,
  srcWebp,
  mobSrcMp4,
  mobSrcWebm,
  mobSrcWebp,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster = "",
  mobPoster,
  category,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Lazy loading via IntersectionObserver with debounced callback
  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const thresholdValue = category === "community" ? 0.2 : 0.4;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Ratio:", entry.intersectionRatio);
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            videoRef.current?.play();
          } else {
            setIsVisible(false);
            videoRef.current?.pause();
          }
        }, 100);
      },
      {
        threshold:thresholdValue,
        rootMargin: "0px 0px -10% 0px", // Adjust root margin if needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  // Detect mobile screen using window.innerWidth
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Re-trigger video play on orientation change if video is visible
  useEffect(() => {
    const handleOrientationChange = () => {
      if (videoRef.current && isVisible) {
        videoRef.current.play();
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange);
  }, [isVisible]);

  // Use mobile sources if on a mobile device and mobile props are provided
  const videoSrcWebm = isMobile && mobSrcWebm ? mobSrcWebm : srcWebm;
  const videoSrcMp4 = isMobile && mobSrcMp4 ? mobSrcMp4 : srcMp4;
  const videoSrcWebp = isMobile && mobSrcWebp ? mobSrcWebp : srcWebp;
  const videoPoster = isMobile && mobPoster ? mobPoster : poster;

  return (
    <video
      ref={videoRef}
      className={`${className} ${isVisible ? "loaded" : "loading"}`}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      {...{ "webkit-playsinline": "true" }}
      autoPlay={isVisible && autoPlay}
      preload="auto"
      // poster={videoPoster}
    >
      {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />}
      {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
      {/* {videoSrcWebp && <source src={videoSrcWebp} type="video/webp" />} */}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
