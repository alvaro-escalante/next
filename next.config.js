const 
dev = process.env.NODE_ENV === 'development',
withSass = require('@zeit/next-sass'),
withCSS = require("@zeit/next-css"),
withPlugins = require('next-compose-plugins'),
optimizedImages = require('next-optimized-images'),
withPurgeCss = require('next-purgecss')

module.exports = withPlugins(
	[optimizedImages],
	withCSS(withSass({
  	sassLoaderOptions: { sourceMap: dev },
  	postcssLoaderOptions: { sourceMap: dev }
	}),
	withPurgeCss({
		purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer)
	}))
)



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




