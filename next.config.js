/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    apiUrl: `https://datawow-todoslist-api.herokuapp.com`
  }
}

module.exports = nextConfig
