var express = require("express");
var router = express.Router();
var restMethods = require("../rest_actions/todo");

router.route("/")
  .get(restMethods.getAllTodos)
  .post(restMethods.createTodo)

router.route("/completed")
  .get(restMethods.getAllCompleted)

router.route("/A_Z")
  .get(restMethods.fromAtoZ)

router.route("/Z_A")
  .get(restMethods.fromZtoA)

router.route("/searchRoute")
  .get(restMethods.searchViaDescription)

router.route("/:id")
  .get(restMethods.getTodo)
  .put(restMethods.updateTodo)
  .delete(restMethods.removeTodo)

module.exports = router;