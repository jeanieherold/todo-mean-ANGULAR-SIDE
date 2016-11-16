angular.module("myTodoApp", [])

//$scope is an onject that is the area of operation for controller
.controller('mainCtrl', function($scope){

	//attach functions to the scope to allow them to alter that area of the html
	$scope.taskEdited = function() {
		console.log('a task was edited');
	};

	$scope.todos = 
		[
			{"name": "Sleep"},
			{"name": "Eat"},
			{"name": "Pray"}
		]

});
