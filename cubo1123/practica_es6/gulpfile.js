const gulp = require("gulp");
const babel = require("gulp-babel");
const gulpUtil = require("gulp-util");
const sass = require('gulp-sass');

gulp.task("default" ,["js","sass", "html"], ()=> {
    console.log("Is done")
});

gulp.task("js" , () => {
    return gulp.src("./src/**/*.js")
    .pipe(babel())
    .on('error', console.error)
    .pipe(gulp.dest("./public/"))
});

gulp.task("html" , () => {
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./public/"))
});

gulp.task("sass" , () => {
    return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});
