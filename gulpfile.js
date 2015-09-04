var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require("gulp-rename");
var inject = require('gulp-inject');

gulp.task('svgstore', function() {
  var svgs = gulp
        .src('assets/svg/*.svg')
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
