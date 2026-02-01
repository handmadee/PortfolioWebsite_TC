'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Layout, Server, ExternalLink } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface Project {
  slug: string;
  title: any;
  role: any;
  desc: any;
  tech: string[];
  company: string;
  results: any;
}

export default function ProjectDetailClient({ project, locale }: { project: Project; locale: string }) {
  const t = useTranslations('ProjectDetail');
  const tCommon = useTranslations('Common');
  
  // Safe access to localized strings
  const title = project.title[locale] || project.title['en'];
  const role = project.role[locale] || project.role['en'];
  const desc = project.desc[locale] || project.desc['en'];
  const results = project.results[locale] || project.results['en'];

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-300">
      {/* Navbar Minimal */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#0a192f]/90">
        <Link href={`/${locale}`} className="text-teal-400 hover:text-white transition-colors flex items-center gap-2">
           <ArrowLeft size={20} /> {tCommon('back_home')}
        </Link>
        <LanguageSwitcher />
      </nav>

      {/* Hero Project */}
      <section className="pt-32 pb-20 px-6 container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="text-teal-400 font-mono mb-4">{role} @ {project.company}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{title}</h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Overview */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Layout className="text-teal-400" /> {t('overview')}
              </h2>
              <p className="text-lg leading-relaxed text-slate-400">
                {desc}
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Challenges & Solutions (BA Focus) */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="text-teal-400" /> {t('challenges')}
              </h2>
              <div className="bg-[#112240] p-6 rounded-xl border-l-4 border-teal-400">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold">Problem:</span>
                    <span>High latency in data synchronization between warehouse and online store.</span>
                  </li>
                  <li className="flex gap-3">
                     <span className="text-teal-400 font-bold">Solution:</span>
                     <span>Designed a new Event-Driven Architecture using Kafka to ensure real-time updates.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                 <CheckCircle className="text-teal-400" /> {t('results')}
               </h2>
               <div className="grid sm:grid-cols-2 gap-4">
                 {results.map((res: string, idx: number) => (
                   <div key={idx} className="bg-[#112240] p-4 rounded-lg flex items-center gap-3">
                     <div className="text-teal-400 text-2xl font-bold">{(idx + 1) * 15}%</div>
                     <div className="text-sm">{res}</div>
                   </div>
                 ))}
               </div>
            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#112240] p-6 rounded-xl">
               <h3 className="text-white font-bold mb-4">{t('tech_stack')}</h3>
               <div className="flex flex-wrap gap-2">
                 {project.tech.map(tech => (
                   <span key={tech} className="bg-teal-400/10 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-xl">
               <h3 className="text-white font-bold mb-4">Resources</h3>
               <div className="space-y-3">
                 <button className="w-full flex justify-between items-center text-slate-400 hover:text-teal-400 transition-colors">
                   {tCommon('live_demo')} <ExternalLink size={16} />
                 </button>
                 <button className="w-full flex justify-between items-center text-slate-400 hover:text-teal-400 transition-colors">
                   {tCommon('source_code')} <ExternalLink size={16} />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}