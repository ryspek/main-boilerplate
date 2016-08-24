////////////////////////////
// Required
////////////////////////////

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	browserSync = require('browser-sync'),
  reload = browserSync.reload;

var config = {
    server: {
        baseDir: "./app"
    },
    port: 8080,
    open: true,
    logPrefix: "Frontend_Dev"
};

////////////////////////////
// Webserver Task
////////////////////////////
gulp.task('webserver', function () {
    browserSync(config);
});


////////////////////////////
// HTML Task
////////////////////////////
gulp.task('html', function() {
	gulp.src(['app/build/*.html'])
	.pipe(rigger())
	.pipe(gulp.dest('app/'))
	.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

////////////////////////////
// Scripts Task
////////////////////////////
gulp.task('scripts', function() {
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

////////////////////////////
// Sass Task
////////////////////////////
gulp.task('sass', function() {
	gulp.src('app/sass/style.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('app/css/'))
	.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

////////////////////////////
// Watch Task
////////////////////////////
gulp.task('watch', function() {
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/template/**/*.html', ['html']);
	gulp.watch('app/build/**/*.html', ['html']);

});

////////////////////////////
// Default Task
////////////////////////////
gulp.task('default', ['scripts', 'watch', 'sass', 'html', 'webserver']);