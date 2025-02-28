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

  // State to track hover and fade effect
  const [hoveredZone, setHoveredZone] = useState<HomepageHoverDataType | null>(
    null
  );
  const [fade, setFade] = useState(false);
  // State for content to display (so we can update it after fade-out)
  const [displayData, setDisplayData] = useState({ title, content });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseEnter = (zoneId: string) => {
    setFade(true);
    setTimeout(() => {
      const hoverItem = hoverZonesData.find((item) => item.id === zoneId);
      if (hoverItem) {
        setHoveredZone(hoverItem);
        setDisplayData({ title: hoverItem.title, content: hoverItem.content });
      }
      setFade(false);
    }, 500);
  };

  const handleMouseLeave = () => {
    setFade(true);
    setTimeout(() => {
      setHoveredZone(null);
      setDisplayData({ title, content });
      setFade(false);
    }, 500);
  };

  // Update isMobile based on the window's width.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize the state and add resize event listener.
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const videoKey = isMobile ? "mobile" : "desktop";

  return (
    <section id={id} className={`homepageSection ${layout}`}>
      {/* ✅ Background Video (Lazy Loaded) */}
      <LazyVideo
        key={videoKey}
        className="background-video"
        poster={isMobile ? mobPoster : poster}
        srcWebm={isMobile ? mobBackgroundWebm : backgroundWebm}
        srcMp4={isMobile ? mobBackgroundMp4 : backgroundMp4}
      />

      {/* ✅ Render Hover Zones with Videos */}
      <div className="hoverZones-container">
        {hoverZones?.map((zone) => (
          <div
            key={zone.id}
            className="hoverZone"
            style={{
              top: zone.position.top,
              left: zone.position.left,
              width: zone.position.width,
              height: zone.position.height,
            }}
            onMouseEnter={() => handleMouseEnter(zone.zoneDataId)}
            onMouseLeave={handleMouseLeave}
          >
            {/* ✅ Target Animation (Lazy Loaded) */}
            <LazyVideo
              className="target-animation"
              srcWebm="/homepage-popups-2/Target_transparent.webm"
            />

            {/* ✅ Hovered video inside the zone (Lazy Loaded) */}
            {hoveredZone?.id === zone.zoneDataId &&
              hoveredZone.onHoverTitle && (
                <img
                  loading="lazy"
                  className="hover-video"
                  src={hoveredZone.onHoverTitle}
                  // autoPlay
                  // muted
                  // loop
                  // playsInline
                  // preload="auto"
                  // onCanPlayThrough={(e) => (e.currentTarget.style.opacity = "1")}
                />
              )}
          </div>
        ))}
      </div>

      {/* Section Content */}
      <div className={`container ${fade ? "fade" : ""}`}>
        <div className="content-container" data-aos="fade-up">
          <h2 className="homepageSection-title">{displayData.title}</h2>
          <p className="homepageSection-content">{displayData.content}</p>
          <Link href={`/${type}`} className="read-more">
            Read More <span className="arrow-icon">➝</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection;
