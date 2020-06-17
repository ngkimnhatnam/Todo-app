## Development phases
1. CRUD Restful API on route `/api/todos` for todo app:
	* Create routes folder and todo.js that contains all the future routes. Using Router to simplify the routes, plus requiring a helper file (not existent yet) to contain all route-related functions.
	* In app.js, use "/api/todos" as prefix and append all defined todoRoutes as a variable
	* Export app for future testing purpose
	* Create folder helpers with todo.js file. In here, require the database from models. Create CRUD routes and return response as JSON
	
2. Filter:
	* For showing only completed todos, use filter function with key 'completed' as true
	* Use sort() with localeCompare function to arrange in A-Z order and vice-versa
	
3. Search:
	* Adding key 'description' to each existing object in todo array
	* Add key 'description' in post/update route when creating new/updating todo
	* Assign request search query to variable
	* Use filter with both todo description and search query to lower case to be case-insensitive. Also trim() search query so that whitespaces be removed in prior
	
4. Testing:
	* Install jest and supertest as devDependencies
	* Create __test__ folder with todo.test.js file
	* Change value for key 'test' in 'script' in package.json, adding "NODE_ENV=test jest --detectOpenHandles  --runInBand --forceExit"
	* In todo.test.js, require app.js, todo.js in models as db and supertest as request to use HTTP requests
	* Write unit testing for each CRUD route
	
	
	
	
	