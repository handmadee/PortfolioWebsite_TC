'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to adaptively adjust particle count based on device capabilities
 * Reduces particles on mobile, low-end devices, and low battery
 */
export function useAdaptiveParticles(baseCount: number) {
  const [count, setCount] = useState(baseCount);

  useEffect(() => {
    let finalCount = baseCount;

    // Device detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEnd =
      navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    if (isMobile) {
      finalCount = Math.floor(baseCount * 0.5); // 50% on mobile
    } else if (isLowEnd) {
      finalCount = Math.floor(baseCount * 0.7); // 70% on low-end devices
    }

    // Battery API (if available)
    if ('getBattery' in navigator) {
      (navigator as any)
        .getBattery()
        .then((battery: any) => {
          if (!battery.charging && battery.level < 0.2) {
            finalCount = Math.floor(baseCount * 0.3); // Reduce on low battery
          }
          setCount(finalCount);
        })
        .catch(() => {
          setCount(finalCount);
        });
    } else {
      setCount(finalCount);
    }
  }, [baseCount]);

  return count;
}
