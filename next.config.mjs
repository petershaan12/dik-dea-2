import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin('./i18n.ts');
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            }
        ]
    }
};

export default withNextIntl(nextConfig);