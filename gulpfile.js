'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

/**
 * Copilando HTML (PUG Templat)
 */
gulp.task('html', function () {
	return gulp.src('./src/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist'))
});

/**
 * Copilando JS
 */
gulp.task('js', function () {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('./dist/js/'))
});


/**
 * Servidor local
 */
gulp.task('serve', function () {

	browserSync.init({
		server: {
			baseDir: "./dist/"
		}
	});

	gulp.watch("src/*.pug", ['html']);
	gulp.watch("src/js/*.js", ['js']);	
	gulp.watch("./dist/*.*").on('change', browserSync.reload);
	gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
});

gulp.task('default', ['html', 'js', 'serve']);