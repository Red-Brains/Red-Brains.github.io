/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  output: "export",
  basePath: "/gh-pages-test",
};

module.exports = nextConfig;
