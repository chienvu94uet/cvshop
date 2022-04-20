/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
  },
  webpack: (config) => {
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = "camelCase";
        }
      });

    return config;
  },
  images: {
    domains: ["wp.alithemes.com", "inspirothemes.com"],
  },
};

module.exports = nextConfig;
