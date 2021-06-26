const Todo = require('../models/todos')

function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    console.log(req.body);
    res.redirect('/')
}

function newTodo(req, res) {
    console.log('this is the new', req.body)
    res.render('/todo/new', {todo})
}

function index(req, res) {
    res.render('index.ejs', {todo: Todo.getAll()})
}

function deleteTodo(req,res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}


module.exports = {
    index: index,
    create: create,
    newTodo: newTodo,
    deleteTodo: deleteTodo,
}