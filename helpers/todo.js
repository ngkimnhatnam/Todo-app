var db = require("../models/todo");

exports.getAllTodos = ((req,res) => res.status(200) ? res.json(db): res.send("Error"));

exports.createTodo = (req,res) => {
	const newTodo = {
		id: db[db.length-1].id +1,
		name: req.body.name,
		completed: req.body.completed,
		description: req.body.description
	}
	db.push(newTodo);
	return res.json(newTodo);
}

exports.getTodo = (req,res) => {
	const requestedTodo = db.filter(todo => todo.id === Number(req.params.id));
	(requestedTodo.length > 0) ? res.json(requestedTodo) : res.send("No such todo found")
		
}

exports.updateTodo = (req,res) => {
	const updatedTodo = {
		id: Number(req.params.id),
		name: req.body.name,
		completed: req.body.completed,
		description: req.body.description
	}
	db.map((todo,index) => {
		todo.id === Number(updatedTodo.id) ? db[index] = updatedTodo : todo
	})
	return res.json(db);
}

exports.removeTodo = (req,res) => {
	db = db.filter((todo) => todo.id !== Number(req.params.id))
	return res.json(db);
}

exports.getAllCompleted = (req,res) => {
	let newTodos = Object.assign([], db);
	newTodos = db.filter((todo) => todo.completed)
	return res.json(newTodos);
}

exports.fromAtoZ = (req,res) => {
	let sortAscDb = Object.assign([],db);
	sortAscDb.sort((a, b) => a.name.localeCompare(b.name))
	return res.json(sortAscDb);
}

exports.fromZtoA = (req,res) => {
	let sortDesDb = Object.assign([],db);
	sortDesDb.sort((a, b) => b.name.localeCompare(a.name))
	return res.json(sortDesDb);
}

exports.searchViaDescription = (req,res) => {
	
	let searchQuery = req.query.search;
	let dbAfterSearch = Object.assign([],db);
	if(searchQuery) { 	
		dbAfterSearch = dbAfterSearch.filter((todo) => todo.description.toLowerCase().includes(searchQuery.toLowerCase().trim()))	
	}
	return res.json(dbAfterSearch);
}

module.exports = exports;




