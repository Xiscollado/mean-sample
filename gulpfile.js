var gulp = require('gulp'),
	concat = require ('gulp-concat'),
	ngAnnotate = require('gulp-ng-annotate'),
	uglify = require ('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon');

gulp.task('js', function(){
	gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
})

gulp.task('watch:js', ['js'], function(){
	gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('dev:server', function(){
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['ng*', 'gulp*', 'assets*']
	})
})

gulp.task('dev', ['watch:js', 'dev:server']);