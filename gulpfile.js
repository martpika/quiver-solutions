const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browsersync = require("browser-sync");
const terser = require("gulp-terser");
const autoprefixer = require("autoprefixer");


// Task for sass
function scssTask() {
    return src("app/scss/style.scss", {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist", {sourcemaps: "."}));
}

// Task for javascript
function jsTask() {
    return src("app/js/script.js", {sourcemaps: true})
    .pipe(terser())
    .pipe(dest("dist", {sourcemaps: "."}));
}


// Browsersync task
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: "."
        }
    });
    cb();
}


// Browsersync task for reloading
function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}


// Function for watching changes in scss and javascript

function watchTask() {
    watch("*.html", browsersyncReload);
    watch(["app/js/**/*.js", "app/scss/**/*.scss"], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);