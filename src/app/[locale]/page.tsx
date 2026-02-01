import { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Trang Chủ' : locale === 'ja' ? 'ホーム' : 'Home',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HomePageClient locale={locale} />;
}