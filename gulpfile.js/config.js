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
		filename: 'style.css'
	},
	autoprefixer: {
		browsers: ['> 1%']
	},

	html: {
		source: './src/**/*.html',
		dest: './dist/'
	},

	images: {
		source: './src/images/**/*.{jpg,jpeg,svg,gif,png}',
		dest: './dist/images/'
	}
}
