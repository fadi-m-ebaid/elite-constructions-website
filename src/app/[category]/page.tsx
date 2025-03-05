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
import PageLoader from "@/components/common/PageLoader";
import NotFound from "@/components/pages/NotFound";

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
  const params = useParams();
  const category = params?.category as string;

  // Get the correct data and layout
  const data = categoryDataMap[category];
  const layout = categoryLayouts[category];

  if (!data || !layout) {
    return <NotFound />;
  }

  return (
    <PageLoader>
      <LandingPage
        category={category}
        data={data}
        renderCard={layout.renderCard}
        containerClass={layout.containerClass}
      />
    </PageLoader>
  );
};

export default CategoryPage;
