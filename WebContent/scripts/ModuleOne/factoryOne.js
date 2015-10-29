moduleOne.factory('firstFactory', [function() {
	console.log("Inside  firstFactory..");
	return {
		serviceMethodOne : function() {
			return "From serviceMethodOne";
		},

		getDateTime : function() {
			console.log("Inside Service Method getCurrentTime..");
			return new Date();
		}
	} //Use Comma's and write n number of methods here
}]);