/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    basePath: '/',
    output: "export",
    reactStrictMode: true,
};

module.exports = nextConfig;
