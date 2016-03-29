// In webpack.config.js
var STATIC_URL = __dirname + '/edufai/edufai/static'

module.exports = {
	entry: [
		STATIC_URL + '/js/imagepicker/ImagePickerApp.js',
	],
	output: {
		path: STATIC_URL + '/js/dist',
		filename: 'imagepicker_bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	}
};