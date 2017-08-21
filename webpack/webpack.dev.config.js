var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loder", "less-loader"]
			}
		]
	},
}