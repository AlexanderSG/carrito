const gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass");

gulp.task("sass", () => {
  gulp
    .src("scss/style.scss")
    .pipe(autoprefixer({}))
    .pipe(
      sass({
        includePaths: ["scss"]
      })
    )
    .pipe(gulp.dest("css"));
});
gulp.task("watch", ["sass"], () => {
  gulp.watch(["scss/*.scss"], ["sass"]);
});

