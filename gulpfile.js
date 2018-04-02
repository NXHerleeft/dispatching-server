let gulp = require('gulp');
let ts = require('gulp-typescript');
let del = require('del');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('cleanup', function () {
    return del(
        [
            'dist/**'
        ]
    );
});

gulp.task('build', function () {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(
            {
                noImplicitAny: true,
            }
        ))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['cleanup', 'build']);

/*let watcher = gulp.watch('src/!**!/!*.ts', ['cleanup', 'build']);
watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});*/
