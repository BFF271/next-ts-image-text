const TerserPlugin = require('terser-webpack-plugin');

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer = [new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        parallel: true,
        terserOptions: {
          compress: true
        }
      })]
    }

    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "dns": false,
      }
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com', 'c17f-146-70-128-233.eu.ngrok.io', 'img.youtube.com'], // TODO don't forget to update here, both in PROD and DEV.
  }
}

module.exports = nextConfig;