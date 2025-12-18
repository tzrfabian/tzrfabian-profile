export default async function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://fabian.tenzara.my.id/sitemap.xml',
  };
}

