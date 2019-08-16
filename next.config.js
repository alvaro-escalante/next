const 
env = process.env.NODE_ENV,
withSass = require('@zeit/next-sass'),
withCSS = require("@zeit/next-css"),
withPlugins = require('next-compose-plugins'),
optimizedImages = require('next-optimized-images'),
OptimizeCSS = require("optimize-css-assets-webpack-plugin"),
CompressionPlugin = require('compression-webpack-plugin'),
withPurgeCss = require('next-purgecss'),
nextConfig = { 
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		DOMAIN: env === 'production' ? 'https://next.builtvisible.com' : 'http://localhost:3000'
	},
	onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader'
    })
    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSS({}))
      }
    }
    return config
  }
}


console.log(env === 'production' ? 'Production' : 'Development')

module.exports = withPlugins([
	[optimizedImages, {
		handleImages: ['jpg','jpeg', 'png', 'svg', 'webp', 'gif'],
		optimizeImagesInDev: true
	}],
	withCSS(withSass({
  	sassLoaderOptions: { sourceMap: env !== 'production' },
  	postcssLoaderOptions: { 
  		sourceMap: env !== 'production'
  	}
	}),
	withPurgeCss())

], nextConfig)

