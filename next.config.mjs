/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
}
// Conditionally set the output based on the environment
if (process.env.NEXT_PUBLIC_SEO === 'false') {
    nextConfig.output = 'export',
        nextConfig.images.unoptimized = true
}

export default nextConfig;
