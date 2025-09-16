"use client";

import { useState, useEffect } from 'react';

export function useAssetLoader(assetUrls: string[]) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        // Resolve on both load and error to prevent one broken image
        // from blocking the entire site.
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    };

    async function loadAssets() {
      try {
        await Promise.all(assetUrls.map(url => loadImage(url)));
        if (isMounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load assets", error);
        if (isMounted) {
            setIsLoading(false); // Still proceed even if assets fail
        }
      }
    }

    loadAssets();

    return () => {
      isMounted = false;
    };
  }, [assetUrls]);

  return isLoading;
}