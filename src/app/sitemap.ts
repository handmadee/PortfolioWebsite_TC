import { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

const baseUrl = 'https://thaochi-portfolio.com';
const locales = ['en', 'vi', 'ja'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Home Pages
  locales.forEach(locale => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
  });

  // Project Pages
  projects.forEach(project => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}