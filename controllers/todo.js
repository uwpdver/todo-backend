const todoRouter = require('express').Router()
const mongoose = require('mongoose')
const Todo = require('../models').Todo

// 列出所有条目
todoRouter.get('/', async (request, response) => {
  const { keyword = '' } = request.query
  const todos = await Todo.find({ content: { $regex: keyword } })
  response.json({ message: 'success', data: todos })
})

// 查询单个条目
todoRouter.get('/:id', async (request, response) => {
  const { id } = request.params
  const todo = await Todo.findById(id)
  if (todo) {
    response.json({ message: 'success', data: todo })
  } else {
    response.status(404).end()
  }
})

// 创建新条目
todoRouter.post('', async (request, response) => {
  const { content } = request.body
  var id = mongoose.Types.ObjectId()
  const todo = new Todo({
    id: id,
    content: content,
    date: new Date(),
    important: false,
    isCompleted: false,
  })

  const savedTodo = await todo.save()
  response.json({ message: 'create success', data: savedTodo })
})

// 修改重要性
todoRouter.patch('/:id/important', async (request, response) => {
  const { important } = request.body
  const { id } = request.params
  const updatedTodo = Todo.findByIdAndUpdate(id, { important: important })
  response.json({ message: 'update success', data: updatedTodo })
})

// 修改完成状态
todoRouter.patch('/:id/isCompleted',async  (request, response) => {
  const { isCompleted } = request.body
  const { id } = request.params
  const updatedTodo = await Todo.findByIdAndUpdate(id, { isCompleted: isCompleted })
  response.json({ message: 'update success', data: updatedTodo })
})

// 删除条目
todoRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  const deletedTodo = await Todo.findByIdAndDelete(id)
  response.json({ message: 'delete success', data: deletedTodo })
})

module.exports = todoRouter