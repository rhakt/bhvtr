var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');


gulp.task('babel', function () {
  browserify({
    entries: "./src/main.es6",
    extensions: [".babel"]
  })
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      this.emit("end");
    })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(sourcemaps.write('./', {
      addComment: true,
      sourceRoot: './src'
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.es6', ['babel'])
});

gulp.task('webserver', function () {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['babel', 'watch', 'webserver']);
