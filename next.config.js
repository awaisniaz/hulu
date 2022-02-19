/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com","image.tmdb.org"]
  },
  plugins:[require('tailwind-scrollbar-hide')]
}

module.exports = nextConfig
