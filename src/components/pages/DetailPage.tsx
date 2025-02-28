import React, { useEffect } from "react";
import PagesFooter from "./pagesFooter";
import Card from "../common/cardRender";
import Link from "next/link";
import AOS from "aos";

interface DetailPageProps<T> {
  data: T;
  renderDetail: (item: T) => React.ReactNode;
  detailContainerClass?: string;
  category: string | "Category";
  categoryData?: T[];
}

const DetailPage = <T,>({
  data,
  renderDetail,
  category,
  categoryData,
  detailContainerClass,
}: DetailPageProps<T>) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredItems = categoryData?.filter(
    (item) => (data as any).id !== (item as any).id
  );

  return (
    <section
      className={`${detailContainerClass}  "default-detail-container" flex`}
    >
      {category !== "community" && (
        <div
          className="details-header"
          style={{
            backgroundImage: `url(${(data as any).bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading="lazy"
            className="details-logo"
            src="/assets/logo-light-300x300.png"
          />
          <h1 className="details-header-title col-md-8">
            {(data as any).title.charAt(0).toUpperCase() +
              (data as any).title.slice(1)}
          </h1>
        </div>
      )}
      {category === "community" && (
        <div
          className="community-header"
          style={{ backgroundImage: `url(${(data as any).bgImg})` }}
        >
          <div className="community-header-overlay"></div>{" "}
          {/* Dark overlay for readability */}
          <div className="community-header-content">
            {/* Article Title */}
            <h1 className="community-header-title">{(data as any).title}</h1>

            {/* Meta Information */}
            <div className="community-header-meta">
              {/* Author Info */}
              <div className="community-meta-item community-author">
                <img
                  loading="lazy"
                  src={(data as any).author.img || "/assets/default-user.png"}
                  alt={(data as any).author.name}
                  className="community-author-img"
                />
                <div>
                  <p className="community-meta-label">AUTHOR</p>
                  <p className="community-meta-value">
                    {(data as any).author.name}
                  </p>
                </div>
              </div>

              {/* Publish Date */}
              <div className="community-meta-item">
                <p className="community-meta-label">PUBLISHED ON</p>
                <p className="community-meta-value">
                  {new Date((data as any).publishDate).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>

              {/* Publish Category (First Tag as Category) */}
              <div className="community-meta-item">
                <p className="community-meta-label">PUBLISHED IN</p>
                <Link
                  href={`/community?tag=${encodeURIComponent(
                    (data as any).publishCategory
                  )}`}
                  key={(data as any).publishCategory}
                  passHref
                >
                  <p className="community-meta-value">
                    {(data as any).publishCategory}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {["services", "projects", "products"].includes(category) && (
        <div className="detail-description row" data-aos="fade-in">
          <p className="detail-description-title col-md-5">
            {(data as any).title.charAt(0).toUpperCase() +
              (data as any).title.slice(1)}
          </p>
          <p className="detail-description-text col-md-5">
            {(data as any).description || (data as any).longDesc}
          </p>
        </div>
      )}
      {category === "services" && (
        <div
          className={`${category}-info-details-container row`}
          data-aos="fade-in"
        >
          <div className={`${category}-info-img col-md-6`}>
            <img loading="lazy" src={(data as any).img2}></img>
          </div>
          <div className={`${category}-info-data container col-md-6`}>
            <div className="row">
              {Object.entries((data as any).serviceActionList).map(
                ([label, value]) => (
                  <div
                    key={label}
                    className="col-12 d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    {/* <span className="lable text-muted fw-bold">
                    {label.charAt(0).toUpperCase() + label.slice(1)}:
                  </span> */}
                    <span className="fw-bold">{String(value)}</span>{" "}
                    {/* Convert value to string */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
      {category === "services" && (data as any).pdfUrl && (
        <div className="pdf">
          <a
            className="pdf-link"
            href={(data as any).pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>
      )}
      <div data-aos="fade-in">{renderDetail(data)}</div>
      {category === "projects" && (
        <div
          className={`${category}-info-details-container row`}
          data-aos="fade-in"
        >
          <div className={`${category}-info-title col-md-2`}>
            <h1>
              {category?.charAt(0).toUpperCase() + category.slice(1, -1)}{" "}
              Details
            </h1>
          </div>
          <div className={`${category}-info-data container col-md-7`}>
            <div className="row">
              {Object.entries((data as any).projectDetails).map(
                ([label, value]) => (
                  <div
                    key={label}
                    className="col-12 d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <span className="lable text-muted fw-bold">
                      {label.charAt(0).toUpperCase() + label.slice(1)}:
                    </span>
                    <span className="fw-bold">{String(value)}</span>{" "}
                    {/* Convert value to string */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
      {["services", "projects", "products"].includes(category) && (
        <div className="category-items-list-container row" data-aos="fade-in">
          {/* Section Title */}
          <div className={`${category}-items-list-title col-md-2`}>
            <h1>
              More {category?.charAt(0).toUpperCase() + category.slice(1)}
            </h1>
          </div>
          {/* Render remaining category items */}
          <div className={`${category}-items-list-data col-md-7`}>
            <div className="row">
              {filteredItems?.map((item) => (
                <div key={(item as any).id} className="card-wrapper">
                  <Card {...(item as any)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="all-category-btn-container" data-aos="fade-in">
        <Link href={`/${category}`}>
          <button className="all-category-btn">
            All {category?.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        </Link>
      </div>
      <PagesFooter></PagesFooter>
    </section>
  );
};

export default DetailPage;
