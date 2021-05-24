const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.common.js');
const outputDir = path.resolve(__dirname, './docs');

module.exports = merge(base, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: outputDir,
		compress: true,
		port: 9000,
	},
	output: {
		...base.output,
		publicPath: '/',
	},
});
