
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? "/polskitest" : "",
    images: {
        unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
};


export default nextConfig;