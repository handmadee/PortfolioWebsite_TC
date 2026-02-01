'use client';

import { useConfetti } from '@/hooks/tet';
import { Sparkles } from 'lucide-react';

interface TetButtonProps {
  variant?: 'confetti' | 'phuc' | 'fireworks';
  children?: React.ReactNode;
  className?: string;
}

/**
 * Interactive button that triggers Tết-themed confetti effects
 */
export function TetButton({
  variant = 'confetti',
  children,
  className = '',
}: TetButtonProps) {
  const { fireTetConfetti, firePhucConfetti, fireFireworks } = useConfetti();

  const handleClick = () => {
    switch (variant) {
      case 'phuc':
        firePhucConfetti();
        break;
      case 'fireworks':
        fireFireworks();
        break;
      default:
        fireTetConfetti();
    }
  };

  const defaultText = {
    confetti: 'Chúc Mừng Năm Mới 🎉',
    phuc: 'Phúc Lộc Thọ 福',
    fireworks: 'Bắn Pháo Hoa 🎆',
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative px-6 py-3 rounded-lg font-medium
        bg-gradient-to-r from-red-600 to-pink-600
        hover:from-red-700 hover:to-pink-700
        text-white shadow-lg hover:shadow-xl
        transition-all duration-300
        transform hover:scale-105 active:scale-95
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        {children || defaultText[variant]}
      </span>

      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </button>
  );
}
