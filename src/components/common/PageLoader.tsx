"use client";

import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/common/Spinner";
import { usePageLoader } from "@/app/hooks/usePageLoader";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const loading = usePageLoader();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [loading]);

  return (
    <>
      <div className={`loader-container ${loading ? "" : "loader-hidden"}`}>
        <LoadingSpinner />
      </div>
      <div className={`page-content ${fadeIn ? "loaded" : ""}`}>{children}</div>
    </>
  );
};

export default PageLoader;
