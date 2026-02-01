/**
 * Seasonal utilities for enabling Tết effects during appropriate time periods
 */

export interface TetSeason {
  isTetSeason: boolean;
  daysUntilTet: number;
  daysAfterTet: number;
}

/**
 * Calculate if current date is within Tết season
 * Tết typically falls in late January or early February
 * Enable effects 2 weeks before and 1 week after
 */
export function getTetSeasonInfo(): TetSeason {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Approximate Tết dates (Lunar New Year varies each year)
  // You should update these annually or use a lunar calendar library
  const tetDates: Record<number, Date> = {
    2025: new Date('2025-01-29'), // Year of the Snake
    2026: new Date('2026-02-17'), // Year of the Horse
    2027: new Date('2027-02-06'), // Year of the Goat
  };

  const tetDate = tetDates[currentYear] || new Date(`${currentYear}-02-01`);

  // 2 weeks before Tết
  const seasonStart = new Date(tetDate);
  seasonStart.setDate(seasonStart.getDate() - 14);

  // 1 week after Tết
  const seasonEnd = new Date(tetDate);
  seasonEnd.setDate(seasonEnd.getDate() + 7);

  const isTetSeason = now >= seasonStart && now <= seasonEnd;

  const daysUntilTet = Math.ceil(
    (tetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysAfterTet = Math.ceil(
    (now.getTime() - tetDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    isTetSeason,
    daysUntilTet,
    daysAfterTet,
  };
}

/**
 * Check if current month is within Tết period (January-February)
 * Simple check for enabling seasonal effects
 */
export function isTetPeriod(): boolean {
  const month = new Date().getMonth();
  return month === 0 || month === 1; // January or February
}

/**
 * Get recommended particle count based on time proximity to Tết
 * More particles closer to Tết day
 */
export function getRecommendedParticleCount(baseCount: number = 30): number {
  const { isTetSeason, daysUntilTet, daysAfterTet } = getTetSeasonInfo();

  if (!isTetSeason) return 0;

  // Peak on Tết day and 3 days before/after
  if (Math.abs(daysUntilTet) <= 3 || daysAfterTet <= 3) {
    return baseCount;
  }

  // Moderate 1 week before
  if (daysUntilTet > 3 && daysUntilTet <= 7) {
    return Math.floor(baseCount * 0.7);
  }

  // Light effects 2 weeks before
  if (daysUntilTet > 7) {
    return Math.floor(baseCount * 0.5);
  }

  // Fading after Tết
  if (daysAfterTet > 3) {
    return Math.floor(baseCount * 0.4);
  }

  return baseCount;
}
