// "use client";

// import React, { useEffect, useRef, useState } from "react";

// interface LazyVideoProps {
//   srcMp4?: string;
//   srcWebm?: string;
//   srcWebp?: string;
//   mobSrcMp4?: string;
//   mobSrcWebm?: string;
//   mobSrcWebp?: string;
//   className?: string;
//   autoPlay?: boolean;
//   loop?: boolean;
//   muted?: boolean;
//   playsInline?: boolean;
//   poster?: string;
//   mobPoster?: string;
//   category?: string;
//   onLoaded?: () => void; // Callback to signal when video is loaded
//   alwaysPlay?: boolean;  // New prop to always play the video
// }

// const LazyVideo: React.FC<LazyVideoProps> = ({
//   srcMp4,
//   srcWebm,
//   srcWebp,
//   mobSrcMp4,
//   mobSrcWebm,
//   mobSrcWebp,
//   className = "",
//   autoPlay = true,
//   loop = true,
//   muted = true,
//   playsInline = true,
//   poster = "",
//   mobPoster,
//   category,
//   onLoaded,
//   alwaysPlay = false,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Use IntersectionObserver to control play/pause only when alwaysPlay is false.
//   useEffect(() => {
//     if (alwaysPlay) {
//       videoRef.current?.play();
//       return; // Skip observer logic if always playing
//     }

//     let pauseTimer: ReturnType<typeof setTimeout> | null = null;
//     const thresholdValue = category === "community" ? 0.2 : 0.4;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           if (pauseTimer) {
//             clearTimeout(pauseTimer);
//             pauseTimer = null;
//           }
//           videoRef.current?.play();
//         } else {
//           // Delay pausing to prevent flicker
//           pauseTimer = setTimeout(() => {
//             videoRef.current?.pause();
//           }, 500);
//         }
//       },
//       {
//         threshold: thresholdValue,
//         rootMargin: "0px 0px -20% 0px",
//       }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }
//     return () => {
//       observer.disconnect();
//       if (pauseTimer) clearTimeout(pauseTimer);
//     };
//   }, [category, alwaysPlay]);

//   // Detect mobile screen
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       className={`${className} loaded`}
//       muted={muted}
//       loop={loop}
//       playsInline={playsInline}
//       {...{ "webkit-playsinline": "true" }}
//       autoPlay={autoPlay}
//       preload="auto"
//       poster={isMobile && mobPoster ? mobPoster : poster}
//       style={{ backgroundColor: "#d3d3d3" }}
//       onLoadedData={onLoaded}
//     >
//       {isMobile && mobSrcMp4 ? (
//         <source src={mobSrcMp4} type="video/mp4" />
//       ) : (
//         srcMp4 && <source src={srcMp4} type="video/mp4" />
//       )}
//       {isMobile && mobSrcWebm ? (
//         <source src={mobSrcWebm} type="video/webm" />
//       ) : (
//         srcWebm && <source src={srcWebm} type="video/webm" />
//       )}
//       {srcWebp && <source src={srcWebp} type="video/webp" />}
//       Your browser does not support the video tag.
//     </video>
//   );
// };

// export default LazyVideo;


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
  onLoaded?: () => void; // Callback to signal when video is loaded
  alwaysPlay?: boolean;  // New prop to always play the video
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
  onLoaded,
  alwaysPlay = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Use matchMedia to detect mobile screen changes immediately.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Use IntersectionObserver to control play/pause only when alwaysPlay is false.
  useEffect(() => {
    if (alwaysPlay) {
      videoRef.current?.play();
      return; // Skip observer logic if always playing
    }

    let pauseTimer: ReturnType<typeof setTimeout> | null = null;
    const thresholdValue = category === "community" ? 0.2 : 0.4;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pauseTimer) {
            clearTimeout(pauseTimer);
            pauseTimer = null;
          }
          videoRef.current?.play();
        } else {
          // Delay pausing to prevent flicker
          pauseTimer = setTimeout(() => {
            videoRef.current?.pause();
          }, 500);
        }
      },
      {
        threshold: thresholdValue,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      observer.disconnect();
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [category, alwaysPlay]);

  return (
    <video
      ref={videoRef}
      className={`${className} loaded`}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      {...{ "webkit-playsinline": "true" }}
      autoPlay={autoPlay}
      preload="auto"
      poster={isMobile && mobPoster ? mobPoster : poster}
      style={{ backgroundColor: "#d3d3d3" }}
      onLoadedData={onLoaded}
    >
      {isMobile && mobSrcMp4 ? (
        <source src={mobSrcMp4} type="video/mp4" />
      ) : (
        srcMp4 && <source src={srcMp4} type="video/mp4" />
      )}
      {isMobile && mobSrcWebm ? (
        <source src={mobSrcWebm} type="video/webm" />
      ) : (
        srcWebm && <source src={srcWebm} type="video/webm" />
      )}
      {srcWebp && <source src={srcWebp} type="video/webp" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
