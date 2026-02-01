'use client';

import { TetEffectsLoader } from '@/components/tet';
import { isTetPeriod } from '@/utils/tetSeason';

/**
 * Seasonal wrapper that shows Tết effects during appropriate time
 * Only renders during January-February (Tết season)
 */
export function SeasonalEffects() {
  // Check if it's Tết period (Jan-Feb)
  const showTetEffects = isTetPeriod();

  if (!showTetEffects) {
    return null;
  }

  return (
    <TetEffectsLoader
      enabled={true}
      particleCount={25} // Conservative count for production
    />
  );
}
