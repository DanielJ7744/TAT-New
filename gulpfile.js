const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('styles/styles-custom.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
})

gulp.task('watch', function(){
    gulp.watch('styles/**/*.scss', gulp.series('sass'))
    themeKit.command('watch', {
        env: 'development'
    })
})