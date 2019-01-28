var gulp = require('gulp'),
    webserver = require('gulp-webserver');

var builds = 'src';

gulp.task('js', function() {
  return gulp.src(builds + '/js/*.js')
});

gulp.task('html', function() {
  gulp.src(builds + '/**/*.html');
});

gulp.task('css', function() {
    gulp.src(builds + '/css/*.css');
});

gulp.task('watch', function() {
    gulp.watch(builds + '/js/**/*', ['js']);
    gulp.watch(builds + '/css/**/*.css', ['css']);
    gulp.watch([builds + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
    gulp.src(builds + '/')
        .pipe(webserver({
            port: 3000,
            livereload: true,
            livereloadport: 8283,
            open: true
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
