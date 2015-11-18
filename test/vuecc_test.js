'use strict';

var fs = require('fs');

exports.vuecc = function(test) {

	test.expect(1);

	var actual = fs.readFileSync('greeter.ts').toString();
	var expected = fs.readFileSync('test/expected.ts').toString();
	test.equal(actual, expected, 'should have created greeter.ts from greeter.vue.ts.');

	console.log('Should have created greeter.ts from greeter.vue.ts.');
	
	test.done();
}