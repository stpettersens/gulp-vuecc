'use strict'

const gulp = require('gulp')
const vuecc = require('./')
const fs = require('fs')
const standard = require('gulp-standard')
const sequence = require('gulp-sequence')
const wait = require('gulp-wait')
const nodeunit = require('gulp-nodeunit-runner')

const out = 'greeter.ts'

gulp.task('clean', function () {
  if (fs.existsSync(out)) {
    fs.unlinkSync(out)
  }
})

gulp.task('standard', function () {
  return gulp.src('*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }))
})

gulp.task('vuecc', function () {
  return gulp.src('greeter.vue.ts', {read: false})
  .pipe(vuecc({
    header: false,
    verbose: false,
    inputExt: '.vue.ts',
    outExt: '.ts'
  }))
})

gulp.task('nodeunit', function () {
  return gulp.src('test/*_test.js')
  .pipe(wait(1500))
  .pipe(nodeunit())
})

gulp.task('test', sequence('clean', 'standard', 'vuecc', 'nodeunit'))

gulp.task('default', function () {
  console.log('Run npm test')
})
