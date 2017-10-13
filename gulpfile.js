const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('styles',()=>{
    gulp.src('css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
}) 

gulp.task('watch',()=>{
    gulp.watch('./css/**.css',['styles'])
})