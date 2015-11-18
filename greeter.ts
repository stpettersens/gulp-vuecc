/// <reference path="typings/vue/vue.d.ts" />

window.onload = function() {
	new Vue({
		el:  '#greeter',
		data: {
		},
		ready: function() {
			this.sayHi();
		},
		methods: {
			sayHi: function() {
				alert('Hello, there!');
			}
		}
	});
};
