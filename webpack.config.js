var path = require("path");
var webpack = require("webpack");
module.exports = {
	resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  entry: "./Public/js/app.js",
  output: {
    path: __dirname,
    filename: "./Public/js/bundle.js"
  },
	devServer: {
    inline: true,
		port: 3333
	},
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exlude: [/bower_components/, /node_modules/],
				query: {
					presets: ['es2015']
				}
			}
		]
	}	
} 