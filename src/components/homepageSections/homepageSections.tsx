"use client";

import React, { useState, useEffect } from "react";
import { HomepageHoverDataType, HomepageSectionDataType } from "@/types/homepageSectionTypes";
import { hoverZonesData } from "@/data/homepageSectionData";
import Link from "next/link";
import AOS from "aos";

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
    layout,
    hoverZones,
    type,
  } = section;

  // State to track hover and fade effect
  const [hoveredZone, setHoveredZone] = useState<HomepageHoverDataType | null>(null);
  const [fade, setFade] = useState(false);
  // State for content to display (so we can update it after fade-out)
  const [displayData, setDisplayData] = useState({ title, content });

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseEnter = (zoneId: string) => {
    // Start fade-out
    setFade(true);

    // Wait for fade-out to complete before updating content
    setTimeout(() => {
      const hoverItem = hoverZonesData.find((item) => item.id === zoneId);
      if (hoverItem) {
        setHoveredZone(hoverItem);
        setDisplayData({ title: hoverItem.title, content: hoverItem.content });
      }
      // Fade back in with the new content
      setFade(false);
    }, 500); // Duration should match your CSS transition duration
  };

  const handleMouseLeave = () => {
    // Optionally, fade out then revert to original content
    setFade(true);
    setTimeout(() => {
      setHoveredZone(null);
      setDisplayData({ title, content });
      setFade(false);
    }, 500);
  };

  return (
    <section id={id} className={`homepageSection ${layout}`}>
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundWebm} type="video/webm" />
        <source src={backgroundMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Render Hover Zones with Videos */}
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
            {/* Fixed-sized Target Animation at Hover Point */}
            <video
              className="target-animation"
              src="/homepage-popups-2/Target_transparent.webm"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Hovered video inside the zone */}
            {hoveredZone?.id === zone.zoneDataId && hoveredZone.onHoverTitle && (
              <video
                className="hover-video"
                src={hoveredZone.onHoverTitle}
                autoPlay
                muted
                loop
                playsInline
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
