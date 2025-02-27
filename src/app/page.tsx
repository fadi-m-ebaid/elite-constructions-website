"use client";

import HomepageSection from "@/components/homepageSections/homepageSections";
import { homepageSectionData } from "@/data/homepageSectionData";
import { homepagePartenrsSliderData } from "@/data/clientsData";
import Slider from "@/components/common/Slider";
import { HomepageSectionDataType } from "@/types/homepageSectionTypes";
import { ProjectsData } from "@/data/projectsData";
import PageLoader from "@/components/common/PageLoader";

export default function HomePage() {
  return (
    <PageLoader>
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
    </PageLoader>
  );
}
