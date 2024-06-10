/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDirectory = process.env.BUILD_DIRECTORY || 'home';
console.log(`Build directory>>> ${buildDirectory}`);
console.log(`process.env.NODE_ENV >>> ${process.env.NODE_ENV}`);

const nextConfig = {
	distDir: isProd ? `${buildDirectory}` : undefined,
};

export default nextConfig;
