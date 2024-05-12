/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.akamai.steamstatic.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "strefaskilla.pl",
        port: "",
        pathname: "/uploads/monthly_2024_04/**",
      },
    ],
  },
};

export default nextConfig;