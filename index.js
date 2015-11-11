'use strict';
var gutil = require('gulp-util'),
  through = require('through2'),
    _exec = require('child_process').exec;


function invokeVuecc(files, opts, cb) {
	files.map(function(file) {
		var ext = file.path.substr(-3);
		var output = file.path.substr(0, file.path.length - 7) + ext;
		_exec('vuecc ' + file.path + ' ' + output, function(err, stdout, stderr) {
			console.log(stdout);
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
        cb(new gutil.PluginError('gulp-vuecc', err, {fileName: file.path}));
        return;
      }
      cb(null);
    });
  });
};
