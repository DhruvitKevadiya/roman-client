/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// Enables calling `getCloudflareContext()` in `next dev` and wires up
// Cloudflare bindings for local development with OpenNext.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
