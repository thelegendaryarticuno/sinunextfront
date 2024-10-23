/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sinusoid.in",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
