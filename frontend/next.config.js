/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
sassOptions: {
    includePaths: [path.join(__dirname, "src/app/_styles/")],
    // loadPaths: [path.resolve(__dirname, '/app/')]
  },
  
};

module.exports = nextConfig;
