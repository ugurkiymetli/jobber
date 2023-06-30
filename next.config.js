/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: { appDir: true },
  // Add basePath
  basePath: "/jobber",
};

module.exports = nextConfig;
