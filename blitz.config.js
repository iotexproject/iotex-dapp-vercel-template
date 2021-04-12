module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: "empty",
    }
    return config
  },
  experimental: {
    isomorphicResolverImports: true,
  },
  middleware: [
    (req, res, next) => {
      res.blitzCtx.req = req
      res.blitzCtx.res = res
      return next()
    },
  ],
  /*
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
  */
}
