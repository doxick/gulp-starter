module.exports = {
	browserify: {
		source: './src/js/main.js',
		dest: './dist/js/',
		filename: 'main.js'
	},
	babelify: {
		presets: ['es2015']
	},

	less: {
		source: './src/less/main.less',
		dest: './dist/css',
		filename: 'style.css',
	},
	autoprefixer: {
		browsers: ['> 1%']
	},

	html: {
		source: './src/index.html',
		dest: './dist/',
		filename: 'index.html'
	}
}
