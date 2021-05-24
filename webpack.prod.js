const { merge } = require('webpack-merge');
const base = require('./webpack.common.js');

module.exports = merge(base, {
	mode: 'production',
	output: {
		...base.output,
		publicPath: '/landing-scroll-animation/',
	},
});
