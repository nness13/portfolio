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
	),
}

module.exports = nextConfig
