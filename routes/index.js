var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.get('/', todosCtrl.newTodo)
router.post('/new', todosCtrl.create);
router.delete('/:id', todosCtrl.deleteTodo);

module.exports = router;
