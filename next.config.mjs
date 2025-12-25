/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '*.sisko.replit.dev',
    '*.replit.dev',
    '*.repl.co',
  ],
  devIndicators: false,
};

export default nextConfig;
