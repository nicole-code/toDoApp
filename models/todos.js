const todos = [];

function getAll() {
    return todos
} 

function deleteOne(id) {
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
}

function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = "Not done, buddy";
    todos.push(todo);
}

module.exports = {
    getAll,
    create,
    deleteOne,
}