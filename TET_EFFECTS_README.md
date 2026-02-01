# 🎊 Tết Effects - Lunar New Year Animations

Professional Tết (Lunar New Year) effects for portfolio website. Optimized for performance, accessibility, and mobile devices.

## 🎯 Features

### 1. **Falling Petals** 🌸
- Gentle falling cherry/peach blossom animation
- Uses tsParticles with custom SVG petals
- Adaptive particle count based on device capabilities
- ~15KB gzipped

### 2. **Confetti & Fireworks** 🎆
- Interactive celebration effects
- canvas-confetti with custom Vietnamese characters
- Web Worker support for smooth performance
- ~5KB gzipped

### 3. **CSS Animations** ✨
- Pure CSS effects (glow, shimmer, float, swing)
- Zero JavaScript overhead
- GPU accelerated

## 📦 Installation

```bash
npm install @tsparticles/react @tsparticles/slim canvas-confetti
npm install -D @types/canvas-confetti
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { TetEffectsLoader, TetButton } from '@/components/tet';

export default function Page() {
  return (
    <>
      {/* Falling petals */}
      <TetEffectsLoader />

      {/* Interactive button */}
      <TetButton variant="confetti">
        Chúc Mừng Năm Mới 🎉
      </TetButton>
    </>
  );
}
```

### Advanced Configuration

```tsx
import { TetEffectsLoader } from '@/components/tet';

<TetEffectsLoader
  enabled={true}
  colors={['#ffb7c5', '#ff69b4', '#ffc0cb']} // Pink petals
  particleCount={30} // Number of petals
/>
```

## 🎨 Components

### `<TetPetals />`
Falling flower petals animation

**Props:**
- `colors?: string[]` - Array of petal colors (default: pink theme)
- `baseCount?: number` - Base particle count (default: 30)

### `<TetButton />`
Interactive celebration button

**Props:**
- `variant?: 'confetti' | 'phuc' | 'fireworks'` - Effect type
- `children?: React.ReactNode` - Button content
- `className?: string` - Additional CSS classes

### `<TetText />`
Animated text with CSS effects

**Props:**
- `variant?: 'glow' | 'shimmer' | 'float'` - Animation type
- `children: React.ReactNode` - Text content
- `className?: string` - Additional CSS classes

### `<TetEffectsLoader />`
Lazy-loaded effects wrapper with accessibility

**Props:**
- `enabled?: boolean` - Enable/disable effects
- `colors?: string[]` - Petal colors
- `particleCount?: number` - Number of particles

## 🎣 Hooks

### `useConfetti()`
Manage confetti effects

```tsx
import { useConfetti } from '@/hooks/tet';

const { fireTetConfetti, firePhucConfetti, fireFireworks } = useConfetti();

<button onClick={fireTetConfetti}>Celebrate!</button>
```

### `useMotionPreference()`
Detect user motion preferences

```tsx
import { useMotionPreference } from '@/hooks/tet';

const prefersReducedMotion = useMotionPreference();

if (prefersReducedMotion) {
  // Show static content
}
```

### `useAdaptiveParticles(baseCount)`
Adaptive particle count based on device

```tsx
import { useAdaptiveParticles } from '@/hooks/tet';

const particleCount = useAdaptiveParticles(30);
// Returns optimized count for current device
```

## 🛠️ Utilities

### Seasonal Detection

```tsx
import { isTetPeriod, getTetSeasonInfo } from '@/utils/tetSeason';

// Simple check
if (isTetPeriod()) {
  // Show Tết effects (Jan-Feb)
}

// Detailed info
const { isTetSeason, daysUntilTet } = getTetSeasonInfo();
```

### Performance Monitoring

```tsx
import { getDeviceCapabilities, getOptimalSettings } from '@/utils/performance';

const caps = await getDeviceCapabilities();
const settings = await getOptimalSettings(30);
// Returns optimized particle count and settings
```

## ⚡ Performance

### Bundle Size
- **tsParticles (slim):** ~15KB gzipped
- **canvas-confetti:** ~5KB gzipped
- **CSS animations:** 0KB (in main bundle)
- **Total:** ~20KB additional

### Optimizations
✅ Code splitting with dynamic imports
✅ requestIdleCallback for lazy loading
✅ Web Worker support (confetti)
✅ Adaptive particle count (mobile/desktop)
✅ Battery API detection
✅ Connection speed awareness

### Core Web Vitals Impact
- **FCP:** No impact (loaded after paint)
- **LCP:** No impact (absolute positioned)
- **CLS:** 0 (no layout shift)
- **TBT:** Minimal (~50ms initialization)

## ♿ Accessibility

✅ **prefers-reduced-motion** support
✅ Pointer-events: none (non-blocking)
✅ Semantic HTML
✅ Zero layout shift
✅ Keyboard accessible buttons

## 📱 Mobile Support

✅ Responsive design
✅ Touch-friendly interactions
✅ Reduced particles (50% on mobile)
✅ Battery-aware animations
✅ Low-end device detection

## 🎨 Customization

### Color Schemes

```tsx
// Pink (Cherry blossom - Đào)
<TetEffectsLoader colors={['#ffb7c5', '#ff69b4', '#ffc0cb']} />

// Yellow (Peach blossom - Mai)
<TetEffectsLoader colors={['#FFE135', '#FFB84D', '#FF9A3C']} />

// Red (Lucky red - Lì xì)
<TetEffectsLoader colors={['#ff0000', '#ff4444', '#ff6b6b']} />
```

### Custom Animations

Add to `globals.css`:

```css
@keyframes custom-animation {
  /* Your animation */
}

.my-custom-effect {
  animation: custom-animation 2s ease infinite;
}
```

## 🧪 Demo

Visit `/tet-demo` route to see all effects in action with interactive controls:

```bash
npm run dev
# Navigate to http://localhost:3000/en/tet-demo
```

**Demo features:**
- Live particle count adjustment
- Color scheme switcher
- Performance metrics
- Accessibility testing
- Mobile preview

## 📚 Documentation

Full research report with implementation details, benchmarks, and best practices:
- `./plans/portfolio-promax/reports/260201-tet-effects-research.md`

## 🎯 Usage Recommendations

### For Professional Portfolios

**Minimal Setup (5KB):**
```tsx
import { TetButton } from '@/components/tet';

// CSS animations + button click confetti only
<TetButton variant="confetti" />
```

**Standard Setup (20KB):**
```tsx
import { TetEffectsLoader, TetButton } from '@/components/tet';

// CSS + Confetti + Petals (20 particles)
<TetEffectsLoader particleCount={20} />
<TetButton variant="confetti" />
```

**Enhanced Setup (35KB):**
```tsx
// All effects + custom SVG animations
// See demo page for full implementation
```

**Recommended:** Standard setup for professional portfolios.

## 🔧 Troubleshooting

### Effects not showing?
- Check if it's Tết season (Jan-Feb) in `SeasonalEffects` component
- Verify `prefers-reduced-motion` is not enabled
- Check browser console for errors

### Performance issues?
- Reduce `particleCount` (try 15-20)
- Disable on low-end devices using `getDeviceCapabilities()`
- Use CSS-only animations instead

### SVG petals not loading?
- Ensure `/public/petals/mai.svg` and `dao.svg` exist
- Check file paths in `TetPetals.tsx`
- Try using `<Image>` component from Next.js

## 📝 License

MIT - Feel free to use in your projects!

## 🙏 Credits

Built with:
- [tsParticles](https://github.com/tsparticles/react)
- [canvas-confetti](https://github.com/catdad/canvas-confetti)
- Next.js 16
- Tailwind CSS 4
- TypeScript

---

**Happy Lunar New Year! 🎊**
**Chúc Mừng Năm Mới! 🧧**
