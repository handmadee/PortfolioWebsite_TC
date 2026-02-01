'use client';

import { lazy, Suspense, useEffect, useState } from 'react';
import { useMotionPreference } from '@/hooks/tet';

const TetPetals = lazy(() =>
  import('./TetPetals').then((m) => ({ default: m.TetPetals }))
);

interface TetEffectsLoaderProps {
  enabled?: boolean;
  colors?: string[];
  particleCount?: number;
}

/**
 * Lazy loader for Tết effects with accessibility support
 * Only loads effects after idle time and respects motion preferences
 */
export function TetEffectsLoader({
  enabled = true,
  colors,
  particleCount = 30,
}: TetEffectsLoaderProps) {
  const [isIdle, setIsIdle] = useState(false);
  const prefersReducedMotion = useMotionPreference();

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    // Load after main content using requestIdleCallback
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setIsIdle(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setIsIdle(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [enabled, prefersReducedMotion]);

  // Don't render if motion is reduced or not enabled
  if (!enabled || prefersReducedMotion || !isIdle) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <TetPetals colors={colors} baseCount={particleCount} />
    </Suspense>
  );
}
