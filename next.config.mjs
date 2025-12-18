import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the workspace root to silence the warning about multiple lockfiles
  // This ensures Next.js uses the current directory as the root, not the parent directory
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
