var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require("gulp-rename");
var inject = require('gulp-inject');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('svgstore', function() {
  var svgs = gulp
        .src('raw_assets/svg/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('images'));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('_includes/svginject.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('_includes'));
});

gulp.task('svgmin', function(){
  return gulp.src('images/*.svg').pipe(svgmin()).pipe(gulp.dest('images'));
})

gulp.task('imagemin', function() {
  return gulp.src('raw_assets/*.png')
          .pipe(imagemin({
              progressive: true,
              use: [pngquant()]
          }))
          .pipe(gulp.dest('images'));
});
