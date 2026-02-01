'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useSpring } from 'framer-motion';
import { projects, personalInfo } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, BookOpen, Award, CheckCircle, Brain, Database, Users, Code, Download, GraduationCap, Linkedin, Github, Mail, TrendingUp, Calendar, Building2, Target, Zap, BarChart3, Briefcase, Star, Trophy } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import BackgroundOrbs from '@/components/ui/BackgroundOrbs';

import Typewriter from '@/components/ui/Typewriter';

export default function HomePageClient({ locale }: { locale: string }) {
  const t = useTranslations('Hero');
  const tNav = useTranslations('Nav');
  
  const typewriterTexts = [
    "Business Analyst.",
    "Problem Solver.",
    "Data Enthusiast.",
    "Japanese Speaker."
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-300 selection:bg-teal-500 selection:text-white relative scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      <BackgroundOrbs />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#0a192f]/70 border-b border-white/5">
        <div className="text-teal-400 font-mono font-bold text-xl border-2 border-teal-400 p-1 rounded hover:bg-teal-400/10 transition-colors cursor-pointer">TC</div>
        <div className="flex items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={`mailto:${personalInfo.social.email}`} className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <div className="w-px h-6 bg-slate-700"></div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-32 min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 relative z-10 snap-start snap-always">
        <div className="md:w-1/2 space-y-6 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-teal-400 font-mono text-lg">
              {t('typewriter_prefix')} <Typewriter texts={typewriterTexts} />
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            {personalInfo.name}.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-slate-400"
          >
            {(personalInfo.role as any)[locale]}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {t('description')}
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="px-8 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-all font-mono">
              {t('cta')}
            </a>
            
            {/* CV Options */}
            <div className="flex gap-2">
              <a href={personalInfo.cv.vi} target="_blank" className="px-6 py-3 bg-[#112240] text-white rounded hover:bg-[#1d355e] transition-all font-mono flex items-center gap-2 border border-slate-700">
                <Download size={18} /> CV (VI)
              </a>
              <a href={personalInfo.cv.ja} target="_blank" className="px-6 py-3 bg-[#112240] text-white rounded hover:bg-[#1d355e] transition-all font-mono flex items-center gap-2 border border-slate-700">
                <Download size={18} /> CV (JP)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Professional Portrait Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-1/2 flex justify-center relative order-1 md:order-2"
        >
          {/* Animated Glow Effect */}
          <div className="absolute inset-0 rounded-3xl" style={{
            background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.25), rgba(6, 182, 212, 0.15), transparent)',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>

          {/* Decorative Frame Elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-teal-400/50 rounded-tl-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-teal-400/50 rounded-br-3xl"></div>

          {/* Main Portrait Container */}
          <div className="relative group cursor-pointer z-10">
            {/* Outer Ring - Animated */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-400 via-cyan-400 to-blue-400 opacity-30 group-hover:opacity-50 blur-xl transition-all duration-700 group-hover:blur-2xl"></div>

            {/* Portrait Frame */}
            <div className="relative w-80 h-96 md:w-96 md:h-[480px] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden border-4 border-teal-400/80 shadow-[0_0_60px_rgba(45,212,191,0.4)] group-hover:shadow-[0_0_80px_rgba(45,212,191,0.6)] transition-all duration-700">
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>

              {/* Professional Portrait */}
              <Image
                src="/assets/avt.jpg"
                alt="Tran Luong Thao Chi - Business Analyst"
                width={500}
                height={680}
                className="w-full h-full object-cover object-[center_20%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700  scale-110 transform group-hover:scale-120"
                priority
                quality={95}
              />

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a192f] to-transparent p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-lg mb-1">Tran Luong Thao Chi</p>
                <p className="text-teal-400 font-mono text-sm">Business Analyst</p>
              </div>
            </div>

            {/* Accent Dots */}
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse delay-300"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 relative z-10"></div>

      {/* Education & Experience Section */}
      <section id="education" className="container mx-auto px-6 py-24 min-h-screen flex items-center relative z-10 snap-start snap-always">
         <div className="w-full space-y-8">
           {/* Section Header */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-4">
               <span className="text-teal-400 font-mono text-xl">01.</span> Education & Experience
               <span className="h-[1px] bg-slate-700 flex-grow max-w-xs"></span>
             </h2>
             <p className="text-slate-400 ml-12">Building expertise through learning and real-world projects</p>
           </motion.div>

           {/* Main Grid */}
           <div className="grid lg:grid-cols-3 gap-8">
             {/* Academic Education */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-2 bg-gradient-to-br from-[#112240] to-[#0a192f] p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-all"
             >
               <div className="flex items-center gap-3 mb-6">
                 <GraduationCap className="text-teal-400" size={28} />
                 <h3 className="text-2xl font-bold text-white">Academic Background</h3>
               </div>

               <div className="space-y-6">
                 {personalInfo.education.map((edu, idx) => (
                   <div key={idx} className="group relative pl-6 border-l-2 border-slate-700 hover:border-teal-400 transition-colors">
                     <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-400 group-hover:scale-125 transition-transform"></div>

                     <div className="flex items-start justify-between mb-2">
                       <h4 className="text-white text-lg font-bold group-hover:text-teal-400 transition-colors">
                         {(edu.school as any)[locale]}
                       </h4>
                       <span className="text-teal-400 font-mono text-sm bg-teal-400/10 px-3 py-1 rounded-full">
                         {edu.year}
                       </span>
                     </div>

                     <p className="text-slate-300 mb-2">{(edu.degree as any)[locale]}</p>

                     {edu.gpa && (
                       <div className="flex items-center gap-2 text-sm">
                         <Star size={16} className="text-yellow-400" />
                         <span className="text-slate-400">GPA: <span className="text-white font-semibold">{edu.gpa}</span></span>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </motion.div>

             {/* Certifications */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-gradient-to-br from-[#112240] to-[#0a192f] p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-all"
             >
               <div className="flex items-center gap-3 mb-6">
                 <Award className="text-teal-400" size={28} />
                 <h3 className="text-2xl font-bold text-white">Certifications</h3>
               </div>

               <div className="space-y-4">
                 {personalInfo.certifications.map((cert, idx) => (
                   <div
                     key={idx}
                     className="flex items-start gap-3 bg-teal-400/5 p-4 rounded-lg border border-teal-400/20 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all group"
                   >
                     <CheckCircle className="text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                     <span className="text-slate-300 font-medium text-sm leading-tight">{cert}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
           </div>

           {/* Work Experience Timeline */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-gradient-to-br from-[#112240] to-[#0a192f] p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-all"
           >
             <div className="flex items-center gap-3 mb-8">
               <Briefcase className="text-teal-400" size={28} />
               <h3 className="text-2xl font-bold text-white">Work Experience</h3>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
               {personalInfo.workExperience.map((work, idx) => (
                 <div
                   key={idx}
                   className="relative bg-[#0a192f] p-6 rounded-xl border-l-4 border-teal-400 hover:shadow-lg hover:shadow-teal-400/10 transition-all group"
                 >
                   {/* Current Badge */}
                   {work.duration.includes('Present') && (
                     <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-[#0a192f] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                       <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                       Current
                     </div>
                   )}

                   <div className="mb-3">
                     <h4 className="text-white font-bold text-lg mb-1 group-hover:text-teal-400 transition-colors">
                       {(work.company as any)[locale]}
                     </h4>
                     <p className="text-teal-400 text-sm font-medium mb-2">
                       {(work.role as any)[locale]}
                     </p>
                     <div className="flex items-center gap-2 text-slate-400 text-xs">
                       <Calendar size={14} />
                       <span>{work.duration}</span>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </motion.div>

           {/* Achievements */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-gradient-to-br from-[#112240] to-[#0a192f] p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/30 transition-all"
           >
             <div className="flex items-center gap-3 mb-6">
               <Trophy className="text-yellow-400" size={28} />
               <h3 className="text-2xl font-bold text-white">Achievements & Awards</h3>
             </div>

             <div className="grid md:grid-cols-3 gap-4">
               {personalInfo.achievements.map((achievement, idx) => (
                 <div
                   key={idx}
                   className="bg-[#0a192f] p-5 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                 >
                   <div className="flex items-start gap-3 mb-3">
                     <Award className="text-yellow-400 shrink-0 mt-1 group-hover:rotate-12 transition-transform" size={20} />
                     <div className="flex-1">
                       <h4 className="text-white font-bold text-sm mb-1 leading-tight">
                         {(achievement.title as any)[locale]}
                       </h4>
                       <p className="text-slate-400 text-xs">{achievement.org}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-1 text-yellow-400/80 text-xs font-mono">
                     <Calendar size={12} />
                     <span>{achievement.year}</span>
                   </div>
                 </div>
               ))}
             </div>
           </motion.div>
         </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 relative z-10"></div>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center relative z-10 snap-start snap-always">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span> {tNav('skills')}
            <span className="h-[1px] bg-slate-700 flex-grow max-w-xs"></span>
          </h2>
          <p className="text-slate-400 ml-12 mb-12">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             {
               title: "Technical Skills",
               icon: Code,
               items: personalInfo.skills.technical,
               color: "teal"
             },
             {
               title: "Domain Knowledge",
               icon: Database,
               items: personalInfo.skills.domain,
               color: "cyan"
             },
             {
               title: "Soft Skills",
               icon: Brain,
               items: personalInfo.skills.soft,
               color: "purple"
             },
             {
               title: "Languages",
               icon: Users,
               items: personalInfo.skills.languages,
               color: "blue"
             },
           ].map((skill, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="group bg-gradient-to-br from-[#112240] to-[#0a192f] p-6 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-teal-400/10"
             >
               {/* Header */}
               <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                 <div className={`p-2 rounded-lg bg-${skill.color}-400/10 border border-${skill.color}-400/30`}>
                   <skill.icon className="text-teal-400" size={24} />
                 </div>
                 <h3 className="text-white font-bold text-lg">{skill.title}</h3>
               </div>

               {/* Skills List with Visual Indicators */}
               <div className="space-y-3">
                 {skill.items.map((s, skillIdx) => {
                   // Assign experience level based on position (earlier = more experienced)
                   const experienceLevel = Math.max(95 - (skillIdx * 10), 70);

                   return (
                     <div key={s} className="group/item">
                       <div className="flex items-center justify-between mb-1.5">
                         <span className="text-slate-300 text-sm font-medium group-hover/item:text-teal-400 transition-colors">
                           {s}
                         </span>
                         <span className="text-xs text-slate-500 font-mono">
                           {experienceLevel}%
                         </span>
                       </div>
                       {/* Progress Bar */}
                       <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                         <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: `${experienceLevel}%` }}
                           transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.05 }}
                           viewport={{ once: true }}
                           className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                         />
                       </div>
                     </div>
                   );
                 })}
               </div>

               {/* Skill Count Badge */}
               <div className="mt-6 pt-4 border-t border-slate-700/50">
                 <div className="flex items-center justify-between text-xs">
                   <span className="text-slate-500">Total Skills</span>
                   <span className="bg-teal-400/10 text-teal-400 px-2 py-1 rounded-full font-bold">
                     {skill.items.length}
                   </span>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 border border-teal-400/30 rounded-2xl p-6 text-center"
        >
          <p className="text-slate-300 text-sm">
            <span className="text-teal-400 font-bold">Always learning</span> and expanding my skillset to deliver better solutions
          </p>
        </motion.div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 relative z-10"></div>

      {/* Projects Grid */}
      <section id="projects" className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center relative z-10 snap-start snap-always">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-teal-400 font-mono text-xl">03.</span> {tNav('projects')}
          <span className="h-[1px] bg-slate-700 flex-grow max-w-xs"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/${locale}/projects/${project.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden shadow-2xl cursor-pointer h-full flex flex-col border border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 relative"
              >
                {/* Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"></div>

                {/* Header Section */}
                <div className="p-6 pb-4 border-b border-slate-700/30">
                  <div className="flex items-start justify-between mb-3">
                    {/* Company Badge */}
                    <div className="flex items-center gap-2 bg-teal-400/10 px-3 py-1.5 rounded-full border border-teal-400/30">
                      <Building2 size={14} className="text-teal-400" />
                      <span className="text-teal-400 font-medium text-xs">{project.company}</span>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                    {(project.title as any)[locale]}
                  </h3>

                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-1.5 text-teal-400 font-mono text-xs bg-teal-400/5 px-2 py-1 rounded border border-teal-400/20">
                    <Target size={12} />
                    {(project.role as any)[locale]}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3 text-sm">
                    {(project.desc as any)[locale]}
                  </p>

                  {/* Results Metrics */}
                  {project.results && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 size={16} className="text-teal-400" />
                        <span className="text-white font-semibold text-xs uppercase tracking-wide">Key Results</span>
                      </div>
                      <div className="space-y-2">
                        {((project.results as any)[locale] || []).slice(0, 2).map((result: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 bg-teal-400/5 p-2 rounded border border-teal-400/10">
                            <Zap size={14} className="text-teal-400 mt-0.5 shrink-0" />
                            <span className="text-slate-300 text-xs leading-tight">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mt-auto pt-4 border-t border-slate-700/30">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-800/50 text-slate-400 rounded text-xs font-mono border border-slate-700/50 hover:border-teal-400/30 hover:text-teal-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2.5 py-1 text-slate-500 text-xs font-mono">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between text-teal-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>View Case Study</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm font-mono relative z-10">
        <p>Designed & Built by Tran Luong Thao Chi.</p>
      </footer>
    </main>
  );
}