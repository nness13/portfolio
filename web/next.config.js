/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	assetPrefix: '/portfolio',
	publicRuntimeConfig: {
		basePath: "/portfolio",
	},
	basePath: "/portfolio",
}

module.exports = nextConfig
