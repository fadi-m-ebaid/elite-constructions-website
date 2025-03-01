// import React, { useEffect, useRef, useState } from "react";

// interface LazyVideoProps {
//   srcMp4?: string;
//   srcWebm?: string;
//   mobSrcMp4? : string;
//   mobSrcWebm? : string;
//   className?: string;
//   autoPlay?: boolean;
//   loop?: boolean;
//   muted?: boolean;
//   playsInline?: boolean;
//   poster?: string;
//   mobPoster?: string;
// }

// const LazyVideo: React.FC<LazyVideoProps> = ({
//   srcMp4,
//   srcWebm,
//   className = "",
//   autoPlay = true,
//   loop = true,
//   muted = true,
//   playsInline = true,
//   poster = "",
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           videoRef.current?.play();
//         } else {
//           setIsVisible(false);
//           videoRef.current?.pause();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       className={`${className} ${isVisible ? "loaded" : "loading"}`}
//       muted={muted}
//       loop={loop}
//       playsInline={playsInline}
//       autoPlay={isVisible}
//       preload="auto"
//       poster={poster}
//     >
//       {srcWebm && <source src={srcWebm} type="video/webm" />}
//       {srcMp4 && <source src={srcMp4} type="video/mp4" />}
//       Your browser does not support the video tag.
//     </video>
//   );
// };

// export default LazyVideo;

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  srcMp4?: string;
  srcWebm?: string;
  mobSrcMp4?: string;
  mobSrcWebm?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  mobPoster?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  srcMp4,
  srcWebm,
  mobSrcMp4,
  mobSrcWebm,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster = "",
  mobPoster,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Lazy loading via IntersectionObserver
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

  // Detect mobile screen using window.innerWidth
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use mobile sources if on a mobile device and mobile props are provided
  const videoSrcWebm = isMobile && mobSrcWebm ? mobSrcWebm : srcWebm;
  const videoSrcMp4 = isMobile && mobSrcMp4 ? mobSrcMp4 : srcMp4;
  const videoPoster = isMobile && mobPoster ? mobPoster : poster;

  return (
    <video
      ref={videoRef}
      className={`${className} ${isVisible ? "loaded" : "loading"}`}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      autoPlay={isVisible && autoPlay}
      preload="auto"
      poster={videoPoster}
    >
      {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
      {/* {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />} */}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
