/** @type {import('next').NextConfig} */
const prod_options = {
	output: 'export',
	images: {
		unoptimized: true,
	},
}

const nextConfig = {
	...(process.env.NODE_ENV === "production"
		? prod_options
		: {}
	)

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
