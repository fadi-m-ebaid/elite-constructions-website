"use client";

import React, { useState, useEffect, Suspense } from "react";
import DetailPage from "@/components/pages/DetailPage";
import { ProjectsData } from "@/data/projectsData";
import { ServicesData } from "@/data/servicesData";
import { CommunityData } from "@/data/communityData";
import { CategoryDetailLayouts } from "@/components/layouts/categoryDetailLayouts";
import LoadingSpinner from "@/components/common/Spinner";
import PageLoader from "@/components/common/PageLoader";
import NotFound from "@/components/pages/NotFound";

/**
 * The props that your page component receives.
 * Notice that `params` is now a Promise which resolves to an object with `category` and `id`.
 */
export interface DynamicDetailProps {
  params: Promise<{ category: string; id: string }>;
  searchParams?: any;
}

/**
 * This is your main component that renders the detail page.
 * It uses `React.use()` to unwrap the params promise.
 *
 * Note:
 * - React.use() (an experimental API) will suspend rendering until the promise is resolved.
 * - Because of this, we wrap this component in a Suspense boundary.
 */
function DynamicDetail({ params, searchParams }: DynamicDetailProps) {
  // Unwrap the promise using React.use(). This will pause rendering until params is resolved.
  const { category, id } = React.use(params);

  // Map each category to its corresponding data array.
  const categoryDataMap: Record<string, any[]> = {
    projects: ProjectsData,
    services: ServicesData,
    community: CommunityData,
  };

  // Find the data and the corresponding layout for the given category and id.
  const dataArr = categoryDataMap[category];
  const data = dataArr?.find((item) => item.id === id);
  const layout = CategoryDetailLayouts[category];

  // If data or layout is not found, show a "Page not found" message.
  if (!data || !layout) {
    return <NotFound />;
  }

  // Render the DetailPage with the proper props.
  return (
    <PageLoader>
      <DetailPage
        category={category}
        categoryData={dataArr}
        data={data}
        renderDetail={layout.renderDetail}
        detailContainerClass={layout.detailContainerClass}
      />
    </PageLoader>
  );
}

/**
 * To correctly handle the asynchronous params, we wrap our component in a Suspense boundary.
 * The Suspense fallback (LoadingSpinner) is displayed until React.use(params) resolves.
 */
export default function DynamicDetailWrapper(props: DynamicDetailProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DynamicDetail {...props} />
    </Suspense>
  );
}
