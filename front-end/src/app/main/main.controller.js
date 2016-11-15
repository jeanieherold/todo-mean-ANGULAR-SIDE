export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getTodos();
  }

  //getting out todos api from db
  //http.get returns a promise
  getTodos() {
  	var vm = this; //view model - reference to this so we can use vm.data once results come through
  	this.$http.get('http://localhost:5000/api/todo').then(function(result){
  		// console.log(result);
  		vm.todos = result.data; //using data because out todos are in an array inside data in json obj
  	});
  }


  //adding a post todo out of constructor
  postTodo() {
    this.$http.post('http://localhost:5000/api/todo', {td: this.todo});
  }

}
