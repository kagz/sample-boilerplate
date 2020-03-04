'use strict';

const path = require('path');
const Html = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve('src'),
	entry: [
		'bootstrap/dist/css/bootstrap.css',
		'./index.js',
	],
	output: {
		path: path.resolve('dist'),
		filename: 'main.js',
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: { sourceMap: true },
				}],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: require.resolve('css-loader'),
						options: {
							sourceMap: true,
							localsConvention: 'camelCase',
							modules: { localIdentName: '[path][name]_[local]--[hash:base64:5]' },
						},
					},
				],
			},
		],
	},
	plugins: [
		new Html({ template: path.resolve('src/index.html') }),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		inline: true,
		hot: true,
		contentBase: path.resolve('/'),
		historyApiFallback: true,
		stats: 'minimal',
		publicPath: '/',
	},
};
