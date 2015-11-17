'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
    _exec = require('child_process').exec;

function invokeVuecc(files, opts, cb) {
    var iExt = files[0].path.substr(-7);
    var oExt = files[0].path.substr(-3);
    var options = ' ';
    if(opts.hasOwnProperty('inputExt'))
      iExt = opts.inputExt;

    if(opts.hasOwnProperty('outputExt'))
      oExt = opts.outputExt;

    if(opts.hasOwnProperty('verbose') && !opts.verbose)
      options += '--quiet ';

    if(opts.hasOwnProperty('header') && !opts.header)
      options += '--no-header ';

    if(opts.hasOwnProperty('references') && Array.isArray(opts.references)) {
      options += '"[';
      for(var i = 0; i < opts.references.length; i++) {
          options += "'" + opts.references[i] + "'";
        if(i < opts.references.length - 1) 
          options += ',';
      }
      options += ']" ';
    }
    
    files.map(function(file) {
      var output = ' ' + file.path.substr(0, file.path.length - iExt.length) + oExt;
      //gutil.log(gutil.colors.gray('vuecc ' + file.path + output + options));
  		_exec('vuecc ' + file.path + output + options, function(err, stdout, stderr) {
  			if(stdout.length > 1 && stdout.indexOf('--quiet') == -1) gutil.log(stdout);
        if(stderr) gutil.log(gutil.colors.red(stderr));
        cb(err);
  		});
	});
}

module.exports = function(options) {
  var files = [];
  return through.obj(function(file, enc, cb) {
    if(file.isStream()) {
      cb(new gutil.PluginError('gulp-vuecc', 'Streaming not supported'));
      return;
    }
    files.push(file);
    cb(null);
  }, function (cb) {
    invokeVuecc(files, options, function(err) {
      if(err) {
        cb(new gutil.PluginError('gulp-vuecc', err, {fileName: files[0].path}));
        return;
      }
      cb(null);
    });
  });
};
