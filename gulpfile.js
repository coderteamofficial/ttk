'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    nib = require('nib'),
    rupture = require('rupture'),
    del = require('del'),
    notify = require('gulp-notify');

gulp.task('style', function () {
    return gulp.src('dev/stylus/style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: false,
            use:[nib(),rupture()]
        }))
        .on("error", notify.onError({
            title: "Error Stylus",
            message: "Error: <%= error.message %>"
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
    return gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('clean', function () {
    return del('assets/css/style.css');
    return del('assets/js/*.js');
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./dev/stylus/*.styl',['style']).on('change', livereload.changed);
    gulp.watch('./dev/js/*.js',['js']).on('change', livereload.changed);
});

gulp.task('default',['watch','clean','style','js']);