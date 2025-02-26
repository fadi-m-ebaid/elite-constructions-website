"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import LandingPage from "@/components/pages/LandingPage";
import { categoryLayouts } from "@/components/layouts/categoryLayouts";
import { ProjectsData } from "@/data/projectsData";
import { ServicesData } from "@/data/servicesData";
import { CommunityData } from "@/data/communityData";
import { CareersData } from "@/data/careersData";
import { ContactData } from "@/data/contactUsData";
import LoadingSpinner from "@/components/common/Spinner";
import { AboutData } from "@/data/AboutData";

// Map each category to its data source

const categoryDataMap: Record<string, any[]> = {
  projects: ProjectsData,
  services: ServicesData,
  community: CommunityData,
  careers: CareersData,
  contact: ContactData,
  about: AboutData,
};

const CategoryPage = () => {

  const [loading, setLoading] = useState(true);
  const params = useParams();
  const category = params?.category as string;

  // Get the correct data and layout
  const data = categoryDataMap[category];
  const layout = categoryLayouts[category];

  if (!data || !layout) {
    return <p>Page not found</p>;
  }

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
    <LandingPage
      category={category}
      data={data}
      renderCard={layout.renderCard}
      containerClass={layout.containerClass}
    />
  );
};

export default CategoryPage;
