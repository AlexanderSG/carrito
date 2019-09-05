const gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass");

gulp.task("sass", () => {
  gulp
    .src("scss/style.scss")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(
      sass({
        outputStyle: "expended"
      })
    )
    .pipe(gulp.dest("css"));
});

gulp.task("default", () => {
  gulp.watch("scss/*.scss", gulp.series("sass"));
});
