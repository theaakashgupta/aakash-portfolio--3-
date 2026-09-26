import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json exists in the parent folder, which makes
  // Turbopack guess the wrong workspace root. Pin it to this app.
  turbopack: { root },
};

export default nextConfig;
