/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDirectory = process.env.BUILD_DIRECTORY || 'home';

const nextConfig = {
	distDir: isProd ? `${buildDirectory}` : 'home',
	assetPrefix: `https://d13jgt8gwoao83.cloudfront.net/${buildDirectory}`,
};

export default nextConfig;
