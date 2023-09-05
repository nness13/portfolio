/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	// images: {
	// 	loader: 'custom',
	// 	loaderFile: './src/app/image.ts',
	// }
	// assetPrefix: '/portfolio',
	// publicRuntimeConfig: {
	// 	basePath: "/portfolio",
	// },
	// basePath: "/portfolio",
}

module.exports = nextConfig
