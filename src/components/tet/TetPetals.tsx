'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { useAdaptiveParticles } from '@/hooks/tet';

interface TetPetalsProps {
  colors?: string[];
  baseCount?: number;
}

/**
 * Falling flower petals component for Tết celebration
 * Uses tsParticles with adaptive particle count for performance
 */
export function TetPetals({
  colors = ['#ffb7c5', '#ff69b4', '#ffc0cb'],
  baseCount = 30,
}: TetPetalsProps) {
  const [init, setInit] = useState(false);
  const particleCount = useAdaptiveParticles(baseCount);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Use slim bundle for smaller size
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    detectRetina: true,

    particles: {
      number: {
        value: particleCount,
        density: { enable: true, width: 1920, height: 1080 },
      },

      color: {
        value: colors,
      },

      shape: {
        type: 'circle', // Use circle shape for now (image shape requires additional config)
      },

      // Alternative: Use colored circles as petals
      // For custom images, you need loadImageShape plugin

      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },

      size: {
        value: { min: 8, max: 20 },
      },

      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: 'bottom',
        straight: false,
        outModes: {
          default: 'out',
          bottom: 'out',
          top: 'none',
        },
      },

      wobble: {
        enable: true,
        distance: 15,
        speed: { min: 10, max: 20 },
      },

      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
    },

    reduceDuplicates: true,
    interactivity: {
      detectsOn: 'window',
      events: {
        resize: { enable: true },
      },
    },
  };

  return (
    <Particles
      id="tet-petals"
      options={options}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
}
