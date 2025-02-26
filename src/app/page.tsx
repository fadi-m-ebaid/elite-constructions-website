"use client";

import React, { useState, useEffect } from "react";
import HomepageSection from "@/components/homepageSections/homepageSections";
import { homepageSectionData } from "@/data/homepageSectionData";
import { homepagePartenrsSliderData } from "@/data/clientsData";
import Slider from "@/components/common/Slider";
import { HomepageSectionDataType } from "@/types/homepageSectionTypes";
import { ProjectsData } from "@/data/projectsData";
import LoadingSpinner from "@/components/common/Spinner";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };
    // If the document is already loaded, update immediately
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main>
      {homepageSectionData.map((section: HomepageSectionDataType) => (
        <HomepageSection key={section.id} section={section} />
      ))}
      <Slider
        items={homepagePartenrsSliderData}
        style={{
          interval: 2500,
          className: "homePartenrsSlider",
          extraSlides: 2,
        }}
      />
      <section className="projects-gallery">
        <h2 className="projects-gallery-title">Projects Gallery</h2>
        <Slider
          items={ProjectsData}
          style={{
            interval: 7000,
            className: "homeProjects-slider",
          }}
        />
        <div className="buttom-frame"></div>
      </section>
    </main>
  );
}
