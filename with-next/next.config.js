/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { configCSSModule } = require("next-plugin-elter");
const nextConfig = {
  webpack: (config) => {
    return configCSSModule(config);
  },
};

module.exports = nextConfig;
