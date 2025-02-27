import React, { useEffect, useState } from "react";
import Slider from "../common/Slider";
import { consultantsData } from "@/data/clientsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMedal,
  faUsers,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

const AboutPage = () => {
  const [openSection, setOpenSection] = useState("vision");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const stats = [
    { id: 1, icon: faCompass, value: "70+", label: "Country" },
    { id: 2, icon: faMedal, value: "60", label: "Awards and Medals" },
    { id: 3, icon: faUsers, value: "130k+", label: "International Customers" },
    { id: 4, icon: faBuilding, value: "21+", label: "Facilities" },
  ];

  

  return (
    <div className="about-page-layout">
      {/* Existing About Sections */}
      <div className="about-section" data-aos="fade-up">
        <div className="about-text-content">
          <h2>The Beginning</h2>
          <p>
            Elite Group was founded in 2017 and over the previous seven years,
            we have seen our company develop from a small civil-works company
            into a fully-fledged general contracting corporation with a big
            portfolio, a solid financial position, and a major presence across a
            multitude of sectors.
          </p>
        </div>
        <img loading="lazy"
          src="/about/about-page-1.png"
          alt="Construction worker with blueprints"
          className="about-image"
        />
      </div>

      <div className="about-section" data-aos="fade-up">
        <img loading="lazy"
          src="/about/about-page-2.png"
          alt="Handshake between engineers"
          className="about-image"
        />
        <div className="about-text-content">
          <h2>The Standards</h2>
          <p>
            Elite Group has been raising its reputation and commitment by
            adhering to international standards and creating stringent quality
            management systems in each of its business segments. Additionally,
            we have devised strict protocols to guarantee the security of our
            employees; as a consequence, errors are reduced and projects are
            completed on schedule and under budget.
          </p>
        </div>
      </div>

      <div className="about-section" data-aos="fade-up">
        <div className="about-text-content">
          <h2>The Success</h2>
          <p>
            In the end, we satisfy and surpass our clients’ expectations. Our
            top-notch engineering, administrative, and technical staff, who use
            state-of-the-art machinery and integrated support services, further
            contribute to the company’s success. We are currently investing in
            the future in order to provide up-to-date technology and expertise
            to the Kingdom. This will enable us to align with Vision 2030’s
            goals of a striving economy, a lively society, and an aspirational
            country.
          </p>
        </div>
        <img loading="lazy"
          src="/about/about-page-3.png"
          alt="Construction worker holding blueprints"
          className="about-image"
        />
      </div>

      {/* New Section: Inspiration, Innovation, and Opportunities */}
      <div className="inspiration-section" data-aos="fade-up">
        <div className="inspiration-content">
          <h2>Inspiration, Innovation, And Opportunities.</h2>
          <p>
            Take advantage of the experienced staff and endless opportunities to
            complete your project or get what you need.
          </p>

          {/* Accordion Section */}
          <div className="accordion">
            <div
              className={`accordion-item ${
                openSection === "vision" ? "active" : ""
              }`}
              onClick={() => toggleSection("vision")}
            >
              <h3>Business Vision</h3>
              {openSection === "vision" && (
                <p>
                Our ultimate aim is to become “The nation&apos;s top and most
                chosen contractor” as we have a resolute dedication to
                delivering unmatched results.
              </p>
              )}
            </div>

            <div
              className={`accordion-item ${
                openSection === "mission" ? "active" : ""
              }`}
              onClick={() => toggleSection("mission")}
            >
              <h3>Business Mission</h3>
              {openSection === "mission" && (
                <p>
                  To deliver high-quality, cost-effective projects on schedule
                  and to ensure customer satisfaction through innovation and
                  integrity.
                </p>
              )}
            </div>

            <div
              className={`accordion-item ${
                openSection === "quality" ? "active" : ""
              }`}
              onClick={() => toggleSection("quality")}
            >
              <h3>Quality Policy</h3>
              {openSection === "quality" && (
                <p>
                  We are committed to excellence in quality, safety, and
                  sustainability, ensuring that all projects meet the highest
                  international standards.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="inspiration-image">
          <img loading="lazy"
            src="/about/about-inspiration.png"
            alt="Engineers working on blueprints"
          />
        </div>
      </div>
      <div className="about-consultants-slider-container" data-aos="fade-in">
        <h2>Consultants</h2>
        <Slider
          items={consultantsData}
          style={{
            interval: 3000,
            className: "aboutPageSlider",
            extraSlides: 2,
          }}
        ></Slider>
      </div>
      <div className="stats-section" data-aos="fade-in">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
