'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rootPath = "./src/";
var stylePath = "./src/style/**/*.scss";
var viewsPath = "./src/pages/**/*.scss";

gulp.task('sass', function () {
  return gulp.src(stylePath)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(rootPath + "style"));
});

gulp.task('sassViews', function () {
  return gulp.src(viewsPath)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(rootPath + "pages"));
});

gulp.task('style', function () {
  gulp.run('sass', 'sassViews');
});

gulp.task('style:watch', function(){
  gulp.watch('./src/pages/**/*.scss', ['style'])
})