moduleOne.service('firstService', [function() {
	console.log("Inside  firstService..");
	this.serviceMethodOne = function() {
		console.log("Inside Service Method One..");
	},

	this.getCurrentTime = function() {
		console.log("Inside Service Method getCurrentTime..");
		return new Date();
	}
	//Use Comma's and write n number of methods here
}]);