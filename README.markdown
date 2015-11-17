### gulp-vuecc
> :tropical_drink: Gulp plug-in for unofficial [Vue component compiler](https://github.com/stpettersens/vue-component-compiler).

_Using Grunt?_ :boar: [grunt-vuecc](http://github.com/stpettersens/grunt-vuecc)

<!--
[![Build Status](https://travis-ci.org/stpettersens/gulp-codo.png?branch=master)](https://travis-ci.org/stpettersens/gulp-codo)
[![npm version](https://badge.fury.io/js/gulp-codo.svg)](http://npmjs.com/package/gulp-codo)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-codo.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-codo/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo#info=devDependencies)
-->

##### Install:

First install [vuecc](https://github.com/stpettersens/vue-component-compiler) globally:

	$ npm install -g vue-component-compiler

Then:

    $ npm install --save-dev gulp-vuecc

##### Usage:
```js
var gulp = require('gulp'),
   vuecc = require('gulp-vuecc');

gulp.task('components', function() {
	return gulp.src('*.vue.ts', {read: false})
	.pipe(vuecc({
		header: true,
		verbose: false,
		inputExt: '.vue.ts',
		outputExt: '.js'
	}));
});
```

##### Options

* **options: Object** : Object containing any of the following options:
  * **header: boolean** : Generate commented header for output (default: *true*).
  * **verbose: boolean** : Display console output for invocation (default: *true*).
  * **inputExt: string** : File extension to use for input (default: *.vue.ts*).
  * **outputExt: string** : File extension to use for output (default: *.ts*).

##### Authors

* [Sam Saint-Pettersen](https://github.com/stpettersens)

##### License

[MIT](https://opensource.org/licenses/MIT)
