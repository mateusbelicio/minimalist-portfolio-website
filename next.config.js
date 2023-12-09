/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
