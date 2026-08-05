/**
 * @type {import('next').NextConfig}
 *
 * Images are served by ImageKit's CDN (ik.imagekit.io). The `IKImage` wrapper
 * supplies a custom loader, so next/image hands the URL straight to the client;
 * the allowlisted remote host below is kept for any non-loader direct usage.
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
