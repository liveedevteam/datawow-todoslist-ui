/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? 'http://localhost:3001'
        : 'https://datawow-todoslist-api.herokuapp.com'
  }
}

module.exports = nextConfig
