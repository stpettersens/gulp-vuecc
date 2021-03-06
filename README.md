### gulp-vuecc
> :tropical_drink: Gulp plug-in for unofficial [Vue component compiler](https://github.com/stpettersens/vue-component-compiler).

[![Build Status](https://travis-ci.org/stpettersens/gulp-vuecc.png?branch=master)](https://travis-ci.org/stpettersens/gulp-vuecc)
[![Build status](https://ci.appveyor.com/api/projects/status/88iohpbfc3ck2cim?svg=true)](https://ci.appveyor.com/project/stpettersens/gulp-vuecc)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/gulp-vuecc.svg)](http://npmjs.com/package/gulp-vuecc)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-vuecc.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-vuecc) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-vuecc/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-vuecc#info=devDependencies)

##### Install:

`$ npm install --save-dev gulp-vuecc`

##### Usage:
```js
'use strict'

const gulp = require('gulp')
const vuecc = require('gulp-vuecc')

gulp.task('components', function() {
	return gulp.src('*.vue.ts', {read: false})
	.pipe(vuecc({
		header: true,
		verbose: false,
		inputExt: '.vue.ts',
		outputExt: '.js'
	}))
})
```

##### Options:

* **options: Object** : Object containing any of the following options:
  * **header: boolean** : Generate commented header for output (default: *true*).
  * **verbose: boolean** : Display console output for invocation (default: *true*).
  * **inputExt: string** : File extension to use for input (default: *.vue.ts*).
  * **outputExt: string** : File extension to use for output (default: *.ts*).

##### Authors:

* [Sam Saint-Pettersen](https://github.com/stpettersens)

##### License:

[MIT](https://opensource.org/licenses/MIT)

##### Using Grunt?

:boar: [grunt-vuecc](http://github.com/stpettersens/grunt-vuecc)
