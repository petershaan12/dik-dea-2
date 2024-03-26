/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "img.clerk.com",
            hostname: "cdn.sanity.io"
        }]
    }
};

export default nextConfig;