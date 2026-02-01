import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProjectDetailClient from '@/components/project/ProjectDetailClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) return { title: 'Project Not Found' };

  // Safe title access
  const title = (project.title as any)[locale] || project.title['en'];

  return {
    title: title,
    description: `Project detail for ${title}`,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} locale={locale} />;
}