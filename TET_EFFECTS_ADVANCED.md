# Tết Effects - Advanced Image Shape Configuration

## Using Custom SVG Petals (Advanced)

For production use with custom petal images, install the image shape plugin:

```bash
npm install @tsparticles/shape-image
```

Then update `TetPetals.tsx`:

```tsx
import { loadImageShape } from '@tsparticles/shape-image';

// In useEffect:
useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
    await loadImageShape(engine); // Add image shape support
  }).then(() => {
    setInit(true);
  });
}, []);

// In options:
shape: {
  type: 'image',
  options: {
    image: [
      {
        src: '/petals/mai.svg',
        width: 32,
        height: 32,
        replaceColor: true,
      },
      {
        src: '/petals/dao.svg',
        width: 32,
        height: 32,
        replaceColor: true,
      },
    ],
  },
},
```

## Current Implementation

The current version uses **circle shapes** for maximum compatibility and smaller bundle size.

**Pros:**
- No additional dependencies (~0KB)
- Works out of the box
- Faster rendering
- Better browser support

**Cons:**
- Less visually authentic (circles vs petal shapes)

## Alternatives

### Option 1: Emoji Shapes (Recommended)
Use emoji for zero-config custom shapes:

```tsx
// In TetPetals component
import { loadEmojiShape } from '@tsparticles/shape-emoji';

shape: {
  type: 'emoji',
  options: {
    emoji: {
      value: ['🌸', '🌺', '🌼'], // Flower emojis
    },
  },
},
```

### Option 2: Character Shapes
Use Unicode characters:

```tsx
import { loadTextShape } from '@tsparticles/shape-text';

shape: {
  type: 'char',
  options: {
    char: {
      value: ['花', '春', '福'], // Chinese/Vietnamese characters
      font: 'Noto Sans CJK',
      weight: 'bold',
    },
  },
},
```

### Option 3: Polygon Shapes
Create petal-like polygons:

```tsx
import { loadPolygonShape } from '@tsparticles/shape-polygon';

shape: {
  type: 'polygon',
  options: {
    polygon: {
      sides: 5, // Pentagon for flower-like shape
    },
  },
},
```

## Bundle Size Comparison

| Method | Additional Size | Visual Quality | Performance |
|--------|----------------|----------------|-------------|
| Circle (current) | 0KB | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Emoji | ~2KB | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Character | ~3KB | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Polygon | ~1KB | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Image | ~5KB | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## Recommended for Portfolio

Use **emoji shapes** for best balance of visual quality and performance:

1. Install emoji shape:
```bash
npm install @tsparticles/shape-emoji
```

2. Update component (see emoji example above)

3. Bundle impact: Only +2KB with much better visuals than circles

This gives you authentic flower visuals without the overhead of loading SVG images!
