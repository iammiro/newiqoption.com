const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const processors = [
    autoprefixer({
        browsers: ['last 6 versions']
    }),
    nested
];

gulp.task('serve', ['pug'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('*.jade', ['pug']);
    gulp.watch('*.html').on('change', reload);
});

gulp.task('compress-images', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('compress-js', function () {
    gulp.src('src/js/*.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('pug', function buildHTML() {
    return gulp
        .src('src/pug/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/html/'));
});

gulp.task('index-page', function buildHTML() {
    return gulp
        .src('index.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('pug:watch', function () {
    gulp.watch('src/pug/*', ['html'])
});

gulp.task('scss:watch', function () {
    gulp.watch('src/scss/*', ['scss']);
});

gulp.task('default', ['scss', 'pug', 'index-page', 'compress-images', 'compress-js']);