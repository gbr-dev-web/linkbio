/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Remove a regra padrão para svg (se houver)
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('svg')) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Adiciona svgr para arquivos svg
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;