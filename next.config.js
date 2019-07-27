const 
env = process.env.NODE_ENV,
withSass = require('@zeit/next-sass'),
withCSS = require("@zeit/next-css"),
withPlugins = require('next-compose-plugins'),
optimizedImages = require('next-optimized-images'),
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
  }
}


module.exports = withPlugins([
	[optimizedImages, {
		handleImages: ['jpg','jpeg', 'png', 'svg', 'webp', 'gif'],
		optimizeImagesInDev: true
	}],
	withCSS(withSass({
  	sassLoaderOptions: { sourceMap: env === 'development' },
  	postcssLoaderOptions: { 
  		sourceMap: env === 'development'
  	}
	}),
	withPurgeCss())

], nextConfig)


// withSourceMaps = require('@zeit/next-source-maps')()

// module.exports = withPlugins([optimizedImages])

// module.exports = withCSS(withSass({

//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })
    
//     config.resolve.extensions.push('.jsx')

//     return config
//   }

// }))




