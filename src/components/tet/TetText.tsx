'use client';

interface TetTextProps {
  children: React.ReactNode;
  variant?: 'glow' | 'shimmer' | 'float';
  className?: string;
}

/**
 * Animated text component with Tết-themed CSS effects
 * Uses pure CSS animations for best performance
 */
export function TetText({
  children,
  variant = 'glow',
  className = '',
}: TetTextProps) {
  const variantStyles = {
    glow: 'animate-glow text-red-600 dark:text-red-400',
    shimmer: 'shimmer bg-gradient-to-r from-red-600 via-yellow-500 to-pink-600 bg-clip-text text-transparent',
    float: 'animate-float',
  };

  return (
    <div
      className={`
        ${variantStyles[variant]}
        motion-safe:${variantStyles[variant]}
        motion-reduce:animate-none
        ${className}
      `}
    >
      {children}
    </div>
  );
}
