/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDirectory = process.env.BUILD_DIRECTORY || 'home';

const nextConfig = {
	distDir: isProd ? `${buildDirectory}` : 'home',
	assetPrefix: isProd
		? `https://d13jgt8gwoao83.cloudfront.net/${buildDirectory}`
		: undefined,
	compress: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, s-maxage=59; stale-while-revalidate=60; includeSubDomains; preload',
					},
				],
			},
		];
	},
};

export default nextConfig;
