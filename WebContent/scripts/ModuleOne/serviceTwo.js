moduleOne.service('secondService', [function() {
	console.log("Inside Second Service..");
	this.serviceMethodOne = function() {
		console.log("Inside Service Method One In Second Service..");
	} //Use Comma's and write n number of methods here
}]);