/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export',
	env: {
		BOT_TOKEN: process.env.BOT_TOKEN,
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
	},
};

export default nextConfig;
