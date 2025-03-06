// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   HomepageHoverDataType,
//   HomepageSectionDataType,
// } from "@/types/homepageSectionTypes";
// import { hoverZonesData } from "@/data/homepageSectionData";
// import Link from "next/link";
// import AOS from "aos";
// import LazyVideo from "../common/video";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMedal,
//   faUsersGear,
//   faBullseye,
// } from "@fortawesome/free-solid-svg-icons";

// interface HomepageSectionProps {
//   section: HomepageSectionDataType;
// }

// const HomepageSection: React.FC<HomepageSectionProps> = ({ section }) => {
//   const {
//     id,
//     title,
//     content,
//     backgroundWebm,
//     backgroundMp4,
//     mobBackgroundWebm,
//     mobBackgroundMp4,
//     mobPoster,
//     layout,
//     hoverZones,
//     type,
//     poster,
//   } = section;

//   // State for hover effects and content updates
//   const [hoveredZone, setHoveredZone] = useState<HomepageHoverDataType | null>(
//     null
//   );
//   const [fade, setFade] = useState(false);
//   const [displayData, setDisplayData] = useState({ title, content });
//   const [isMobile, setIsMobile] = useState<boolean>(false);
//   const [backgroundLoaded, setBackgroundLoaded] = useState(false);

//   // Initialize scroll animations
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   // Use matchMedia to detect mobile screen changes immediately.
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 767px)");
//     setIsMobile(mediaQuery.matches);

//     const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   // Hover zone handlers
//   const handleMouseEnter = (zoneId: string) => {
//     setFade(true);
//     setTimeout(() => {
//       const hoverItem = hoverZonesData.find((item) => item.id === zoneId);
//       if (hoverItem) {
//         setHoveredZone(hoverItem);
//         setDisplayData({ title: hoverItem.title, content: hoverItem.content });
//       }
//       setFade(false);
//     }, 500);
//   };

//   const handleMouseLeave = () => {
//     setFade(true);
//     setTimeout(() => {
//       setHoveredZone(null);
//       setDisplayData({ title, content });
//       setFade(false);
//     }, 500);
//   };

//   // Callback when the background video is loaded
//   const handleVideoLoaded = () => {
//     setBackgroundLoaded(true);
//   };

//   // Force a re-render based on device type by using a key.
//   const videoKey = isMobile ? "mobile" : "desktop";

//   return (
//     <section
//       id={id}
//       className={`homepageSection ${layout}`}
//       style={{ visibility: "visible" }}
//     >
//       {/* Background Video: always play to avoid flickering */}
//       <LazyVideo
//         key={videoKey}
//         className="background-video"
//         alwaysPlay={true} // Bypass lazy-loading for background video
//         poster={isMobile ? mobPoster : poster}
//         srcMp4={isMobile ? mobBackgroundMp4 : backgroundMp4}
//         // Uncomment the next line if you want to include a webm source:
//         // srcWebm={isMobile ? mobBackgroundWebm : backgroundWebm}
//         onLoaded={handleVideoLoaded}
//       />

//       {/* Hover Zones */}
//       <div className="hoverZones-container">
//         {hoverZones?.map((zone) => (
//           <div
//             key={zone.id}
//             className="hoverZone"
//             style={
//               isMobile
//                 ? {
//                     top: zone.mobPosition?.top,
//                     left: zone.mobPosition?.left,
//                     width: zone.mobPosition?.width,
//                     height: zone.mobPosition?.height,
//                   }
//                 : {
//                     top: zone.position.top,
//                     left: zone.position.left,
//                     width: zone.position.width,
//                     height: zone.position.height,
//                   }
//             }
//             onMouseEnter={() => handleMouseEnter(zone.zoneDataId)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <LazyVideo
//               autoPlay
//               playsInline
//               loop
//               muted
//               className="target-animation"
//               srcMp4="/homepage-popups-2/Target_transparent_noaudio.mp4"
//             />
//             {hoveredZone?.id === zone.zoneDataId &&
//               hoveredZone.onHoverTitle && (
//                 <picture>
//                   <source srcSet={hoveredZone.onHoverTitle} type="image/webp" />
//                   <img
//                     className="hover-video"
//                     src={hoveredZone.onHoverTitle} // Fallback for browsers that don't support WebP
//                     alt="Animated WebP"
//                     decoding="async"
//                   />
//                 </picture>
//               )}
//           </div>
//         ))}
//       </div>

//       {/* Section Content */}
//       <div className={`${id} container ${fade ? "fade" : ""}`}>
//         <div className="content-container" data-aos="fade-up">
//           <h2 className="homepageSection-title">{displayData.title}</h2>
//           <p className="homepageSection-content">{displayData.content}</p>
//           <Link href={`/${type}`} className="read-more">
//             Read More <span className="arrow-icon">➝</span>
//           </Link>
//         </div>
//         {id === "infrastructure" && isMobile && (
//           <div className="our-values">
//             <h2 className="values-title">Our Values</h2>
//             <div className="values-icons flex gb-2">
//               <div>
//                 <FontAwesomeIcon icon={faMedal} className="valueIcon" />
//                 <p>Quality</p>
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faUsersGear} className="valueIcon" />
//                 <p>Integrity</p>
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faBullseye} className="valueIcon" />
//                 <p>Efficiency</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HomepageSection;

"use client";

import React, { useState, useEffect } from "react";
import {
  HomepageHoverDataType,
  HomepageSectionDataType,
} from "@/types/homepageSectionTypes";
import { hoverZonesData } from "@/data/homepageSectionData";
import Link from "next/link";
import AOS from "aos";
import LazyVideo from "../common/video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faUsersGear,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

interface HomepageSectionProps {
  section: HomepageSectionDataType;
}

const HomepageSection: React.FC<HomepageSectionProps> = ({ section }) => {
  const {
    id,
    title,
    content,
    backgroundWebm,
    backgroundMp4,
    mobBackgroundWebm,
    mobBackgroundMp4,
    mobPoster,
    layout,
    hoverZones,
    type,
    poster,
  } = section;

  // Detect device type
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");

  // State for hover effects and content updates
  const [hoveredZone, setHoveredZone] = useState<HomepageHoverDataType | null>(
    null
  );
  const [fade, setFade] = useState(false);
  const [displayData, setDisplayData] = useState({ title, content });
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  // Initialize scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Detect if the device is mobile
  useEffect(() => {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );
    setDeviceType(isMobileDevice ? "mobile" : "desktop");
  }, []);

  // Handle hover and touch interactions
  const handleInteractionStart = (zoneId: string) => {
    setFade(true);
    setTimeout(() => {
      const hoverItem = hoverZonesData.find((item) => item.id === zoneId);
      if (hoverItem) {
        setHoveredZone(hoverItem);
        setDisplayData({ title: hoverItem.title, content: hoverItem.content });
      }
      setFade(false);
    }, 100); // Short delay for smooth transition
  };

  const handleInteractionEnd = () => {
    if (deviceType === "desktop") {
      // For desktop, remove popup on mouse leave
      setFade(true);
      setTimeout(() => {
        setHoveredZone(null);
        setDisplayData({ title, content });
        setFade(false);
      }, 100);
    }
    // For mobile, don't remove on touch end to prevent disappearing issues
  };

  // Callback when the background video is loaded
  const handleVideoLoaded = () => {
    setBackgroundLoaded(true);
  };

  // Force a re-render based on device type by using a key.
  const videoKey = deviceType === "mobile" ? "mobile" : "desktop";

  return (
    <section
      id={id}
      className={`homepageSection ${layout}`}
      style={{ visibility: "visible" }}
    >
      {/* Background Video: always play to avoid flickering */}
      <LazyVideo
        key={videoKey}
        className="background-video"
        alwaysPlay={true} // Bypass lazy-loading for background video
        poster={deviceType === "mobile" ? mobPoster : poster}
        srcMp4={deviceType === "mobile" ? mobBackgroundMp4 : backgroundMp4}
        onLoaded={handleVideoLoaded}
      />

      {/* Hover Zones */}
      <div className="hoverZones-container">
        {hoverZones?.map((zone) => (
          <div
            key={zone.id}
            className="hoverZone"
            style={
              deviceType === "mobile"
                ? {
                    top: zone.mobPosition?.top,
                    left: zone.mobPosition?.left,
                    width: zone.mobPosition?.width,
                    height: zone.mobPosition?.height,
                  }
                : {
                    top: zone.position.top,
                    left: zone.position.left,
                    width: zone.position.width,
                    height: zone.position.height,
                  }
            }
            onMouseEnter={() =>
              deviceType === "desktop" &&
              handleInteractionStart(zone.zoneDataId)
            }
            onMouseLeave={() =>
              deviceType === "desktop" && handleInteractionEnd()
            }
            onTouchStart={(e) => {
              e.preventDefault(); // Prevents instant disappearance
              handleInteractionStart(zone.zoneDataId);
            }}
          >
            <LazyVideo
              autoPlay
              playsInline
              loop
              muted
              className="target-animation"
              srcMp4="/homepage-popups-2/Target_transparent_noaudio.mp4"
            />
            {hoveredZone?.id === zone.zoneDataId &&
              hoveredZone.onHoverTitle && (
                <picture>
                  <source srcSet={hoveredZone.onHoverTitle} type="image/webp" />
                  <img
                    className="hover-video"
                    src={hoveredZone.onHoverTitle} // Fallback for browsers that don't support WebP
                    // autoPlay
                    // playsInline
                    // loop
                    // muted
                  />
                </picture>
              )}
          </div>
        ))}
      </div>

      {/* Section Content */}
      <div className={`${id} container ${fade ? "fade" : ""}`}>
        <div className="content-container" data-aos="fade-up">
          <h2 className="homepageSection-title">{displayData.title}</h2>
          <p className="homepageSection-content">{displayData.content}</p>
          <Link href={`/${type}`} className="read-more">
            Read More <span className="arrow-icon">➝</span>
          </Link>
        </div>
        {id === "infrastructure" && deviceType === "mobile" && (
          <div className="our-values">
            <h2 className="values-title">Our Values</h2>
            <div className="values-icons flex gb-2">
              <div>
                <FontAwesomeIcon icon={faMedal} className="valueIcon" />
                <p>Quality</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faUsersGear} className="valueIcon" />
                <p>Integrity</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faBullseye} className="valueIcon" />
                <p>Efficiency</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomepageSection;
