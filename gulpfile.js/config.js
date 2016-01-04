module.exports = {
    environment: 'development', // 'development' or 'production'
	browserify: {
		sources: ['./src/assets/js/main.js'],
		dest: './dist/assets/js/'
	},
    browsersync: {
        path: './dist'
    },
	babelify: {
		presets: ['es2015'] // change to es2015-loose if you want ie9 support
	},

	less: {
		source: './src/assets/less/main.less',
		dest: './dist/assets/css',
		filename: 'style.css'
	},
	autoprefixer: {
		browsers: ['> 1%'] // add IE 9 if you want ie9 support
	},

	html: {
		source: './src/*.html',
		dest: './dist/'
	},

	images: {
		source: './src/assets/images/**/*.{jpg,jpeg,svg,gif,png}',
		dest: './dist/assets/images/'
	},
    font: {
        name: 'gulp-starter',
        source: './src/assets/fonts/icons/*.svg',
        dest: './dist/assets/fonts/',
        destCss: '../../src/assets/less/font.less',
        destInternal: '../fonts/',
        cssClass: 'gm-icon',
        template: './gulpfile.js/tasks/font.tpl'
    }
}
