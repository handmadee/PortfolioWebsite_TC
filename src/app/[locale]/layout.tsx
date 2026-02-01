import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { SeasonalEffects } from '@/components/SeasonalEffects';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'Tran Luong Thao Chi - Business Analyst Portfolio',
    vi: 'Trần Lương Thảo Chi - Portfolio Business Analyst',
    ja: 'チー・トラン・ルオン・タオ - ビジネスアナリストポートフォリオ'
  };

  const descriptions = {
    en: 'Business Analyst specializing in ERP, E-commerce, and Logistics systems. Expert in BPMN, UML, requirements analysis, and stakeholder management. Currently at HILAB Technology.',
    vi: 'Chuyên viên Phân tích Nghiệp vụ chuyên về hệ thống ERP, E-commerce và Logistics. Chuyên gia về BPMN, UML, phân tích yêu cầu và quản lý stakeholder. Hiện tại làm việc tại HILAB Technology.',
    ja: 'ERP、Eコマース、物流システムを専門とするビジネスアナリスト。BPMN、UML、要件分析、ステークホルダー管理のエキスパート。現在HILAB Technologyに在籍。'
  };

  return {
    title: {
      template: '%s | Tran Luong Thao Chi',
      default: titles[locale as keyof typeof titles],
    },
    description: descriptions[locale as keyof typeof descriptions],
    keywords: [
      'Business Analyst',
      'BA',
      'BPMN',
      'UML',
      'Requirements Analysis',
      'ERP',
      'E-commerce',
      'Logistics',
      'HILAB Technology',
      'FPT University',
      'Portfolio',
      'Tran Luong Thao Chi',
      'Japanese N3',
      'TOEIC'
    ],
    authors: [{ name: 'Tran Luong Thao Chi' }],
    creator: 'Tran Luong Thao Chi',
    publisher: 'Tran Luong Thao Chi',
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://thaochi.dev',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      siteName: 'Tran Luong Thao Chi Portfolio',
      images: [
        {
          url: '/assets/avt.jpg',
          width: 1200,
          height: 630,
          alt: 'Tran Luong Thao Chi - Business Analyst',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/assets/avt.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icon.tsx', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.tsx', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!['en', 'vi', 'ja'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              body { background-color: #0a192f !important; color: #8892b0 !important; margin: 0; }
              a { color: #64ffda; text-decoration: none; }
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <SeasonalEffects />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}