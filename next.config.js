/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/AboutMe': { page: '/AboutMe' },
      '/AboutMe/index': { page: '/AboutMe' },
    }
  },
}
// images.unoptimized = true
module.exports = nextConfig

module.exports = {
  assetPrefix: './',
  trailingSlash: true,
}
