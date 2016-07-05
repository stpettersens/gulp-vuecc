'use strict'

const gutil = require('gulp-util')
const through = require('through2')
const vuecc = require('vuecc-compiler')

function invokeVuecc (files, opts, cb) {
  let iExt = files[0].path.substr(-7)
  let oExt = files[0].path.substr(-3)
  let options = []
  if (opts.hasOwnProperty('inputExt')) {
    iExt = opts.inputExt
  }

  if (opts.hasOwnProperty('outputExt')) {
    oExt = opts.outputExt
  }

  if (opts.hasOwnProperty('verbose') && !opts.verbose) {
    options.push('--quiet')
  }

  if (opts.hasOwnProperty('header') && !opts.header) {
    options.push('--no-header')
  }

  if (opts.hasOwnProperty('references') && Array.isArray(opts.references)) {
    let refs = '"['
    for (let i = 0; i < opts.references.length; i++) {
      refs += "'" + opts.references[i] + "'"
      if (i < opts.references.length - 1) {
        refs += ','
      }
    }
    refs += ']"'
    options.push(refs)
  }

  files.map(function (file) {
    let output = file.path.substr(0, file.path.length - iExt.length) + oExt
    vuecc.cli('vuecc', file.path, output, options)
    cb(null)
  })
}

module.exports = function (options) {
  let files = []
  return through.obj(function (file, enc, cb) {
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-vuecc', 'Streaming not supported'))
      return
    }
    files.push(file)
    cb(null)
  }, function (cb) {
    invokeVuecc(files, options, function (err) {
      if (err) {
        cb(new gutil.PluginError('gulp-vuecc', err, {fileName: files[0].path}))
        return
      }
      cb(null)
    })
  })
}
