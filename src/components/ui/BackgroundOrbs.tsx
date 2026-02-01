'use client';

import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        overflow: 'hidden', 
        pointerEvents: 'none' 
      }}
    >
      {/* Teal orb - top left */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute',
          top: '-10%', 
          left: '-10%', 
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(20, 184, 166, 0.1)',
          filter: 'blur(100px)' 
        }}
      />
      
      {/* Blue orb - bottom right */}
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute',
          bottom: '-10%', 
          right: '-10%', 
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.08)',
          filter: 'blur(100px)' 
        }}
      />
      
      {/* Cyan orb - center */}
      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute',
          top: '40%', 
          left: '40%', 
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.05)',
          filter: 'blur(80px)' 
        }}
      />
    </div>
  );
}