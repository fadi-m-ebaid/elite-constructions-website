// 
"use client";

import { useEffect } from "react";

const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export default function VersionChecker() {
  useEffect(() => {
    let currentVersion = localStorage.getItem("app_version");
    let hasReloaded = sessionStorage.getItem("hasReloaded");

    const fetchVersion = async () => {
      try {
        // Fetch latest version.json & force a fresh request
        const res = await fetch(`/version.json?timestamp=${Date.now()}`, { cache: "no-store" });
        const data = await res.json();
        const latestVersion = data.version;

        // Ensure version has changed and hasn't reloaded in this session
        if (currentVersion && latestVersion && currentVersion !== latestVersion) {
          if (!hasReloaded) {
            console.log("New version detected:", latestVersion);
            sessionStorage.setItem("hasReloaded", "true"); // Prevent multiple reloads
            window.location.reload();
          }
        } else {
          // Store latest version & allow reloads for future updates
          localStorage.setItem("app_version", latestVersion);
          sessionStorage.removeItem("hasReloaded");
        }
      } catch (err) {
        console.error("Version check failed:", err);
      }
    };

    // Run immediately on mount & at set intervals
    fetchVersion();
    const intervalId = setInterval(fetchVersion, CHECK_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return null;
}
