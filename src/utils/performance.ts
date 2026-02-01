/**
 * Performance monitoring utilities for animations
 */

export class AnimationMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;

  /**
   * Measure current FPS
   */
  measure(): number {
    this.frameCount++;
    const now = performance.now();
    const delta = now - this.lastTime;

    if (delta >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastTime = now;
    }

    return this.fps;
  }

  /**
   * Check if effects should be reduced due to low FPS
   */
  shouldReduceEffects(): boolean {
    return this.fps < 30;
  }

  /**
   * Get current FPS
   */
  getFPS(): number {
    return this.fps;
  }
}

/**
 * Detect device capabilities for adaptive rendering
 */
export interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  hasLowBattery: boolean;
  cores: number;
  connectionSpeed: 'slow' | 'medium' | 'fast';
}

export async function getDeviceCapabilities(): Promise<DeviceCapabilities> {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency || 4;
  const isLowEnd = cores <= 4;

  let hasLowBattery = false;
  if ('getBattery' in navigator) {
    try {
      const battery: any = await (navigator as any).getBattery();
      hasLowBattery = !battery.charging && battery.level < 0.2;
    } catch {
      // Battery API not available
    }
  }

  // Network speed detection
  let connectionSpeed: 'slow' | 'medium' | 'fast' = 'medium';
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        connectionSpeed = 'slow';
      } else if (effectiveType === '4g') {
        connectionSpeed = 'fast';
      }
    }
  }

  return {
    isMobile,
    isLowEnd,
    hasLowBattery,
    cores,
    connectionSpeed,
  };
}

/**
 * Calculate recommended settings based on device capabilities
 */
export async function getOptimalSettings(baseParticleCount: number = 30) {
  const caps = await getDeviceCapabilities();

  let particleCount = baseParticleCount;
  let enableEffects = true;

  // Reduce on mobile
  if (caps.isMobile) {
    particleCount = Math.floor(particleCount * 0.5);
  }

  // Further reduce on low-end devices
  if (caps.isLowEnd) {
    particleCount = Math.floor(particleCount * 0.7);
  }

  // Minimal effects on low battery
  if (caps.hasLowBattery) {
    particleCount = Math.floor(particleCount * 0.3);
  }

  // Disable on very slow connections
  if (caps.connectionSpeed === 'slow') {
    enableEffects = false;
  }

  return {
    particleCount: Math.max(10, particleCount), // Minimum 10 particles
    enableEffects,
    capabilities: caps,
  };
}
