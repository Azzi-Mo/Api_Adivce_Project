const { task } = require("gulp");

let gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  prefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  plumber = require("gulp-plumber");

gulp.task("html", function () {
  return gulp
    .src("./project/index.html")
    .pipe(plumber())
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

gulp.task("scss", function () {
  return gulp
    .src("./project/FileScss/scss.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat("All.css"))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

gulp.task("Bootstrap", function () {
  return gulp
    .src("./project/FileBootStrap/*.*")
    .pipe(plumber())
    .pipe(gulp.dest("./dist/Bootstrap"))
    .pipe(livereload());
});

gulp.task("fontAwsame", function () {
  return gulp
    .src("./project/fontawesome/**/**")
    .pipe(plumber())
    .pipe(gulp.dest("./dist/fontawesome"))
    .pipe(livereload());
});

gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("./project/index.html", gulp.series("html"));
  gulp.watch("./project/FileScss/scss.scss", gulp.series("scss"));
  gulp.watch("./project/FileBootStrap/*.*", gulp.series("Bootstrap"));
  gulp.watch("./project/fontawesome/**/**", gulp.series("fontAwsame"));
});
