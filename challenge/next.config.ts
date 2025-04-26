import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
