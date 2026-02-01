import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Tạm thời comment vì i18n routing động không support static export hoàn toàn dễ dàng
  images: {
    unoptimized: true
  }
};
 
export default withNextIntl(nextConfig);