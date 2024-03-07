/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*' },
      { protocol: 'http', hostname: '*' },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig
