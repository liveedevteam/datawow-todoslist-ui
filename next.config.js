/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? 'http://localhost:3001'
        : 'http://localhost:3002'
  }
}

module.exports = nextConfig
