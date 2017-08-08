var API_URL = 'http://localhost:3000/v1';
// var API_URL = heroku app later.
exports.SIGNIN_URL = `${API_URL}/signin`;
exports.SIGNUP_URL = `${API_URL}/signup`;
exports.TODOS_URL = (user_id) => `${API_URL}/users/${user_id}/todos`;
exports.TODO_URL = (user_id, todo_id) => `${API_URL}/users/${user_id}/todos/${todo_id}`;
