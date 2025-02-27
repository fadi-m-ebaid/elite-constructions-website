import React, { useEffect } from "react";
import Link from "next/link";
import Slider from "../common/Slider";
import { homepagePartenrsSliderData } from "@/data/clientsData";
import PagesFooter from "./pagesFooter";
import { useSearchParams } from "next/navigation";
import AOS from "aos";

interface LandingPageProps<T> {
  category: string;
  data: T[];
  renderCard: (item: T) => React.ReactNode;
  containerClass?: string; // Optional class for styling
}

// const categoryDataMap = {
//   projects: ProjectsData as ProjectType[],
//   services: ServicesData as ServiceType[],
//   community: CommunityData as CommunityType[],
// };

const headerBackgrounds: { [key: string]: string } = {
  about: "/assets/about-us-header.jpeg",
  services: "/assets/about-us-header.jpeg",
  community: "/community/web vid _compressed.mp4",
  careers: "/assets/careers-header.jpeg",
  contact: "/assets/contact-us-header.jpeg",
  projects: "/assets/projects-header.jpeg",
};

const LandingPage = <T,>({
  category,
  data,
  renderCard,
  containerClass,
}: LandingPageProps<T>) => {
  const backgroundImage =
    headerBackgrounds[category] || "/assets/default-header.jpeg";

  const selectedTag = useSearchParams().get("tag");

  if (selectedTag && category === "community") {
    const filteredTagCommunity = data.filter((item) =>
      (item as any).tags?.includes(selectedTag)
    );
    data = filteredTagCommunity;
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="category-header">
        {/* Use a video for "community", otherwise use an image background */}
        {category === "community" ? (
          <video autoPlay loop muted playsInline preload="auto" className="category-video-bg">
            <source src={backgroundImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="category-image-bg"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}

        {/* Logo & Title */}
        <img loading="lazy"
          src="/assets/logo-light-300x300.png"
          alt="Logo"
          className="category-logo"
        />
        <h1 className="landing-header-title">
          {["about", "contact"].includes(category)
            ? `${category.toUpperCase()} US`
            : category.toUpperCase()}
        </h1>
      </div>

      {["services", "projects", "products"].includes(category) && (
        <div className="category-description row" data-aos="fade-in">
          <p className="category-description-title col-md-5">
            We Provide Excellent{" "}
            {category.charAt(0).toUpperCase() + category.slice(1)} To Our
            Customers
          </p>
          <p className="category-description-text col-md-5">
            Our team is fully equipped to offer all the necessary support and
            solutions related to{" "}
            {category.charAt(0).toUpperCase() + category.slice(1)}, ensuring
            that all client requirements are met efficiently while making the
            process seamless and tailored.
          </p>
        </div>
      )}
      <div
        className={
          containerClass ? `${containerClass} col-md-12` : "default-container"
        } data-aos="fade-in"
      >
        {data.map((item, index) =>
          ["careers", "contact", "about"].includes(category) ? (
            <div key={index} data-aos="fade-in">{renderCard(item)}</div> // ✅ Use index as key fallback
          ) : (
            <Link
              key={index}
              href={`/${category}/${(item as any).id || index}`}
              data-aos="fade-in"
            >
              {renderCard(item)}
            </Link>
          )
        )}
      </div>

      {category === "services" && (
        <div>
          <div className="category-image-back">
            <img loading="lazy" src="/assets/services-landing-1.jpeg" />
          </div>
          <div className="category-brief-container">
            <div className="category-brief-description row">
              <p className="category-brief-description-title col-md-5">
                We Provide A Variety Of Construction{" "}
                {category.charAt(0).toUpperCase() + category.slice(1)}.
              </p>
              <p className="category-brief-description-text col-md-5">
                Our partners and experienced staff are experts in the
                construction process and our focus on the needs of our clients
                separate us from the competition.
              </p>
            </div>
            <Link href="/projects">
              <button className="category-button">Our Projects</button>
            </Link>
          </div>
        </div>
      )}
      <div className="landing-clients-slider">
        <h1 className="slider-title">Our Clients</h1>
        <Slider
          items={homepagePartenrsSliderData}
          style={{
            interval: 3000,
            className: "landingPage-slider",
            extraSlides: 2,
          }}
        ></Slider>
      </div>
      <PagesFooter></PagesFooter>
    </section>
  );
};

export default LandingPage;
