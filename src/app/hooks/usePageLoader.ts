import { useState, useEffect } from "react";

export function usePageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    let totalMedia = 0;
    let isTimeout = false;
    let observer: MutationObserver | null = null;

    const checkIfRendered = () => {
      // 🚀 Check if the page is visible and fully painted
      if (document.visibilityState === "visible" && document.body.getBoundingClientRect().height > 0) {
        setLoading(false);
        observer?.disconnect();
      }
    };

    const handlePageLoad = () => {
      const images = Array.from(document.querySelectorAll("img")) as HTMLImageElement[];
      const videos = Array.from(document.querySelectorAll("video")) as HTMLVideoElement[];
      totalMedia = images.length + videos.length;

      if (totalMedia === 0) {
        checkIfRendered(); // 🚀 No media? Just remove loader
        return;
      }

      const checkMediaLoaded = () => {
        if (loadedCount >= totalMedia && !isTimeout) {
          checkIfRendered();
        }
      };

      // 🚀 Use MutationObserver to track when content updates
      observer = new MutationObserver(() => {
        checkIfRendered();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // ✅ Track Images
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          checkMediaLoaded();
        } else {
          img.addEventListener("load", () => {
            loadedCount++;
            checkMediaLoaded();
          });
          img.addEventListener("error", () => {
            loadedCount++;
            checkMediaLoaded();
          });
        }
      });

      // ✅ Track Videos
      videos.forEach((video) => {
        if (video.readyState >= 5) {
          loadedCount++;
          checkMediaLoaded();
        } else {
          video.addEventListener("canplaythrough", () => {
            loadedCount++;
            checkMediaLoaded();
          });
          video.addEventListener("error", () => {
            loadedCount++;
            checkMediaLoaded();
          });
        }
      });

      // 🚀 Fallback timeout (Ensures no infinite waiting)
      const timeout = setTimeout(() => {
        isTimeout = true;
        checkIfRendered();
      }, 5000);

      return () => {
        clearTimeout(timeout);
        observer?.disconnect();
      };
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return loading;
}
