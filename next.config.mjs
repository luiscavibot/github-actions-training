/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDirectory = process.env.BUILD_DIRECTORY || 'build-in-local';
console.log(`Build directory>>> ${buildDirectory}`);

const nextConfig = {
	distDir: isProd ? `${buildDirectory}` : '.next',
};

export default nextConfig;
