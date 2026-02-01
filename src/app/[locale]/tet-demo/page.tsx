'use client';

import { useState } from 'react';
import { TetButton, TetText, TetEffectsLoader } from '@/components/tet';
import { useMotionPreference } from '@/hooks/tet';
import {
  Sparkles,
  Flower2,
  Settings,
  Eye,
  EyeOff,
  Palette,
} from 'lucide-react';

export default function TetDemoPage() {
  const [showPetals, setShowPetals] = useState(true);
  const [petalCount, setPetalCount] = useState(30);
  const [colorScheme, setColorScheme] = useState<'pink' | 'yellow' | 'red'>(
    'pink'
  );
  const prefersReducedMotion = useMotionPreference();

  const colorSchemes = {
    pink: ['#ffb7c5', '#ff69b4', '#ffc0cb'],
    yellow: ['#FFE135', '#FFB84D', '#FF9A3C'],
    red: ['#ff0000', '#ff4444', '#ff6b6b'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white relative overflow-hidden">
      {/* Tết Effects */}
      {showPetals && (
        <TetEffectsLoader
          enabled={!prefersReducedMotion}
          colors={colorSchemes[colorScheme]}
          particleCount={petalCount}
        />
      )}

      <div className="container mx-auto px-6 py-12 relative z-20">
        {/* Header */}
        <header className="text-center mb-16">
          <TetText variant="glow" className="text-5xl md:text-7xl font-bold mb-4">
            🎊 Tết Effects Demo 🎊
          </TetText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive demonstration of Lunar New Year effects for professional
            portfolio. All effects are optimized for performance and
            accessibility.
          </p>

          {prefersReducedMotion && (
            <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600/50 rounded-lg max-w-xl mx-auto">
              <p className="text-yellow-300 flex items-center gap-2 justify-center">
                <Eye className="w-5 h-5" />
                Reduced motion detected - animations are disabled for
                accessibility
              </p>
            </div>
          )}
        </header>

        {/* Demo Sections */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Section 1: Confetti Effects */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold">Confetti & Fireworks</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Celebrate with canvas-confetti effects. Lightweight (~5KB) with
              Web Worker support.
            </p>

            <div className="space-y-4">
              <TetButton variant="confetti">Chúc Mừng Năm Mới 🎉</TetButton>
              <TetButton variant="phuc">Phúc Lộc Thọ 福</TetButton>
              <TetButton variant="fireworks">Bắn Pháo Hoa 🎆</TetButton>
            </div>

            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Tech:</strong> canvas-confetti with custom Vietnamese
                characters. Web Worker enabled for smooth performance.
              </p>
            </div>
          </section>

          {/* Section 2: Falling Petals */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Flower2 className="w-6 h-6 text-pink-400" />
              <h2 className="text-2xl font-bold">Falling Petals</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Gentle falling flower animation using tsParticles. Adaptive
              particle count based on device.
            </p>

            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Toggle Petals</span>
                </label>
                <button
                  onClick={() => setShowPetals(!showPetals)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors w-full text-left flex items-center justify-between"
                >
                  <span>{showPetals ? 'Enabled' : 'Disabled'}</span>
                  {showPetals ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">
                    Particle Count: {petalCount}
                  </span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={petalCount}
                  onChange={(e) => setPetalCount(Number(e.target.value))}
                  className="w-full accent-pink-500"
                  disabled={!showPetals}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Recommended: 20-30 for mobile, 30-50 for desktop
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm">Color Scheme</span>
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setColorScheme('pink')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                      colorScheme === 'pink'
                        ? 'bg-pink-600 ring-2 ring-pink-400'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    🌸 Đào
                  </button>
                  <button
                    onClick={() => setColorScheme('yellow')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                      colorScheme === 'yellow'
                        ? 'bg-yellow-600 ring-2 ring-yellow-400'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    🌼 Mai
                  </button>
                  <button
                    onClick={() => setColorScheme('red')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                      colorScheme === 'red'
                        ? 'bg-red-600 ring-2 ring-red-400'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    🧧 Lì Xì
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-pink-900/20 border border-pink-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Tech:</strong> tsParticles with custom SVG petals.
                Adaptive count based on device capabilities and battery level.
              </p>
            </div>
          </section>

          {/* Section 3: CSS Animations */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold">CSS-Only Animations</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Pure CSS animations for best performance. Zero JavaScript
              overhead.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Glow Effect:</p>
                <TetText variant="glow" className="text-3xl font-bold">
                  ✨ Chúc Mừng Năm Mới ✨
                </TetText>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Shimmer Effect:</p>
                <TetText variant="shimmer" className="text-3xl font-bold">
                  🎊 Phúc Lộc Thọ 🎊
                </TetText>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Float Effect:</p>
                <TetText variant="float" className="text-3xl font-bold">
                  🏮 Đón Xuân 🏮
                </TetText>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Swing Effect:</p>
                <div className="flex justify-center">
                  <div className="animate-swing text-6xl">🏮</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Tech:</strong> CSS keyframes with GPU acceleration.
                Respects prefers-reduced-motion automatically.
              </p>
            </div>
          </section>

          {/* Section 4: Performance Info */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold">Performance & Optimization</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  ✅ Bundle Size
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• tsParticles (slim): ~15KB gzipped</li>
                  <li>• canvas-confetti: ~5KB gzipped</li>
                  <li>• CSS animations: 0KB (in main bundle)</li>
                  <li>
                    • <strong>Total: ~20KB additional</strong>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  ⚡ Optimizations
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>✓ Code splitting with dynamic imports</li>
                  <li>✓ requestIdleCallback for lazy loading</li>
                  <li>✓ Web Worker support (confetti)</li>
                  <li>✓ Adaptive particle count</li>
                  <li>✓ Battery API detection</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  ♿ Accessibility
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>✓ prefers-reduced-motion support</li>
                  <li>✓ Pointer-events: none (non-blocking)</li>
                  <li>✓ Zero layout shift (CLS = 0)</li>
                  <li>✓ Semantic HTML</li>
                </ul>
              </div>

              <div className="p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  📱 Mobile Support
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>✓ Responsive design</li>
                  <li>✓ Touch-friendly buttons</li>
                  <li>✓ Reduced particles on mobile (50%)</li>
                  <li>✓ Battery-aware animations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Implementation Guide */}
        <section className="mt-12 max-w-6xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Quick Implementation Guide
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg">Install Dependencies</h3>
              <pre className="bg-black/30 p-3 rounded-lg text-xs overflow-x-auto">
                <code>
                  npm install @tsparticles/react
                  {'\n'}@tsparticles/slim canvas-confetti
                </code>
              </pre>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg">Import Components</h3>
              <pre className="bg-black/30 p-3 rounded-lg text-xs overflow-x-auto">
                <code>
                  {`import { TetEffectsLoader,\n  TetButton } from '@/components/tet';`}
                </code>
              </pre>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg">Add to Layout</h3>
              <pre className="bg-black/30 p-3 rounded-lg text-xs overflow-x-auto">
                <code>{`<TetEffectsLoader />\n<TetButton variant="confetti" />`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Full documentation and source code available in research report
            </p>
            <a
              href="/plans/portfolio-promax/reports/260201-tet-effects-research.md"
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
            >
              📖 View Research Report
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400">
          <p className="mb-2">
            Built with Next.js 16, TypeScript, Tailwind CSS, and lots of ❤️
          </p>
          <p className="text-sm">
            All effects optimized for professional portfolios - subtle,
            performant, accessible
          </p>
        </footer>
      </div>
    </div>
  );
}
