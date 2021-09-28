const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name]_bundle.js'
	},
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /(\.scss|\.sass)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: false
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			chunks: ['index']
		})
	],
	devtool: 'source-map'
}
