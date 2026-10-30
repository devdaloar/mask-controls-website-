import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maskcontrols.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about/',
    '/projects/',
    '/testimonials/',
    '/contact/',
    '/services/',
    '/automation/',
    '/electrical-control-panel-design/',
    '/plc-programming/',
    '/design-build-services/',
    '/systems-integration/',
    '/installation-commissioning/',
    '/remote-monitoring/',
    '/service-and-breakdown/',
    '/siemens-plc/',
    '/mitsubishi-plc/',
    '/unitronics-plc/',
    '/industries/',
    '/industries/food-fmcg-automation/',
    '/industries/aerospace-defence/',
    '/industries/pharmaceutical-medical/',
    '/industries/marine-automation-systems/',
    '/industries/automotive-automation-for-tier-2-3-suppliers/',
    '/industries/logistics-warehousing-automation-solutions/',
    '/industries/water-utilities-automation-solutions/',
    '/blog/',
    '/blog/why-uk-manufacturers-are-outsourcing-plc-work/',
    '/blog/industrial-automation-systems-plc-solutions/',
    '/privacy-policy/'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/contact/' || route === '/services/' || route === '/projects/' ? 0.9 : 0.8
  }));
}
