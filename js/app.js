angular.module("myTodoApp", [])

//$scope is an onject that is the area of operation for controller
//dataService is a service dependency - method below in .service
.controller('mainCtrl', function($scope, dataService){

	$scope.addTodo = function() {
		var todo = {name: "New Todo"};
		$scope.todos.push(todo);
	};

	//display the current collection of tasks items on the page
	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});

	//attaching the delete service to the controller scope variable
	//then wire it to the view todo.html delete btn
	//$index is from ng-repeat local variable- use to delete task item from collection array
	$scope.deleteTodo = function(task, $index) {
		dataService.deleteTodo(task);
		$scope.todos.splice($index, 1);
	};
//same for save button
	$scope.saveTodo = function(task) {
		dataService.saveTodo(task);
	};


})  //end controllers

// services communicate with database and are used by controllers
//pass in service to controller as a parameter
.service('dataService', function($http) {
	
	//displays the current collection of tasks to the App
	this.getTodos = function(callback){
		$http.get('mock/todos.json')
		.then(callback)
	};

	//delete a task (collections is task rather than todo - so i can differentiate 
	//when i am talking about a itme in my collection)
	this.deleteTodo = function(task) {
		console.log(task.name + " has been deleted!");
		//logic to talk to database to delete from collection
	};
	//save a task
	this.saveTodo = function(task) {
		console.log(task.name + " has been saved!");
		//logic to talk to database to delete from collection
	};

});//end services