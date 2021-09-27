const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		vendor: '@babel/polyfill',
		index: './src/index.js',
		search: './src/search.js'
	},
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
		}),
		new HtmlWebpackPlugin({
			template: './src/search.html',
			filename: './search.html',
			chunks: ['search']
		})
	],
	devtool: 'source-map'
}
