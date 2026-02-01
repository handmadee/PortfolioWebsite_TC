'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Typewriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const baseText = useMotionValue(0);
  const rounded = useTransform(baseText, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[index].slice(0, latest));
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const controls = animate(baseText, texts[index].length, {
      type: "tween",
      duration: texts[index].length * 0.05,
      ease: "linear",
      onComplete: () => {
        setTimeout(() => {
          deleteText();
        }, 2000);
      }
    });
    return controls.stop;
  }, [index]);

  const deleteText = () => {
    animate(baseText, 0, {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
      onComplete: () => {
        setIndex((prev) => (prev + 1) % texts.length);
      }
    });
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      <motion.span>{displayText}</motion.span>
      <span className={`${cursor ? 'opacity-100' : 'opacity-0'} text-teal-400 ml-1`}>|</span>
    </span>
  );
}