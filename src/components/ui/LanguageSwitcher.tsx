'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      // Replace the locale part of the path
      // Note: This is a simple implementation. For complex paths, use next-intl's Link or useRouter
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${localActive}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <div className="flex gap-2 bg-slate-800/80 p-1 rounded-full backdrop-blur-md border border-slate-700">
      {['en', 'vi', 'ja'].map((cur) => (
        <button
          key={cur}
          onClick={() => onSelectChange(cur)}
          disabled={isPending}
          aria-label={`Change language to ${cur.toUpperCase()}`}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            localActive === cur 
              ? 'bg-teal-500 text-[#0a192f] shadow-lg font-bold' 
              : 'text-slate-400 hover:text-teal-300 hover:bg-slate-700'
          }`}
        >
          {cur.toUpperCase()}
        </button>
      ))}
    </div>
  );
}