/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["api.sinusoid.in"], // Add your domain here
  },
};

export default nextConfig;
