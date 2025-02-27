import { useState, useEffect } from "react";

export function usePageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      const images = Array.from(document.querySelectorAll("img")) as HTMLImageElement[];
      const videos = Array.from(document.querySelectorAll("video")) as HTMLVideoElement[];

      const mediaElements = [...images, ...videos];

      if (mediaElements.length === 0) {
        setLoading(false);
        return;
      }

      let loadedCount = 0;
      const totalMedia = mediaElements.length;
      let isTimeout = false;

      const checkLoadingComplete = () => {
        if (!isTimeout && loadedCount >= totalMedia) {
          // 🚀 New Fix: Ensure Video is Actually Painted on Screen
          requestAnimationFrame(() => {
            setTimeout(() => {
              setLoading(false);
            }, 400);
          });
        }
      };

      const timeout = setTimeout(() => {
        isTimeout = true;
        setLoading(false);
      }, 5000); // ⏳ Timeout in case media is slow

      mediaElements.forEach((media) => {
        if (media instanceof HTMLImageElement) {
          if (media.complete) {
            loadedCount++;
            checkLoadingComplete();
          } else {
            media.addEventListener("load", () => {
              loadedCount++;
              checkLoadingComplete();
            });
            media.addEventListener("error", () => {
              loadedCount++;
              checkLoadingComplete();
            });
          }
        } else if (media instanceof HTMLVideoElement) {
          if (media.readyState >= 4) {
            loadedCount++;
            checkLoadingComplete();
          } else {
            media.addEventListener("canplaythrough", () => {
              loadedCount++;
              checkLoadingComplete();
            });
            media.addEventListener("play", () => {
              loadedCount++;
              checkLoadingComplete();
            });
            media.addEventListener("error", () => {
              loadedCount++;
              checkLoadingComplete();
            });
          }
        }
      });

      return () => clearTimeout(timeout);
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
