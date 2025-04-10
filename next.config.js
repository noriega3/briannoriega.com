/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./supa-image-loader.js",
  },
};

module.exports = nextConfig;
