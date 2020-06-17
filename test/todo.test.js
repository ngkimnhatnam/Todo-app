var db = require("../models/todo");
const request = require("supertest");
const app = require("../app");

describe("Get Endpoints", () => {
  
  it("should get all todos", async () => {
    const res = await request(app)
      .get('/api/todos/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(db)
  })
	
	it("should get a random existing todo", async () => {
	  const randomTodo = Math.floor(Math.random()*db.length);
      const res = await request(app)
        .get(`/api/todos/${randomTodo}`)
      expect(res.body).toEqual(db.filter(todo => todo.id===randomTodo))
  })
  
	it("should return error from non-existing todo", async () => {
    const res = await request(app)
      .get(`/api/todos/${db[db.length-1].id+1}`)
    expect(res.body).toEqual({})
  })
  
  it("should return empty for non-existent queried-key-in-description todo", async () => {
    let queryKey = "world";
    const res = await request(app)
      .get(`/api/todos/searchRoute?search=${queryKey}`)
    expect(res.statusCode).toEqual(200)
	  expect(res.body).toEqual([])
  })
  
  it("should get the queried-key-in-description todo", async () => {
    let queryKey = "purpose";
    const res = await request(app)
      .get(`/api/todos/searchRoute?search=${queryKey}`)
    expect(res.statusCode).toEqual(200)
	  expect(res.body).toEqual([{
      id: 1,
      name:"Eating noddles",
      completed: true,
      description: "testing purpose"
	  }])
  })
  
  it("should get all completed todos", async () => {
    const res = await request(app)
      .get("/api/todos/completed")
    expect(res.statusCode).toEqual(200)
	  expect(res.body).toEqual(db.filter(todo => todo.completed===true))
  })
})

describe("Post Endpoints", () => {
  it("should post  a new todo", async () => {
    const res = await request(app)
      .post("/api/todos/")
		  .send({
		    name: "test is cool",
		    completed: true,
		    description: "testing"
		  })
    expect(res.statusCode).toEqual(200)
	  expect(res.body).toEqual({
      id: db[db.length-1].id,
      name: "test is cool",
      completed: true,
      description: "testing"
    })
  })
})

describe('Update Endpoints', () => {
  it("should update  a current todo", async () => {
    const res = await request(app)
      .put("/api/todos/2")
		  .send({
        name: "test is cool",
        completed: true,
        description: "testing"
      })
    expect(res.statusCode).toEqual(200)
	  expect(res.body.some(todo => todo.name==="test is cool")).toEqual(true)
  })
})

describe('Remove Endpoints', () => {
  it("should remove an existing todo", async () => {
    const res = await request(app)
      .delete("/api/todos/3")
    expect(res.statusCode).toEqual(200)
	  expect(res.body.some(todo => todo.id===3)).toEqual(false)
  })
})

