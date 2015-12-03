var gulp = require('gulp'),
   vuecc = require('./'),
      fs = require('fs'),
nodeunit = require('gulp-nodeunit-runner');

var out = 'greeter.ts';

gulp.task('clean', function() {
	if(fs.exists(out))
		fs.unlinkSync(out);
});

gulp.task('vuecc', function() {
	gulp.src('greeter.vue.ts', {read: false})
	.pipe(vuecc({
		header: false,
		verbose: false,
		inputExt: '.vue.ts',
		outExt: '.ts'
	}));
});

gulp.task('nodeunit', function() {
	gulp.src("test/*_test.js")
	.pipe(nodeunit());
});

gulp.task('default', function() {
	console.log('Run npm test');
});
