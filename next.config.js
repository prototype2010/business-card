/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // basePath: '/business-card',
    output: "export",
    reactStrictMode: true,

};

module.exports = nextConfig;
