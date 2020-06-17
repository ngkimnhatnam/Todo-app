var express = require("express");
var router = express.Router();
var helpers = require("../helpers/todo");

router.route("/")
	.get(helpers.getAllTodos)
	.post(helpers.createTodo)

router.route("/completed")
	.get(helpers.getAllCompleted)

router.route("/A_Z")
	.get(helpers.fromAtoZ)

router.route("/Z_A")
	.get(helpers.fromZtoA)

router.route("/searchRoute")
	.get(helpers.searchViaDescription)

router.route("/:id")
 	.get(helpers.getTodo)
 	.put(helpers.updateTodo)
 	.delete(helpers.removeTodo)

module.exports = router;