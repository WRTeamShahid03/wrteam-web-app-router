/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig



// This is for seo

// /** @type {import('next').NextConfig} */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')
// const nextConfig = {
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// }
// // Conditionally set the output based on the environment
// if (process.env.NEXT_PUBLIC_SEO === 'false') {
//   nextConfig.output = 'export',
//     nextConfig.images.unoptimized = true
// }
// // console.log(nextConfig)
// module.exports = nextConfig





