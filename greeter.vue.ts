/// <reference path="vue-instance.ts" />

class GreeterController extends VueInstance {
	
	constructor() {
		super();
		this.el = '#greeter';
		this.data = null;
	}

	public ready(): void {
		this.sayHi();
	};

	private sayHi(): void {
		alert('Hello, there!');
	};
}
