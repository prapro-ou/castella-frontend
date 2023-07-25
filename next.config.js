/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'features'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

module.exports = nextConfig;
