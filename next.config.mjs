/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDirectory = process.env.BUILD_DIRECTORY || '';

const nextConfig = {
	distDir: isProd ? `${buildDirectory}` : undefined,
};

export default nextConfig;
