/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: process.env.WORDPRESS_API_URL
      ? [
          {
            protocol: new URL(process.env.WORDPRESS_API_URL).protocol.replace(":", ""),
            hostname: new URL(process.env.WORDPRESS_API_URL).hostname,
            port: new URL(process.env.WORDPRESS_API_URL).port,
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
