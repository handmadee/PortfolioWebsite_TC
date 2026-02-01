'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect user's motion preference for accessibility
 * Respects prefers-reduced-motion CSS media query
 */
export function useMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if matchMedia is available (SSR safety)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Modern browsers
    if (query.addEventListener) {
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    }
    // Legacy browsers
    else if (query.addListener) {
      query.addListener(listener);
      return () => query.removeListener(listener);
    }
  }, []);

  return prefersReducedMotion;
}
