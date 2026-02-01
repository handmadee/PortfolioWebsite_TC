import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically comes from a routing library.
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !['en', 'vi', 'ja'].includes(locale)) {
    locale = 'en';
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});