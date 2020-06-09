var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');
 
gulp.task('compilehtml', function(cb) {
  gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
    cb()
});

gulp.task('watch', function() {
    gulp.watch('html/*.html', gulp.series('compilehtml'))
    gulp.watch('html/partials/*.html', gulp.series('compilehtml'))
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask