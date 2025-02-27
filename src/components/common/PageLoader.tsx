"use client";

import React from "react";
import LoadingSpinner from "@/components/common/Spinner";
import { usePageLoader } from "@/app/hooks/usePageLoader";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const loading = usePageLoader();

  if (loading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default PageLoader;
