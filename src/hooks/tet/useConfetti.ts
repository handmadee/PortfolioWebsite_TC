'use client';

import { useCallback, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

/**
 * Hook to manage canvas-confetti instance with custom Tết effects
 * Provides fireTetConfetti and firePhucConfetti functions
 */
export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<confetti.CreateTypes | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!canvasRef.current) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;

      confettiRef.current = confetti.create(canvas, {
        resize: true,
        useWorker: true, // Performance boost
        disableForReducedMotion: true, // Accessibility
      });
    }

    return () => {
      confettiRef.current?.reset();
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
    };
  }, []);

  // Tết-themed confetti burst
  const fireTetConfetti = useCallback(() => {
    if (!confettiRef.current) return;

    const colors = ['#ff0000', '#ffd700', '#ff69b4']; // Red, gold, pink

    // Center burst
    confettiRef.current({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      shapes: ['circle', 'square'],
      scalar: 1.2,
      gravity: 1.2,
    });

    // Side bursts with delay
    setTimeout(() => {
      confettiRef.current?.({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confettiRef.current?.({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    }, 200);
  }, []);

  // Custom "Phúc" character confetti
  const firePhucConfetti = useCallback(() => {
    if (!confettiRef.current) return;

    const phuc = confetti.shapeFromText({ text: '福', scalar: 2 });

    confettiRef.current({
      particleCount: 30,
      spread: 100,
      shapes: [phuc],
      scalar: 2,
      gravity: 0.8,
      colors: ['#ff0000', '#ffd700'],
    });
  }, []);

  // Continuous fireworks effect
  const fireFireworks = useCallback(() => {
    if (!confettiRef.current) return;

    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      colors: ['#ff0000', '#ffd700', '#ff69b4', '#ffb7c5'],
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confettiRef.current?.({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confettiRef.current?.({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  return { fireTetConfetti, firePhucConfetti, fireFireworks };
}
