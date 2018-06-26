"use strict";
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var pug = require("gulp-pug");
var sass = require("gulp-sass");

/**
 * Copilando HTML (PUG Templat)
 */
gulp.task("html", function() {
    return gulp
        .src("./src/*.pug")
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(gulp.dest("./dist"));
});

/**
 * Building the CSS
 */
gulp.task("sass", function() {
    return gulp
        .src("src/scss/*.scss")
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest("./dist/css/"));
});

/**
 * Building the JS
 */
gulp.task("js", function() {
    return gulp.src("src/js/*.js").pipe(gulp.dest("./dist/js/"));
});

/**
 * Local serve
 */
gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch("src/*.pug", ["html"]);
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch("src/scss/*.scss", ["sass"]);
    gulp.watch("./dist/*.*").on("change", browserSync.reload);
    gulp.watch("./dist/**/*.*").on("change", browserSync.reload);
});

/**
 * Gulp
 */
gulp.task("default", ["html", "js", "sass", "serve"]);

/**
 * Gulp deploy
 */
gulp.task("deploy", ["html", "js", "sass"]);
