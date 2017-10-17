const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')


gulp.task('styles',()=>{
    gulp.src('css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
}) 

gulp.task('watch',()=>{
    livereload.listen()
    gulp.watch(['./css/**.css','index.html','index.js'],['styles'])
})