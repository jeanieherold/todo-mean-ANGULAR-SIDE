'use strict';
//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
	td: String
})

//middlewares
app.use(bodyParser.json());
//add cross origin resource sharing (cors)
app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next(); //so it does not freeze the middleware here
})

//setup to get todos from the db
app.get('/api/todo', GetTodos);

//setting endpoint for add todo
app.post('/api/todo', function(req, res) {
	console.log(req.body);

	var todo = new Todo(req.body);
	todo.save();
	//send the res to the requester
	res.status(200);
})

//function to get our todos that were added to db
function GetTodos(req, res) {
	
	Todo.find({}).exec(function(err, result) {
		res.send(result);
	})

}


//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/test", function(err,db) {
	
	if(!err) {
		console.log("we are connected to mongo");
	}
})

//tell me the server is running
var server = app.listen(5000, function() {
	console.log("The frontend server is running on port 5000!");
})













