var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
		autoprefixer = require('autoprefixer');
module.exports = {
	resolve: { //Searches the Bower_Components Directory not just the node_modules for imports
    root: [path.join(__dirname, "bower_components")],
		extensions: ["", ".js", ".jsx"]
  },
  entry: { //Entry Point for Webpack
	  app: ["./public/js/entry.js", "./public/sass/entry.sass"]
  },
  output: {
    path: "public/build/",
    filename: "bundle.js",
	  publicPath: "//localhost:3333/public/build/" //Bundled Javascript Webpack Spits out.
  },
	devServer: { //Allows webpack-dev-server to be live reloaded
    inline: true,
		hot: true,
		port: 3333,
		watch: true
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.js$/,
				exclude: [/bower_components/, /node_modules/],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
		    }
			},
      { //Converts SASS to CSS and also performs relevant pathing and auto-prefixes
        test: /\.sass$/,
	      loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax')
      },
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-icons/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=true&progressive=true'
				]
			},
			{ //Loads HTML imports/requires
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: false, browsers: ['last 2 versions'] }) ],
  plugins: [
	  new webpack.HotModuleReplacementPlugin(),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
	  new ExtractTextPlugin("style.css")
  ]
};