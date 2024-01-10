// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: { unoptimized: true },
//     output:'export',
//     trailingSlash: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
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
// console.log(nextConfig)
module.exports = nextConfig


