/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/loader/cloudflare.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
};

module.exports = nextConfig;
