/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './src/app/image.ts',
	}
	// assetPrefix: '/portfolio',
	// publicRuntimeConfig: {
	// 	basePath: "/portfolio",
	// },
	// basePath: "/portfolio",
}

module.exports = nextConfig
