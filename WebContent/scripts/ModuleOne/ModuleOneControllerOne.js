moduleOne.controller('firstController', [
		'firstService',
		'secondService',
		'firstFactory',
		function(firstService, secondService, firstFactory) {
			console.log("Entered into Controller One..!!!");
			//To-Do Controller Specific Action

			/*Invoking Service Methods*/
			console.log("Invoking Service Methods...");
			firstService.serviceMethodOne();
			secondService.serviceMethodOne();
			console.log("Current Date/Time is - "
					+ firstService.getCurrentTime());
			/*Invoke Factory Methods*/
			console.log("Invoking Factory Methods...");
			console.log("Factory.serviceMethodOne Says..");
			console.log(firstFactory.serviceMethodOne());
			console.log("Factory.getDateTime Says..");
			console.log(firstFactory.getDateTime());
		}]);