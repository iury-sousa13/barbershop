/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },

    ],
  },
}

module.exports = nextConfig
