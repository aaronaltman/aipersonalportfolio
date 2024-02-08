import { env } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: env.OPENAI_API_KEY,
  },
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
};

export default nextConfig;
