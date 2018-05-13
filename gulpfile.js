const project     = 'saspi-teaser'; 
const projectName = 'saspi-teaser'; 

var gulp = require('gulp'),
cssnano = require('gulp-cssnano'),
autoprefixer = require('gulp-autoprefixer'),
postcss = require('gulp-postcss'),
browserSync = require('browser-sync'),
spritesmith = require('gulp.spritesmith'),
concat = require('gulp-concat-css');

gulp.task('server', ['build-precss', 'browserSync'], function() {
  gulp.watch('assets/dev-css/**/*.css').on('change', function (){
    gulp.start('build-precss');
  });
  gulp.watch('./assets/**/*',{ interval: 400 }).on('change', browserSync.reload);
});

gulp.task('browserSync', function() {

  browserSync.init({
    // server:{ baseDir:'./' }
    proxy:'localhost/'+project
  });
});

gulp.task('build-precss', ()=> {
  gulp.src('assets/dev-css/**/*.css')
    .pipe(postcss([require('precss')]))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(cssnano({zindex: false, reduceIdents: false}))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('concat', function () {
  return gulp.src('./assets/css/**/*.css')
    .pipe(concat("app.css"))
    .pipe(cssnano({zindex: false, reduceIdents: false}))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('./assets/img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./assets/img/'));
});