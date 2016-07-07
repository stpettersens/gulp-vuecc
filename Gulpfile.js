'use strict'

const gulp = require('gulp')
const vuecc = require('./')
const standard = require('gulp-standard')
const sequence = require('gulp-sequence')
const wait = require('gulp-wait')
const rename = require('gulp-rename')
const clean = require('gulp-rimraf')
const nodeUnit = require('gulp-nodeunit-runner')
const _exec = require('child_process').exec
const fs = require('fs')

gulp.task('clean', function () {
  return gulp.src(['greeter.ts', 'typings/'])
  .pipe(clean())
})

gulp.task('standard', function () {
  return gulp.src('*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }))
})

gulp.task('typings', function () {
  if (!fs.existsSync('typings/index.d.ts')) {
    _exec('typings install', function (stderr, stdout) {
      console.info(stdout)
    })
    return gulp.src('*', {read: false})
    .pipe(wait(15000))
  }
})

gulp.task('vue-def', function () {
  return gulp.src('typings/globals/vue/index.d.ts')
  .pipe(rename('vue.d.ts'))
  .pipe(gulp.dest('typings/vue'))
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
  .pipe(nodeUnit())
})

gulp.task('test', sequence('clean', 'standard', 'typings', 'vue-def', 'vuecc', 'nodeunit'))

gulp.task('default', function () {
  console.log('Run npm test')
})
